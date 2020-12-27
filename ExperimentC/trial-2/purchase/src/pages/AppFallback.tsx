import React from "react";
import Container from "@material-ui/core/Container";
import AddItemToCartButton from "../components/AddItemToCartButton";
import { CartItem } from "../redux/cart/cart-action.types";
import CartPage from "./CartPage";
import CartButton from "../components/CartButton";

const AppFallback = (): JSX.Element => {
    const getItem = (): CartItem => {
        const randomText = Math.floor(Math.random() * 999);
        return {
            id: "p" + randomText,
            title: "Product " + randomText,
            image: "https://source.unsplash.com/400x200",
            desc: "Whatever...."
        }
    };

    return (
        <Container style={{ backgroundColor: 'black' }}>
            <AddItemToCartButton item={getItem()} />
            <CartButton />
            <CartPage />
        </Container>
    );
};

export default AppFallback;
