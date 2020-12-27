import { ThunkAction } from 'redux-thunk';
import { RootState } from "../root-reducer";

/* ***************************************************************************************
 * Types Definition for other
 *************************************************************************************** */

export interface CartItem {
    id: string;
    title: string;
    image: string;
    desc: string;
}

// Redux State (App)
export interface CartStateTypes {
    itemsInCart: CartItem[];
}

/* ***************************************************************************************
 * List of all action type
 *************************************************************************************** */

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART';

/* ***************************************************************************************
 * Types Definition for all action type
 *************************************************************************************** */

interface AddItemToCardAction {
    type: typeof ADD_ITEM_TO_CART;
    payload: {
        item: CartItem;
    };
}

interface RemoveItemToCardAction {
    type: typeof REMOVE_ITEM_TO_CART;
    payload: {
        cartItems: CartItem[];
    };
}

export type CartActionTypes = AddItemToCardAction | RemoveItemToCardAction;
