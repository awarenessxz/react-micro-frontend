import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import RandomCat from "./components/RandomCats";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
      <Router history={history}>
        <Route exact path="/" component={RandomCat} />
        <Route path="/:greeting" component={RandomCat} />
      </Router>
  );
}

export default App;