import React from "react";
import { RouteProps } from "react-router-dom";

const ProductApp = React.lazy(() => import("../pages/AppFallback"));
const AppWithHeader = React.lazy(() => import("../pages/AppWithHeader"));

export const routes: RouteProps[] = [
    {
        path: "/productTeamWithHeader",
        component: AppWithHeader,
        exact: true,
    },
    {
        path: "/productTeam",
        component: ProductApp,
        exact: true,
    },
];
