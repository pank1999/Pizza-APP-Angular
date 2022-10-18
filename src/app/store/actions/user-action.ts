import { useerType } from "src/app/models/user";

export  const USER_LOGIN_START='user login start';
export  const USER_LOGIN_SUCCESS='user login success';
export const USER_LOGIN_FAIL='user login fail';
export const USER_LOGOUT='user logout';

export class UserLoginStartAction{
    readonly type=USER_LOGIN_START;
}

export class UserLoginSuccessAction{
    readonly type=USER_LOGIN_SUCCESS;
    constructor(public payload?:{data:any}){}
}

export class UserLoginFailAction{
    readonly type=USER_LOGIN_FAIL;
}


export class UserLogoutAction{
    readonly type=USER_LOGOUT;
}


