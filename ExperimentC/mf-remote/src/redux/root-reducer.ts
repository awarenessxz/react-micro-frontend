import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';
import { CartStateTypes } from './cart/cart-action.types';

export interface RootState {
    cart: CartStateTypes;
}

export const reducersMap = {
    cart: cartReducer,
};

// root reducer for redux
export const rootReducer = combineReducers<RootState>(reducersMap);
