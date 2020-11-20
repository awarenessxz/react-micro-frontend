// Codes from https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes/app1/src/App.js
import React, { Fragment, useEffect, useState } from "react";
import { Store, Action, AnyAction, ReducersMapObject } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setMFBidirectionLoadState, setMFRemoteLoadState } from "../redux/app/app-action";
import { RootState } from "../redux/root-reducer";

/* ******************************************************************************************************************
 * Loading "remoteEntry.js" script from micro frontend dynamically
 * https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes/app1/src/App.js
 ****************************************************************************************************************** */

// @ts-ignore
const loadFunction = (scope, module) => {
    return async () => {
        // Initializes the share scope. This fills it with known provided modules from this build and all remotes
        // @ts-ignore
        await __webpack_init_sharing__("default");

        const container = window[scope]; // or get the container somewhere else
        // Initialize the container, it may provide shared modules
        // @ts-ignore
        await container.init(__webpack_share_scopes__.default);
        // @ts-ignore
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    };
};

const useDynamicScript = (url: string) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    useEffect(() => {
        if (!url) {
            return;
        }

        const element = document.createElement("script");

        element.src = url;
        element.type = "text/javascript";
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        // clean up
        return () => {
            console.log(`Dynamic Script Removed: ${url}`);
            document.head.removeChild(element);
        }
    }, [url]);

    return { ready, failed };
};

/* ******************************************************************************************************************
 * Redux Provider to combine all reducers into one single store in container
 ****************************************************************************************************************** */

const injectAllRemoteReducerIntoStore = <S, A extends Action>(store: Store<S, A>, reducersMap: ReducersMapObject<S, A>) => {
    for (const [key, value] of Object.entries(reducersMap)) {
        // @ts-ignore
        store.injectReducer(key, value);
    }
};

interface CombineReduxProviderProps<S, A extends Action = AnyAction> {
    store: Store<S, A>;
    children: React.ReactNode;
}

// created this so that we can useDispatch to update redux store
const CombineReduxProviderInternals = <S, A extends Action>(props: CombineReduxProviderProps<S, A>): JSX.Element => {
    const mfBidirectionalResult = useDynamicScript('http://localhost:4001/remoteEntry.js');
    const mfRemoteLoadResult = useDynamicScript('http://localhost:4002/remoteEntry.js');
    const dispatch = useDispatch();

    // inject all reducers from this remote app into container store
    useEffect(() => {
        // handle mf_bidirectional
        if (mfBidirectionalResult.ready) {
            dispatch(setMFBidirectionLoadState(true));
        }

        // handle mf_remote
        if (mfRemoteLoadResult.ready) {
            // inject reducers
            loadFunction('app_mf_remote', './reduxReducer')().then(fn => {
                injectAllRemoteReducerIntoStore(props.store, fn.reducersMap);
            }).then(() => {
                dispatch(setMFRemoteLoadState(true));
            });
        }
    }, [mfBidirectionalResult, mfRemoteLoadResult]);

    return (
        <Fragment>
            { props.children }
        </Fragment>
    );
};

export const CombineReduxProvider = <S, A extends Action>(props: CombineReduxProviderProps<S, A>): JSX.Element => {
    return (
        <Provider store={props.store || {}}>
            <CombineReduxProviderInternals store={props.store} children={props.children} />
        </Provider>
    );
};

/* ******************************************************************************************************************
 * Remote Component -- loads component dynamically
 ****************************************************************************************************************** */

interface RemoteMFConfigProps {
    config: {
        scope: string; // eg. name of mf
        module: string; // eg. ./Widget
    };
    componentProps?: {
        [key: string]: any
    };
    children?: React.ReactNode;
}

export const RemoteMFComponent = ({ config, componentProps, children }: RemoteMFConfigProps): JSX.Element => {
    const Component = React.lazy(loadFunction(config.scope, config.module));
    const isScriptIsLoaded = (): boolean => {
        switch(config.scope) {
            case 'app_mf_bidirectional':
                return useSelector((state: RootState) => state.app.isMFBidirectionalLoaded);
            case 'app_mf_remote':
                return useSelector((state: RootState) => state.app.isMFRemoteLoaded);
            default:
                return false;
        }
    };

    if (isScriptIsLoaded()) {
        return (
            <React.Suspense fallback="Loading Remote Script">
                <Component {...componentProps}>
                    {children}
                </Component>
            </React.Suspense>
        );
    } else {
        return <div>Remote Component Not Found!</div>
    }
};
