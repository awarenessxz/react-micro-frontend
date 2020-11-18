import { createStore, compose, applyMiddleware, Store } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { RootState, createRootReducer, reducersMap } from './root-reducer';

const configureProdStore = (initialState?: RootState) => {
    const middlewares = [
        // Add other middleware on this line...
        thunkMiddleware,
    ];
    return createStore(createRootReducer(), initialState, compose(applyMiddleware(...middlewares)));
};

const configureDevStore = (initialState?: RootState) => {
    const middlewares = [
        // Add other middleware on this line...
        reduxImmutableStateInvariant(), // redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunkMiddleware,
    ];

    const composeEnhancers = composeWithDevTools({}); // typescript shortcut for window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(createRootReducer(), initialState, composeEnhancers(applyMiddleware(...middlewares)));

    if (module.hot) {
        module.hot.accept('../redux/root-reducer.ts', () => {
            store.replaceReducer(createRootReducer());
        });
    }

    return store;
};

const configureStore = (initialState?: RootState): Store<RootState> => {
    const store = process.env.NODE_ENV === 'production' ? configureProdStore : configureDevStore;

    // Add a dictionary to keep track of the registered async reducers
    // @ts-ignore
    store.asyncReducers = {};

    // Create an inject reducer function
    // This function adds the async reducer, and create a new combined reducer
    // @ts-ignore
    store.injectReducer = (key, asyncReducer) => {
        // @ts-ignore
        store.asyncReducers[key] = asyncReducer;
        // @ts-ignore
        store.replaceReducer(createRootReducer(store.asyncReducers));
    };

    // Return the modified store
    return store;
};

export default configureStore;
