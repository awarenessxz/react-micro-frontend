import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./root-reducer";
//import { AppActionTypes } from "./app/app-action.types";

// consolidates all action types (typescript)
export type RootActionType = Action;

// redux-thunk actions
export type AppThunkResult<R> = ThunkAction<R, RootState, undefined, RootActionType>;