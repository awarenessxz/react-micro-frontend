import React from "react";
import { RouteProps } from "react-router-dom";

const SearchPage = React.lazy(() => import("../pages/SearchPage"));

const routes: RouteProps[] = [
    {
        path: "/search",
        component: SearchPage,
    },
];

export default routes;