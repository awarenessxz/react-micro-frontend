/*
 * Note: This is unnecessary, could be placed with AddItemToCardButton (Abstract so that we can demo static vs dynamic loading)
 */
import React from "react";
import { Store } from "redux";
import AddItemToCartButton, { AddItemToCartButtonProps } from "./AddItemToCartButton";
import { RootState, rootReducer } from "../redux/root-reducer";
import {RemoteComponentWithReduxWrapper} from "../utils/mf-redux-util";

interface AddItemToCardButtonWrapperProps extends AddItemToCartButtonProps {
    store: Store<RootState>
}

const AddItemToCartButtonWrapper = (props: AddItemToCardButtonWrapperProps): JSX.Element => {
    return <RemoteComponentWithReduxWrapper component={<AddItemToCartButton { ... props } />} componentScope='cartContentWrapper' {...props} />;
};

export default AddItemToCartButtonWrapper;
