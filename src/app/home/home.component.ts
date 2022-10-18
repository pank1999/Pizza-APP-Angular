import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, toArray } from 'rxjs';
import { IngredientType } from '../models/Ingredient';
import { CartService } from '../services/cart.service';
import { IngredientsService } from '../services/ingredients.service';
import { AddPizzaAction, RemovePizzaAction } from '../store/actions/pizza.action';
import { getIngs, getPizza, get_User, RootReducerState } from '../store/reducers';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(
    private ingredientService: IngredientsService,
    private route: Router,
    private store: Store<RootReducerState>,
    private cartService :CartService
  ) {}

  Ingredients$!: Observable<any>;
  Ingredients:any;
  selectedIngSize = 0;
  Ings$!:Observable<any>;
  userLoggedIn!:any;

  ngOnInit(): void {

    this.Ingredients$ = this.ingredientService.getIngredients();

    this.store.select(getIngs).subscribe(res=>{
        this.Ingredients=res
    });
      
     //getting userId
     this.store.select(get_User).subscribe(res=>{
      this.userLoggedIn=res;
     })
  }

  quantity = 0;
  PizzaTotalPrice=0;
  IngArray!:any;
  //helper func for calculating total price and Ing Quantity
  helper(){
    const pizza = this.store.select(getPizza);

     pizza.subscribe(res=>{
      this.IngArray=res;
     });

    pizza.subscribe(res=>{
         res.forEach(ing=>{
            console.log(this.PizzaTotalPrice);
            this.PizzaTotalPrice+=ing.price;
         })
    })
  }

  AddToCart() {
    this.helper();
    const data={
      userId:this.userLoggedIn.id,
      TotalPrice:this.PizzaTotalPrice,
      IngQuantity:this.quantity,
      IngArray:this.IngArray
    }
     console.log("this data will be added to cart",data);
    if(this.userLoggedIn && this.quantity>0){
      this.cartService.AddToCartPost(data)
      this.route.navigate(['/cart']);
    } 
  }

  addIng(ing:IngredientType){
     this.store.dispatch(new AddPizzaAction({data:ing}))
     this.quantity += 1;
  }

  remove(id:number){
     this.store.dispatch(new RemovePizzaAction({id}));
     this.quantity -= 1;
  }
}
