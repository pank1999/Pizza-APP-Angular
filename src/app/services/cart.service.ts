import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Store } from '@ngrx/store';
import { RootReducerState } from '../store/reducers';
import { CartSuccessAction } from '../store/actions/cart.action';
import { Observable } from 'rxjs';
import { EmptyPizzaAction } from '../store/actions/pizza.action';


export interface IngredientType{
  name:string,
  price:number,
  img:string,
  isSelected:boolean
}

export interface pizzaType{
  userId:number,
  TotalPrice:number,
  IngQuantity:number,
  IngArray:IngredientType[]
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  Base_url="http://localhost:3000/cart";

  constructor(private http:HttpClient,private store:Store<RootReducerState>) { }
  userCart$!:Observable<any>;
  //adding pizza to user cart 
  AddToCartPost(pizza:pizzaType){
     //console.log("in add to cart function ",pizza);
     this.store.dispatch(new EmptyPizzaAction());
     return this.http.post("http://localhost:3000/cart",pizza).subscribe();
  }
   
  //get user cart
  getUserCart(userId:any){
        this.userCart$=this.http.get(`${this.Base_url}/${userId}`);
        this.userCart$.subscribe(res=>{
         // console.log(res);
          this.store.dispatch(new CartSuccessAction({cart:res}))
        });
        return this.userCart$
  }

  //empty user cart
  emptyUserCart(userId:number){
      console.log("empoty user cart method call");
    return this.http.delete(`${this.Base_url}/${userId}`).subscribe();

  }

}
