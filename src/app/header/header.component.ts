import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { CartService } from '../services/cart.service';
import { UserLogoutAction } from '../store/actions/user-action';
import { getUserCart, get_User, RootReducerState } from '../store/reducers';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService,private store:Store<RootReducerState> , private router:Router) { }


cartSize$!:Observable<any>;
size:number=0;
userLoggedIn!:any;
  
  ngOnInit(): void {

      this.store.select(get_User).subscribe(res=>{
        this.userLoggedIn=res;
        });
      // this.cartService.getUserCart(this.userLoggedIn.id).subscribe(res=>{
      //     console.log(res);
      // });

      this.store.select(getUserCart).subscribe(
        res=>{
          this.size=res?.length;
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
