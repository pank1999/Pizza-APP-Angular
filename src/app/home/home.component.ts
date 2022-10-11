
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, toArray } from 'rxjs';
import { IngredientType } from '../models/Ingredient';
import { IngredientsService } from '../services/ingredients.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private ingredientService:IngredientsService,private route:Router) { }
  
   Ingredients!:Observable<any>;
    //Ingredients:any;
  selectedIngredient:IngredientType[]=[];
  selectedIngSize=0;

  ngOnInit(): void {
   this.Ingredients = this.ingredientService.getIngredients();
   console.log(this.Ingredients);
  }
  //bgColor!:string;

  selectIngredient(Ing:IngredientType){

        this.selectedIngredient.push(Ing);
        this.selectedIngSize=this.selectedIngredient.length;
  }



  quantity=0;
  setQuantity(val:string){
       if(val==="add"){
          this.quantity+=1;
       }
       else{
          this.quantity-=1;
       }
  }

  AddToCart(){
      this.route.navigate(["/cart",this.selectedIngredient]);
  }
}
