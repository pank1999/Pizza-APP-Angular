export  const CART_START='cart start';
export  const CART_SUCCESS='cart success';
export const CART_FAIL='cart fail';
export const EMPTY_CART='empty cart';
export const DELETE_PIZZA='delete single pizza';

export class CartStartAction{
    readonly type=CART_START;
}

export class CartSuccessAction{
    readonly type=CART_SUCCESS;
    constructor(public payload?:{cart:any[]}){}
}

export class CartFailAction{
    readonly type=CART_FAIL;
}

export class EmptyCartAction{
    readonly type=EMPTY_CART;
}

export class DeletePizzaAction{
    readonly type=DELETE_PIZZA;
    constructor(public payload?:{id:number}){}
}