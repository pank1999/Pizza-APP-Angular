import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService:CartService) { }
  @Input() user=false;
  @Output() loggedOutUser=new EventEmitter<boolean>();

  cartSize$!:Observable<any>;
  size!:number;
  ngOnInit(): void {
      this.cartSize$=this.cartService.getUserCart(1);
  }

  logout(){
     this.loggedOutUser.emit(false);
     window.localStorage.removeItem("email");
  }
}
