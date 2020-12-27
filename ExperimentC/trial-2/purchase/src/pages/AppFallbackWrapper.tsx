import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartPage from "./CartPage";
import AppFallback from "./AppFallback";

const AppFallbackWrapper = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/purchaseTeam" component={AppFallback} exact />;
                <Route path="/purchaseTeam/cart" component={CartPage} exact />;
            </Switch>
        </BrowserRouter>
    );
};

export default AppFallbackWrapper;
