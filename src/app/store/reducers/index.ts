import { ActionReducerMap, createSelector } from "@ngrx/store";
import { cartReducer, cartReducerState, getCart, getCartFail, getCartStart, getCartSuccess, GetEmptyCart } from "./cart.reducer";
import { getIngredients, getIngredientStart, getIngredientSuccess, IngredientReducerState, IngredinetReducer } from "./ingredinet.reducer";
import { AddUserOrder, GetUserOrder, OrderReducer, OrderReducerState } from "./order.reducer";
import { GetEmptyPizza, GetPizzaIngredient, PizzaReducer, PizzaReducerState } from "./pizza.reducer";
import { getLoginFail, getLoginStart, getLoginSuccess, getUser, userLogout, UserReducer, UserReducerState } from "./user-reducer";

export interface RootReducerState{
    user:UserReducerState;
    ingredients:IngredientReducerState;
    cart:cartReducerState;
    pizza:PizzaReducerState;
    order:OrderReducerState;
}

//master reducer - combination of all reducer
export const rootReducer:ActionReducerMap<RootReducerState>={
    user:UserReducer,
    ingredients:IngredinetReducer,
    cart:cartReducer,
    pizza:PizzaReducer,
    order:OrderReducer,
}

export const getUserState=(state:RootReducerState)=>{
 return state.user;
}

export const getIngredientState=(state:RootReducerState)=>{
    return state.ingredients;
}

export const getCartState=(state:RootReducerState)=>{
    return state.cart;
}

export const getPizzaState=(state:RootReducerState)=>{
    return state.pizza;
}

export const getOrderState=(state:RootReducerState)=>{
    return state.order
}





export const getUserLoginStart=createSelector(getUserState,getLoginStart);
export const getUserLoginSuccess=createSelector(getUserState,getLoginSuccess);
export const getUserLoginFail=createSelector(getUserState,getLoginFail);
export const get_User=createSelector(getUserState,getUser);
export const LogoutUser=createSelector(getUserState,userLogout);


//ingredient selector
export const getIngSuccess=createSelector(getIngredientState,getIngredientSuccess);
export const getIngStart=createSelector(getIngredientState,getIngredientStart);
export const getIngs=createSelector(getIngredientState,getIngredients)


//cart selector
export const getUserCart=createSelector(getCartState,getCart);
export const getUserCartStart=createSelector(getCartState,getCartStart);
export const getUserCartSuccess=createSelector(getCartState,getCartSuccess);
export const getUserCartFail=createSelector(getCartState,getCartFail);
export const EmptyCart=createSelector(getCartState,GetEmptyCart);


//pizza selector
export const getPizza=createSelector(getPizzaState,GetPizzaIngredient);
export const EmptyPizza=createSelector(getPizzaState,GetEmptyPizza);


//order selector 
export const UserOrder=createSelector(getOrderState,GetUserOrder);
export const AddUserOrderStore=createSelector(getOrderState,AddUserOrder);