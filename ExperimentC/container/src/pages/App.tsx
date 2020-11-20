import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import ViewContentPage from "./ViewContentPage";
import ViewCartPage from "./ViewCartPage";

const App = (): JSX.Element => {
    return (
        <Container>
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <br />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/viewContent" component={ViewContentPage} />
                        <Route exact path="/viewCart" component={ViewCartPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        </Container>
    )
};

export default App;
