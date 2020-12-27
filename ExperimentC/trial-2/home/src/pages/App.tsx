import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import "../styles/app.scss";

import { routes as localRoutes } from "../utils/routes";
import AppHeader from "../components/AppHeader";
import useRemoteRoutes from "../utils/UseRemoteRoutes";
import PageNotFound from "./PageNotFound";

const App = (): JSX.Element => {
    const remoteProductAppRoutes = useRemoteRoutes("app_product/routes");
    const remotePurchaseAppRoutes = useRemoteRoutes("app_purchase/routes");
    const routes: RouteProps[] = [...localRoutes, ...remoteProductAppRoutes, ...remotePurchaseAppRoutes];

    console.log(routes.length);

    return (
        <BrowserRouter>
            <AppHeader />
            <React.Suspense fallback={<div>Loading remote routes...</div>}>
                <Switch>
                    {routes.map((route, idx) => (
                        <Route key={idx} path={route.path} component={route.component} exact={route.exact}/>
                    ))}
                    <Route component={PageNotFound} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
};

export default App;
