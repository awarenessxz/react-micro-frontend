import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from "react-component-library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent theme='secondary' />
      </header>
    </div>
  );
}

export default App;
