import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloader } from 'react-hot-loader';
import App from "./pages/App";
import "./styles/app.scss";

const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <HotReloader>
            <AppComponent />
        </HotReloader>,
        document.getElementById('app'),
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
