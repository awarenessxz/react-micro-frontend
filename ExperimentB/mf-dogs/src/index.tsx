import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Invoked by container.MicronFrontend.tsx
// @ts-ignore
window.renderDogs = (containerId, history) => {
    ReactDOM.render(
        <App />,
        document.getElementById(containerId),
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

// Invoked by container.MicronFrontend.tsx
// @ts-ignore
window.unmountDogs = containerId => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Dogs-container')) {
    ReactDOM.render(<App />, document.getElementById('root'));

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}