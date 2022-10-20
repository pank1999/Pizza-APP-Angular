import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Store } from '@ngrx/store';
import { get_User, RootReducerState, UserOrder } from '../store/reducers';
import { AddUserOrderAction, RemoveUserOrderAction } from '../store/actions/order.action';
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
     this.store.dispatch(new EmptyCartAction());   
     this.cartService.emptyUserCart(this.userLoggedIn.id);
     return this.http.post(this.Base_url,order).subscribe(res=>{
      this.store.dispatch(new AddUserOrderAction({order:res}));
     });
  }

  //get orders by user id
  getAllOrders(userId:any){
      return  this.http.get(`${this.Base_url}/${userId}`);
  }

  removeOrder(userId:number,orderId:number){
       this.store.dispatch(new RemoveUserOrderAction({id:orderId}));
       return this.http.delete(`${this.Base_url}?userId=${userId}&orderId=${orderId}`).subscribe();
  }

}
