import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./pages/App";
import "./styles/app.scss";
import { injectRemoteReducerIntoStore } from "app_mf_remote/reduxUtils";

import store from './redux/redux-store';

const reduxStore = store();
injectRemoteReducerIntoStore(reduxStore);
console.log(reduxStore.getState());
const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <AppComponent />
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
