import React from "react";
import { RouteProps } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));

export const routes: RouteProps[] = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
];
