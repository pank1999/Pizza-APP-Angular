export const USER_ORDERS='get user orders';
export const ADD_USER_ORDER='add user order';

export class UserOrderAction{
    readonly type=USER_ORDERS;
}

export class AddUserOrderAction{
    readonly type=ADD_USER_ORDER;
    constructor(public payload?:{order:[]}){}
}
