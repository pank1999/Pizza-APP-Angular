import { IngredientType } from "src/app/models/Ingredient";

export  const INGREDIENT_LIST_START ='ingredinet list request';
export  const INGREDIENT_LIST_SUCCESS ='ingredinet list success';



export class IngredinetListStartAction{
    readonly type=INGREDIENT_LIST_START;
}

export class IngredinetListSuccessAction{
    readonly type=INGREDIENT_LIST_SUCCESS;
    constructor(public payload?:{data:IngredientType[]}){}
}
