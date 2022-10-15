import { Action } from "../actions";
import { IngredientType } from "src/app/services/cart.service";
import { INGREDIENT_LIST_START, INGREDIENT_LIST_SUCCESS } from "../actions/ingredinet.action";

export interface IngredientReducerState{
    loading:boolean,
    loaded:boolean,
    ingredient:IngredientType[]
}

export const initialState:IngredientReducerState={
    loading:false,
    loaded:false,
    ingredient:[]
}


export function IngredinetReducer(state=initialState,action:Action):IngredientReducerState{ 
    switch(action.type){
        case INGREDIENT_LIST_START:{
            return {...state,loading:true};
        }
        case  INGREDIENT_LIST_SUCCESS:{
             const data=action.payload.data;
             return {...state,loaded:true,loading:false,ingredient:data};
        }
        default :{
            return state;
        }
    }
}


//selector

export const getIngredientStart=(state:IngredientReducerState)=>{
    state.loading;
}


export const getIngredientSuccess=(state:IngredientReducerState)=>{
    state.loaded
}

export const getIngredients=(state:IngredientReducerState)=>{
   state.ingredient;
}

