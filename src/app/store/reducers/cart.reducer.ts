import { Action } from "../actions"
import { CART_FAIL, CART_START, CART_SUCCESS, EMPTY_CART } from "../actions/cart.action"


export interface cartReducerState{
    loading:boolean,
    loaded:boolean,
    fail:boolean,
    cart:any
}

export const initialState:cartReducerState={
    loading:false,
    loaded:false,
    fail:false,
    cart:null
}

export function cartReducer(state=initialState,action:Action):cartReducerState{
     switch(action.type){
        case CART_START:{
            return {...state,loading:true}
        }
        case CART_SUCCESS:{
            const data=action.payload.cart;
            console.log(data);
            return {...state,loading:false,loaded:true,cart:data}
        }
        case CART_FAIL:{
            return {...state,fail:true}
        }
        case EMPTY_CART:{
            return {...state, cart:null}
        }
        default : {
           return state;
        }
     }    
}


// selectors

export const getCartSuccess=(state:cartReducerState)=>state.loaded;
export const getCartStart=(state:cartReducerState)=>state.loading;
export const getCartFail=(state:cartReducerState)=>state.fail;
export const getCart=(state:cartReducerState)=>state.cart;
export const GetEmptyCart=(state:cartReducerState)=>state.cart;



