import { IngredientType } from "src/app/models/Ingredient";
import { Action } from "../actions";
import { ADD_INGREDIENT, EMPTY_PIZZA, REMOVE_INGREDIENT, SELECTED_INGREDIENT } from "../actions/pizza.action";

export interface PizzaReducerState{
    pizza:IngredientType[]
}

export const initialState:PizzaReducerState={
    pizza:[]
}

export function PizzaReducer(state=initialState,action:Action):PizzaReducerState{
    switch(action.type){
        case ADD_INGREDIENT:{
            const data=action.payload.data;
            const updatedPizza=state.pizza.concat(data);
            return {...state,...{pizza:updatedPizza}};
        }
        case REMOVE_INGREDIENT:{
            const ing=state.pizza.filter(ele=>ele.id !== action.payload.id);
            return {...state,...{pizza:ing}};
        }
        case SELECTED_INGREDIENT:{
            return state;
        }
        case EMPTY_PIZZA:{
            return {...state,pizza:[]}
        }
        default :{
            return state;
        }
    }
    
}

//selector 
export const GetPizzaIngredient=(state:PizzaReducerState)=>state.pizza;
export const GetEmptyPizza=(state:PizzaReducerState)=>state.pizza;