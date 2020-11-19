import { ThunkAction } from "redux-thunk";
import { RootState } from "./root-reducer";
import { CartActionTypes } from "./cart/cart-action.types";

// consolidates all action types (typescript)
export type RootActionType = CartActionTypes;

// redux-thunk actions
export type AppThunkResult<R> = ThunkAction<R, RootState, undefined, RootActionType>;