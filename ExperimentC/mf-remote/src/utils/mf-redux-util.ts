import React, { useEffect } from "react";
import { Store, Action } from "redux";
import { Provider } from "react-redux";
import { RootState, rootReducer, reducersMap } from "../redux/root-reducer";

/*
interface RemoteComponentWithReduxWrapperProps {
    store: Store<RootState>;
    component: React.ReactNode;
    componentScope: string;
}

export const RemoteComponentWithReduxWrapper = (props: RemoteComponentWithReduxWrapperProps): JSX.Element => {
    const { store } = props;
    useEffect(() => {
        // @ts-ignore
        store.injectReducer(props.componentScope, rootReducer);
    }, []);

    return (
        <Provider store={store || {}}>
            { props.component }
        </Provider>
    );
};
 */

export const injectRemoteReducerIntoStore = (store: Store<any, Action>) => {
    for (const [key, value] of Object.entries(reducersMap)) {
        // @ts-ignore
        store.injectReducer(key, value);
    }
};
