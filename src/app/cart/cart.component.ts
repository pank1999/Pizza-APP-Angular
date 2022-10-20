import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { CartStartAction } from '../store/actions/cart.action';
import { getUserCart, getUserCartStart, get_User, RootReducerState } from '../store/reducers';

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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService:CartService,private router: Router , private store:Store<RootReducerState>,private orderService:OrderService){}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource$!:any;
  totalPrice:number=0;
  userLoggedIn!:any;
  
  ngOnInit(): void {

    this.store.dispatch(new CartStartAction());

    //getting userId
    this.store.select(get_User).subscribe(res=>{
       this.userLoggedIn=res;
    })
    
    this.cartService.getUserCart(this.userLoggedIn.id);
    
    this.store.select(getUserCart).subscribe(res=>{
      this.dataSource$=res;
    });

    this.dataSource$?.forEach((element:any) => {
      element.IngArray?.forEach( (ing:any) => {
          this.totalPrice+=ing.price;
       });
    });
     

  }

  checkout(){
      const orderData={
        userId:this.userLoggedIn.id,
        totalPrice:this.totalPrice,
        items:this.dataSource$,
        status:'OrderPlaced'
      }
      
      this.orderService.addOrder(orderData);
      this.router.navigate(["/orders"]);
  }


  deleteCartPizza(pizzaId:number){
       return this.cartService.deleteSinglePizza(this.userLoggedIn.id,pizzaId);
  }

}
