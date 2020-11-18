import { combineReducers, ReducersMapObject } from 'redux';

export interface RootState {
}

export const reducersMap = {

};

// root reducer for redux
export const createRootReducer = (asyncReducers?: ReducersMapObject) => {
    return combineReducers<RootState>({
        ...reducersMap, // reducers belonging to container app
        ...asyncReducers // reducers loaded from other apps
    });
};
