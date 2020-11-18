// Codes from https://github.com/module-federation/module-federation-examples/blob/master/advanced-api/dynamic-remotes/app1/src/App.js
import React from "react";

// @ts-ignore
const loadComponent = (scope, module) => {
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

// @ts-ignore
const useDynamicScript = (args) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement("script");

        element.src = args.url;
        element.type = "text/javascript";
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return { ready, failed };
};

export interface RemoteComponentType {
    hostUrl: string; // eg. http://localhost:4001/remoteEntry.js
    scope: string; // eg. name of mf
    module: string; // eg. ./Widget
}

export interface RemoteComponentProps {
    component?: RemoteComponentType | undefined;
}

export const RemoteComponent = (props: RemoteComponentProps) => {
    const { ready, failed } = useDynamicScript({
        url: props.component && props.component.hostUrl,
    });

    if (!props.component) {
        return <h2>Not system specified</h2>;
    }

    if (!ready) {
        return <h2>Loading dynamic script: {props.component.hostUrl}</h2>;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {props.component.hostUrl}</h2>;
    }

    const Component = React.lazy(
        loadComponent(props.component.scope, props.component.module)
    );

    return (
        <React.Suspense fallback="Loading Remote Component">
            <Component />
        </React.Suspense>
    );
};
