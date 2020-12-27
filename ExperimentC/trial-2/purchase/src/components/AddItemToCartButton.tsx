import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { CartItem } from "../redux/cart/cart-action.types";
import { addItemToCart } from "../redux/cart/cart-action";
import "../styles/app.scss";

export interface AddItemToCartButtonProps {
    item: CartItem;
}

const AddItemToCartButton = ({ item }: AddItemToCartButtonProps): JSX.Element => {
    const dispatch = useDispatch();

    const handleAddItemToCart = (): void => {
        if (item !== undefined) {
            console.log("Adding Item to cart", item);
            dispatch(addItemToCart(item));
        }
    };

    return (
        <Button className="mfPurchase" variant="contained" color="primary" onClick={handleAddItemToCart}>
            Add Item to Cart
        </Button>
    );
};

export default AddItemToCartButton;
