import { useEffect, useState } from "react";
import { Action, ReducersMapObject, Store } from "redux";

type RemoteUrl = "app_purchase/reduxReducer";

// https://github.com/module-federation/module-federation-examples/issues/303
// https://medium.com/javascript-in-plain-english/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423
// https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
const useRemoteReducers = <S, A extends Action>(
    remoteUrl: RemoteUrl,
    store: Store<S, A>,
    variableName: string = "reducersMap"
) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const getRemoteUrl = () => {
        switch (remoteUrl) {
            case "app_purchase/reduxReducer":
                return import('app_purchase/reduxReducer');
        }
    };

    const injectAllRemoteReducerIntoStore = <S, A extends Action>(reducersMap: ReducersMapObject<S, A>) => {
        console.log('injecting remote reducers...');
        for (const [key, value] of Object.entries(reducersMap)) {
            console.log('injecting => ', key, value);
            // @ts-ignore
            store.injectReducer(key, value);
        }
    };

    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression)
        (async () => {
            const status = await getRemoteUrl()
                .then((res) => {
                    if (res[variableName]) {
                        injectAllRemoteReducerIntoStore(res[variableName]);
                    }
                    return true;
                })
                .catch(err => {
                    return true;
                });
            setIsLoaded(status); // set to true regardless if there is error or is loaded.
        })();
    }, []);

    return isLoaded;
};

export default useRemoteReducers;
