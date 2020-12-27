import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, IconButton } from '@material-ui/core';
import { RootState } from "../redux/root-reducer";
import "../styles/app.scss";

const CartButton = (): JSX.Element => {
    const cartContent = useSelector((state: RootState) => state.cart.itemsInCart);
    const history = useHistory();

    return (
        <IconButton className="mfPurchase" onClick={() => history.push("/purchaseTeam/cart")}>
            <Badge badgeContent={cartContent.length} color='primary'>
                <ShoppingCartIcon style={{ color: 'white' }} />
            </Badge>
        </IconButton>
    );
};

export default CartButton;
