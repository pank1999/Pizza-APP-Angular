import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface IngredientType{
  name:string,
  price:number,
  img:string
}

export interface pizzaType{
  id:number,
  TotalPrice:number,
  IngQuantity:number,
  IngArray:IngredientType[]
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  Base_url="http://localhost:3000/cart";
  constructor(private http:HttpClient) { }
  // cartData:pizzaType[]= [
  //   {
  //    id:1,
  //    TotalPrice:200,
  //    IngQuantity:3,
  //    IngArray:[
  //     {name:'Ing1',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  //     {name:'Ing2',price:100,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  //     {name:'Ing3',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  //   ]
  //   },
  //   {
  //     id:2,
  //     TotalPrice:100,
  //     IngQuantity:2,
  //     IngArray:[
  //      {name:'Ing1',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  //      {name:'Ing2',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  //    ]
  //    }
  // ]
  
  //adding pizza to user cart 
  AddToCart(pizza:any){
     this.http.post(this.Base_url,pizza);
  }
   
  //get user cart
  getUserCart(userId:any){
       return this.http.get(`${this.Base_url}/${userId}`);
     // return this.cartData;
  }

}
