import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { CartItem } from "../redux/cart/cart-action.types";
import { removeItemFromCart } from "../redux/cart/cart-action";

interface CartItemCardProps {
    item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps): JSX.Element => {
    const dispatch = useDispatch();

    const dispatchRemoveItemFromCart = (): void => {
        if (item !== undefined) {
            console.log("remove item from cart");
            dispatch(removeItemFromCart(item));
        }
    };

    return (
        <Card style={{ width: '18rem' }} bg='light' text='dark'>
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
                <Button variant="danger" onClick={dispatchRemoveItemFromCart}>Remove Item</Button>
            </Card.Body>
        </Card>
    )
};

export default CartItemCard;
