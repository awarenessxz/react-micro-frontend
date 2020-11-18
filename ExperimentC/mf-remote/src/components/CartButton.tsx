import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, IconButton } from '@material-ui/core';
import { RootState } from "../redux/root-reducer";

interface CartButtonProps {
    route?: string;
}

const CartButton = ({ route }: CartButtonProps): JSX.Element => {
    const cartContent = useSelector((state: RootState) => state.cart.itemsInCart);
    const history = useHistory();

    const goToRoute = (): void => {
        if (route) {
            history.push(route);
        }
    };

    return (
        <IconButton onClick={goToRoute}>
            <Badge badgeContent={cartContent.length} color='primary'>
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    );
};

export default CartButton;
