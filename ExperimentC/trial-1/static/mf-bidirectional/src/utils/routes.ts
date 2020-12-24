import React from "react";

const ContentPage = React.lazy(() => import("../pages/AllCardsPage"));

const routes = [
    {
        path: "/viewContent",
        component: ContentPage,
    },
];

export default routes;