import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";
import "./styles/app.scss";

import store from './redux/redux-store';
import { CombineReduxProvider } from "./utils/mf-util";

const reduxStore = store();
const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <CombineReduxProvider store={reduxStore}>
            <AppComponent />
        </CombineReduxProvider>,
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
