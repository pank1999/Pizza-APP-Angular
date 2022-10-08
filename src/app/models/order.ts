import {IngredientType} from "../models/Ingredient";

  interface itemType{
    pizza:IngredientType[]
  }
  
  export interface orderType{
     id:number,
     userId:number,
     totalPrice:number,
     items:itemType[],
     status:string,
  }
  