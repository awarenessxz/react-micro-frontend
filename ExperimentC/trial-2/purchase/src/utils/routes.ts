import React from "react";
import { RouteProps } from "react-router-dom";

const CartPage = React.lazy(() => import("../pages/CartPage"));

export const routes: RouteProps[] = [
    {
        path: "/purchaseTeam/cart",
        component: CartPage,
        exact: true,
    },
];
