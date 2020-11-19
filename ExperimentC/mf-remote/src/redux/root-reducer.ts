import { combineReducers } from 'redux';
import cartReducer from './cart/cart-reducer';

export const reducersMap = {
    cart: cartReducer,
};

// root reducer for redux
export const rootReducer = combineReducers(reducersMap);

export type RootState = ReturnType<typeof rootReducer>;
