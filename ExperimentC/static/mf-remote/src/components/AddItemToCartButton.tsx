import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { CartItem } from "../redux/cart/cart-action.types";
import { addItemToCart } from "../redux/cart/cart-action";

export interface AddItemToCartButtonProps {
    item: CartItem;
}

const AddItemToCartButton = ({ item }: AddItemToCartButtonProps): JSX.Element => {
    const dispatch = useDispatch();

    const handleAddItemToCart = (): void => {
        if (item !== undefined) {
            console.log("Adding Item to cart");
            dispatch(addItemToCart(item));
        }
    };

    return <Button onClick={handleAddItemToCart}>Add Item to Cart</Button>;
};

export default AddItemToCartButton;
