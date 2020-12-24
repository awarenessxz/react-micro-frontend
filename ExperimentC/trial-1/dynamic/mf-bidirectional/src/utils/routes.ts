import React from "react";

const ContentPage = React.lazy(() => import("../pages/AllCardsPage"));

export const routes = [
    {
        path: "/viewContent",
        component: ContentPage,
    },
];
