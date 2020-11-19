import { combineReducers, ReducersMapObject } from 'redux';
import appReducer from "./app/app-reducer";

const reducersMap = {
    app: appReducer
};

// root reducer for redux
export const createRootReducer = (asyncReducers?: ReducersMapObject) => {
    return combineReducers({
        ...reducersMap, // reducers belonging to container app
        ...asyncReducers // reducers loaded from other apps
    });
};

const rootReducer = createRootReducer();
export type RootState = ReturnType<typeof rootReducer>;
