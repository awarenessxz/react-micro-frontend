import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { EuiPage } from "@elastic/eui";
import ProductsPage from "./ProductsPage";
import SettingsPage from "./SettingsPage";
import PageSidebar from "../components/PageSidebar";

const AppFallback = (): JSX.Element => {
    return (
        <EuiPage className="mfProduct">
            <BrowserRouter>
                <PageSidebar />
                <Switch>
                    <Route path="/productTeam" component={ProductsPage} exact />;
                    <Route path="/productTeam/settings" component={SettingsPage} exact />;
                </Switch>
            </BrowserRouter>
        </EuiPage>
    );
};

export default AppFallback;
