import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Store, Action, AnyAction } from "redux";
import App from "./pages/App";
import "./styles/app.scss";
import store from './redux/redux-store';
import useRemoteReducers from "./utils/UseRemoteReducers";

const reduxStore = store();

interface RemoteReduxWrapperProps<S, A extends Action = AnyAction> {
    store: Store<S, A>;
    children: React.ReactNode;
}

const RemoteReduxWrapper = <S, A extends Action>(props: RemoteReduxWrapperProps<S, A>): JSX.Element => {
    const { store } = props;
    const [isSiteReady, setIsSiteReady] = useState(false);
    const isPurchaseAppReducerLoaded = useRemoteReducers("app_purchase/reduxReducer", store);

    useEffect(() => {
        if (!isSiteReady) {
            const isReduxReady = isPurchaseAppReducerLoaded;
            if (isReduxReady) {
                setIsSiteReady(true);
            }
        }
    }, [isPurchaseAppReducerLoaded]);

    if (isSiteReady) {
        return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        );
    }

    return <div>Loading Site....</div>;
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
