// Codes from https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes/app1/src/App.js
import React, { Fragment, useEffect, useState } from "react";
import { Store, Action, AnyAction, ReducersMapObject } from "redux";
import { Provider } from "react-redux";

/* ******************************************************************************************************************
 * SessionStorage + Hooks
 * https://www.youtube.com/watch?v=kQKs7o-X0zc&t=543s
 * https://stackoverflow.com/questions/26974084/listen-for-changes-with-localstorage-on-the-same-window
 * https://github.com/colshacol/storage-changed/blob/master/src/index.js
 ****************************************************************************************************************** */

const CUSTOM_SESSION_STORE_CHANGE_EVENT = 'storageChange';

// using this to trigger a re-render for dynamic importing of components from remote
const emitEvent = (key: string, value: string): void => {
    const event = new CustomEvent(CUSTOM_SESSION_STORE_CHANGE_EVENT, {
        detail: { key, value }
    });
    window.dispatchEvent(event);
};

export const useSessionState = (key: string, defaultValue?: string): [(string | null), (newValue: string) => void] => {
    if (sessionStorage.getItem(key) === null && defaultValue) {
        sessionStorage.setItem(key, defaultValue); // initializing
    }
    const [value, setValue] = useState(sessionStorage.getItem(key));

    const setValueInStorage = (newValue: string): void => {
        sessionStorage.setItem(key, newValue);
        emitEvent(key, newValue);
        setValue(newValue);
    };

    return [value, setValueInStorage];
};

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

const CombineReduxProviderInternals = <S, A extends Action>(props: CombineReduxProviderProps<S, A>): JSX.Element => {
    const mfBidirectionalResult = useDynamicScript('http://localhost:4001/remoteEntry.js');
    const mfRemoteLoadResult = useDynamicScript('http://localhost:4002/remoteEntry.js');
    const [mfBiSessionState, setMfBiSessionState] = useSessionState('app_mf_bidirectional', "false");
    const [mfRemoteSessionState, setMfRemoteSessionState] = useSessionState('app_mf_remote', "false");

    // inject all reducers from this remote app into container store
    useEffect(() => {
        // handle mf_bidirectional
        if (mfBidirectionalResult.ready && mfBiSessionState === 'false') {
            setMfBiSessionState('true');
        }

        // handle mf_remote
        if (mfRemoteLoadResult.ready && mfRemoteSessionState === 'false') {
            // inject reducers
            loadFunction('app_mf_remote', './reduxReducer')().then(fn => {
                injectAllRemoteReducerIntoStore(props.store, fn.reducersMap);
            }).then(() => {
                setMfRemoteSessionState('true');
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
    console.log("RENDERING THIS");
    sessionStorage.clear(); // clear session
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
    const [isScriptReady, setIsScriptReady] = useState(sessionStorage.getItem(config.scope) === 'true');

    const listenForStorageChange = (e: any) => {
        console.log("listening", config.scope, config.module, sessionStorage.getItem(config.scope));
        setIsScriptReady(sessionStorage.getItem(config.scope) === 'true');
    };

    useEffect(() => {
        if (isScriptReady) {
            return;
        }

        console.log('adding session storage event listener');
        window.addEventListener(CUSTOM_SESSION_STORE_CHANGE_EVENT, listenForStorageChange);

        // clean up
        return () => {
            console.log('removing session storage event Listener:');
            window.removeEventListener(CUSTOM_SESSION_STORE_CHANGE_EVENT, listenForStorageChange);
        }

    }, [isScriptReady]);

    if (isScriptReady) {
        return (
            <React.Suspense fallback="Loading Remote Script">
                <Component {...componentProps}>
                    {children}
                </Component>
            </React.Suspense>
        );
    } else {
        return (
            <div style={{ border: '1px solid black', textAlign: 'center', backgroundColor: '#FF9494', color: '#000000' }}>
                Remote Component Not Found!
            </div>
        );
    }
};
