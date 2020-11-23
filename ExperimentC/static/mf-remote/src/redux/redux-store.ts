import { createStore, compose, applyMiddleware, Store } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { RootState, rootReducer } from './root-reducer';
import {RootActionType} from "./root-action";

const configureProdStore = (initialState?: RootState): Store<RootState, RootActionType> => {
    const middlewares = [
        // Add other middleware on this line...
        thunkMiddleware,
    ];
    return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
};

const configureDevStore = (initialState?: RootState): Store<RootState, RootActionType> => {
    const middlewares = [
        // Add other middleware on this line...
        reduxImmutableStateInvariant(), // redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunkMiddleware,
    ];

    const composeEnhancers = composeWithDevTools({}); // typescript shortcut for window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

    if (module.hot) {
        module.hot.accept('../redux/root-reducer.ts', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
};

const store = process.env.NODE_ENV === 'production' ? configureProdStore : configureDevStore;
export default store;
