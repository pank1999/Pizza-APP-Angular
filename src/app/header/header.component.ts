import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, toArray } from 'rxjs';
import { useerType } from '../models/user';
import { CartService } from '../services/cart.service';
import { UserLogoutAction } from '../store/actions/user-action';
import { getUserCart, getUserLoginSuccess, get_User, RootReducerState } from '../store/reducers';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService,private store:Store<RootReducerState> , private router:Router) { }
  @Input() user=false;
  @Output() loggedOutUser=new EventEmitter<boolean>();

  cartSize$!:Observable<any>;
  size:number=0;
  userLoggedIn!:any;
  ngOnInit(): void {

      this.cartSize$=this.cartService.getUserCart(1);

      this.store.select(get_User).subscribe(res=>{
        this.userLoggedIn=res;
        console.log(this.userLoggedIn)
        });

      this.store.select(getUserCart).subscribe(
        res=>{
          this.size=res.length;
          console.log(this.size);
        }
      )  
  }

  logout(){
     this.store.dispatch(new UserLogoutAction());
     this.router.navigate([""]);
     window.localStorage.removeItem("email");
  }
}
