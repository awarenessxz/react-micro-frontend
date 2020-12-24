import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";
import "./styles/app.scss";

const render = (AppComponent: React.FC): void => {
    ReactDOM.render(
        <AppComponent/>,
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
