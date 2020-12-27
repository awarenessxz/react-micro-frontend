import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Action, AnyAction } from "redux";
import App from "./pages/App";
import "./styles/app.scss";
import useRemoteStore from "./utils/UseRemoteStore";

interface RemoteStoreWrapperProps<S, A extends Action = AnyAction> {
    children: React.ReactNode;
}

const RemoteStoreWrapper = <S, A extends Action>(props: RemoteStoreWrapperProps<S, A>): JSX.Element => {
    const purchaseAppStore = useRemoteStore("app_purchase/reduxStore");

    if (purchaseAppStore) {
        return (
            <Provider store={purchaseAppStore}>
                {props.children}
            </Provider>
        );
    }

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};

const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <RemoteStoreWrapper>
            <AppComponent/>
        </RemoteStoreWrapper>,
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
