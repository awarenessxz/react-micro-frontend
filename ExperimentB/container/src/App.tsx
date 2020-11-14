import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import GreetingCat from "./pages/GreetingCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
      <BrowserRouter>
          <React.Fragment>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cat/:greeting" component={GreetingCat} />
              </Switch>
          </React.Fragment>
      </BrowserRouter>
  );
}

export default App;