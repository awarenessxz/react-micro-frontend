import React from "react";
import AppFallbackWrapper from "./AppFallbackWrapper";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/app.scss";

const Shell = React.lazy(() => import("app_home/Shell"));

const App = (): JSX.Element => {
    return (
        <ErrorBoundary fallbackComponent={<AppFallbackWrapper />}>
            <React.Suspense fallback={<div>App Shell is loading....</div>}>
                <Shell />
            </React.Suspense>
        </ErrorBoundary>
    )
};

export default App;
