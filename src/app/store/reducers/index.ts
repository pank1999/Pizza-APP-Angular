import { ActionReducerMap, createSelector } from "@ngrx/store";
import { IngredientReducerState, IngredinetReducer } from "./ingredinet.reducer";
import { getLoginFail, getLoginStart, getLoginSuccess, getUser, UserReducer, UserReducerState } from "./user-reducer";

export interface RootReducerState{
    user:UserReducerState;
    ingredients:IngredientReducerState;
}

//master reducer - combination of all reducer
export const rootReducer:ActionReducerMap<RootReducerState>={
    user:UserReducer,
    ingredients:IngredinetReducer
}

export const getUserState=(state:RootReducerState)=>{
 return state.user;
}

export const getUserLoginStart=createSelector(getUserState,getLoginStart);
export const getUserLoginSuccess=createSelector(getUserState,getLoginSuccess);
export const getUserLoginFail=createSelector(getUserState,getLoginFail);

export const get_User=createSelector(getUserState,getUser);



//ingredient selector
