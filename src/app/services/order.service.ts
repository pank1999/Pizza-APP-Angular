import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {orderType} from "../models/order";



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  Base_url="localhost:3000/api/order";
  constructor(private http:HttpClient) { }
  
  orders:orderType[]=[
    {
      id:1,
      userId:2,
      totalPrice:300,
      items:[
        {
          pizza:[
            {
              id:1,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:100,
              Name:"Ing1",
              isSelected:true,
            },
            {
              id:2,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:200,
              Name:"Ing2",
              isSelected:true,
           }
          ]
        },
        {
          pizza:[
            {
              id:4,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:100,
              Name:"Ing1",
              isSelected:true,
            },
            {
              id:3,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:200,
              Name:"Ing2",
              isSelected:true,
           }
          ]
        }
      ]
    },
    {
      id:2,
      userId:2,
      totalPrice:500,
      items:[
        {
          pizza:[
            {
              id:1,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:300,
              Name:"Ing1",
              isSelected:true,
            },
            {
              id:2,
              img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
              price:200,
              Name:"Ing2",
              isSelected:true,
           }
          ]
        }
      ]
    }
  ]
  
  addOrder(order:any){
     this.http.post(this.Base_url,order);
  }

  //get orders by user id
  getAllOrders(userId:any){
    // this.http.get(`${this.Base_url}/${userId}`);
     return this.orders;
  }

}
