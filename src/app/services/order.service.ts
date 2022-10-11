import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {orderType} from "../models/order";



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Base_url="http://localhost:3000/order";
  constructor(private http:HttpClient) { }
  
  
  addOrder(order:any){
     return this.http.post(this.Base_url,order);
  }

  //get orders by user id
  getAllOrders(userId:any){
      return  this.http.get(`${this.Base_url}/${userId}`);
  }

}
