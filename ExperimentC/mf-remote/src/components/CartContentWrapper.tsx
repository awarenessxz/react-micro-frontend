/*
 * Note: This is unnecessary, could be placed with AddItemToCardButton (Abstract so that we can demo static vs dynamic loading)
 */
import React  from "react";
import { Store } from "redux";
import { RemoteComponentWithReduxWrapper } from "../utils/mf-redux-util";
import CartContent from "./CartContent";
import { RootState } from "../redux/root-reducer";

interface CartContentWrapperProps {
    store: Store<RootState>
}

const CartContentWrapper = (props: CartContentWrapperProps): JSX.Element => {
    return <RemoteComponentWithReduxWrapper component={CartContent} componentScope='cartContentWrapper' {...props} />;
};

export default CartContentWrapper;
