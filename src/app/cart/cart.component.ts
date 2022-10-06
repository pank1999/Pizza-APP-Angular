import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

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
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:pizzaType[]=[];

  ngOnInit(): void {
    this.dataSource=this.cartService.getUserCart(2);
    console.log(this.dataSource);
  }

}
