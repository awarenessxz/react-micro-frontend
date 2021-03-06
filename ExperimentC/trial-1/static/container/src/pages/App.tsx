import React  from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import ViewCartPage from "./ViewCartPage";
import remoteRoutes from 'app_mf_bidirectional/routes';

const routes = [...remoteRoutes];

const App = (): JSX.Element => {
    return (
        <Container>
            <BrowserRouter>
                <React.Fragment>
                    <NavBar />
                    <br />
                    <React.Suspense fallback={<div>Loading remote routes...</div>}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/viewCart" component={ViewCartPage} />
                            {routes.map((route, idx) => (
                                <Route key={idx} path={route.path} component={route.component} exact={route.exact}/>
                            ))}
                        </Switch>
                    </React.Suspense>
                </React.Fragment>
            </BrowserRouter>
        </Container>
    )
};

export default App;
