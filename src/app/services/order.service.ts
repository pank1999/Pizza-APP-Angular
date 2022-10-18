import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {orderType} from "../models/order";
import { Store } from '@ngrx/store';
import { get_User, RootReducerState } from '../store/reducers';
import { AddUserOrderAction } from '../store/actions/order.action';
import { EmptyCartAction } from '../store/actions/cart.action';
import { CartService } from './cart.service';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Base_url="http://localhost:3000/order";
  constructor(private http:HttpClient, private store:Store<RootReducerState>,private cartService:CartService) {

    this.store.select(get_User).subscribe(res=>{
      this.userLoggedIn=res;
   })
   
   }
  userLoggedIn!:any;
  //getting userId
 
  
  addOrder(order:any){
     this.store.dispatch(new AddUserOrderAction({order}));  
     this.store.dispatch(new EmptyCartAction());   
     this.cartService.emptyUserCart(this.userLoggedIn.id);
     return this.http.post(this.Base_url,order).subscribe();
  }

  //get orders by user id
  getAllOrders(userId:any){
      return  this.http.get(`${this.Base_url}/${userId}`);
  }

}
