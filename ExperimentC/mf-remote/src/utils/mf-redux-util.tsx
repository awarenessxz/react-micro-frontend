import React, { useEffect } from "react";
import { Store, Action } from "redux";
import { Provider } from "react-redux";
import { reducersMap } from "../redux/root-reducer";

interface RemoteAppWrapperProps {
    store: Store<any, Action>;
    children: React.ReactNode;
}

const injectAllRemoteReducerIntoStore = (store: Store<any, Action>) => {
    console.log("injecting....", store.getState());
    for (const [key, value] of Object.entries(reducersMap)) {
        // @ts-ignore
        store.injectReducer(key, value);
    }
    console.log("injecting done....", store.getState());
};

export const RemoteAppWrapper = (props: RemoteAppWrapperProps): JSX.Element => {
    const { store } = props;
    useEffect(() => {
        // inject all reducers from this remote app into container store
        injectAllRemoteReducerIntoStore(store);
    }, []);

    return (
        <Provider store={store || {}}>
            { props.children }
        </Provider>
    );
};
