import { IngredientType } from "src/app/models/Ingredient";


export  const SELECTED_INGREDIENT ='list of ingredient';
export const ADD_INGREDIENT='add ingredient to pizza';
export const REMOVE_INGREDIENT='remove ingredient from pizza';
export const EMPTY_PIZZA='empty pizza';




export class AddPizzaAction{
    readonly type=ADD_INGREDIENT;
    constructor(public payload?:{data:IngredientType}){};
}


export class RemovePizzaAction{
    readonly type=REMOVE_INGREDIENT;
    constructor(public payload?:{id:number}){};
}

export class GetSelectedIngredient{
    readonly type=SELECTED_INGREDIENT
}

export class EmptyPizzaAction{
    readonly type=EMPTY_PIZZA
}