import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientType } from '../models/Ingredient';
import { IngredientsService } from '../services/ingredients.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private ingredientService:IngredientsService,private route:Router) { }
  
  Ingredients:IngredientType[]=[];

  selectedIngredient:number[]=[];

  ngOnInit(): void {
   this.Ingredients= this.ingredientService.getIngredients();
  }

  bgcolor="black";
  selectIngredient(id:number){
     this.Ingredients.map((item)=>{
        if(item.id===id){
          item.isSelected=!item.isSelected;
          item.isSelected? this.selectedIngredient.push(item.id): this.selectedIngredient.pop();
        }
     });
    
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
