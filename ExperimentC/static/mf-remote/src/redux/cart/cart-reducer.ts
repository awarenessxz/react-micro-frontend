import {ADD_ITEM_TO_CART, CartActionTypes, CartStateTypes, REMOVE_ITEM_TO_CART} from "./cart-action.types";

const initialState: CartStateTypes = {
    itemsInCart: [],
};

const cartReducer = (state: CartStateTypes = initialState, action: CartActionTypes): CartStateTypes => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                itemsInCart: [ ...state.itemsInCart, action.payload.item ],
            };
        case REMOVE_ITEM_TO_CART:
            return {
                ...state,
                itemsInCart: action.payload.cartItems,
            };
        default:
            return state;
    }
};

export default cartReducer;
