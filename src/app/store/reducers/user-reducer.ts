import { useerType } from "src/app/models/user";
import { Action } from "../actions";
import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/user-action";

export interface UserReducerState{
    loginStart:boolean;
    loginSuccess:boolean;
    loginFail:boolean;
    // user:useerType;
    user:any;
}

//initail state

const initailState:UserReducerState={
   loginStart:false,
   loginSuccess:false,
   loginFail:false,
   user:null
}

export function UserReducer(state=initailState,action:Action):UserReducerState{ 
    switch(action.type){
        case USER_LOGIN_START:{
            return {...state,loginStart:true};
        }
        case  USER_LOGIN_SUCCESS:{
             const data=action.payload.data;
             return {...state,loginSuccess:true,loginStart:false,user:data};
        }
        case USER_LOGOUT:{
            return {...state,user:null};
        }
        default :{
            return state;
        }
    }
}


//selectors

export const getLoginStart=(state:UserReducerState)=>state.loginStart;


export const getLoginSuccess=(state:UserReducerState)=>state.loginSuccess;


export const getLoginFail=(state:UserReducerState)=>state.loginFail;


export const getUser=(state:UserReducerState)=>state.user;

export const userLogout=(state:UserReducerState)=>state.user;



