import { Action } from "../actions"
import { ADD_USER_ORDER, REMOVE_USER_ORDER, USER_ORDERS } from "../actions/order.action"

export interface OrderReducerState{
    order:any[]
}

export const initialState:OrderReducerState={
    order:[]
}

export function OrderReducer(state=initialState,action:Action){
       switch(action.type){
          case USER_ORDERS:{
             return state
          }
          case ADD_USER_ORDER:{
              const data=action.payload.order;
              const updatedOrder=state.order.concat(data);
             return  {...state, ...{order:updatedOrder}}
          }
          case REMOVE_USER_ORDER :{
            const order=state.order.filter(ele=>ele.id !== action.payload.id);
            return {...state,...{order}}
          } 
          default:{
            return state
          }
       }
}

//selector
export const GetUserOrder=(state:OrderReducerState)=>state.order;
export const AddUserOrder=(state:OrderReducerState)=>state.order;
export const RemoveUserOrder=(state:OrderReducerState)=>state.order;