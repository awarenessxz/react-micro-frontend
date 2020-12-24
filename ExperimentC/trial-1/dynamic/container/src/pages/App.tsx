import React  from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import HomePage from "./HomePage";
import ViewCartPage from "./ViewCartPage";
import PageNotFound from "./PageNotFound";
import { useRemoteFunction } from "../utils/mf-react-util";

const App = (): JSX.Element => {
    let routes: RouteProps[] = [];
    const remoteRoutes = useRemoteFunction({ mfScope: 'app_mf_bidirectional', mfModule: './routes', fnName: 'routes' });
    if (remoteRoutes) {
        routes = [...routes, ...remoteRoutes];
    }

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
                            <Route component={PageNotFound} />
                        </Switch>
                    </React.Suspense>
                </React.Fragment>
            </BrowserRouter>
        </Container>
    )
};

export default App;
