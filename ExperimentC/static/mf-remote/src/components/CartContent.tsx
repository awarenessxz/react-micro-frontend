import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { CardDeck } from "react-bootstrap";
import CartItemCard from "./CartItemCard";

const CartContent = (): JSX.Element => {
    const cartContent = useSelector((state: RootState) => state.cart.itemsInCart);

    return (
        <CardDeck>
            {cartContent.map((value, index) => {
                return <CartItemCard key={index} item={value} />;
            })}
        </CardDeck>
    );
};

export default CartContent;
