import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Store, Action, AnyAction, ReducersMapObject } from "redux";
import App from "./pages/App";
import "./styles/app.scss";
import store from './redux/redux-store';
const remoteReducers = import('app_mf_remote/reduxReducer');

const reduxStore = store();
const injectAllRemoteReducerIntoStore = <S, A extends Action>(store: Store<S, A>, reducersMap: ReducersMapObject<S, A>) => {
    console.log('injecting...', store.getState());
    for (const [key, value] of Object.entries(reducersMap)) {
        console.log('injecting...', key, value);
        // @ts-ignore
        store.injectReducer(key, value);
    }
    console.log('injecting...', store.getState());
};

interface RemoteReduxWrapperProps<S, A extends Action = AnyAction> {
    store: Store<S, A>;
    children: React.ReactNode;
}

const RemoteReduxWrapper = <S, A extends Action>(props: RemoteReduxWrapperProps<S, A>): JSX.Element => {
    const { store } = props;
    React.useEffect(() => {
        // @ts-ignore
        remoteReducers.then(fn => {
            injectAllRemoteReducerIntoStore(store, fn.reducersMap);
        });
    }, []);

    return (
        <React.Fragment>
            { props.children }
        </React.Fragment>
    );
};

const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <RemoteReduxWrapper store={reduxStore}>
                <AppComponent />
            </RemoteReduxWrapper>
        </Provider>,
        document.getElementById('app')
    );
};

// renders application on first load
render(App);

// webpack dev server : Hot Module Replacement
if (module.hot) {
    module.hot.accept('./pages/App', () => {
        render(App);
    });
}
