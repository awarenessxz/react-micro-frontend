import {CartItem, CartActionTypes, ADD_ITEM_TO_CART, AppThunkResult, REMOVE_ITEM_TO_CART} from "./cart-action.types";

export const addItemToCart = (item: CartItem): CartActionTypes => ({
    type: ADD_ITEM_TO_CART,
    payload: {
        item,
    },
});

export const removeItemFromCart = (item: CartItem): AppThunkResult<void> => {
    return (dispatch, getState): void => {
        const newCartItems = getState().cart.itemsInCart.filter(cartItem => {
            return cartItem.title !== item.title;
        });
        dispatch({
            type: REMOVE_ITEM_TO_CART,
            payload: {
                cartItems: newCartItems,
            },
        });
    };
};
