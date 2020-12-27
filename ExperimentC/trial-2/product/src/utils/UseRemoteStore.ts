import { useEffect, useState } from "react";
import { Action, Store } from "redux";

type RemoteUrl = "app_purchase/reduxStore";

// https://github.com/module-federation/module-federation-examples/issues/303
// https://medium.com/javascript-in-plain-english/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423
// https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
const useRemoteStore = <S, A extends Action>(remoteUrl: RemoteUrl): (Store<S, A> | null) => {
    const [store, setStore] = useState<Store<S, A>|null>(null);

    const getRemoteUrl = () => {
        switch (remoteUrl) {
            case "app_purchase/reduxStore":
                return import('app_purchase/reduxStore');
        }
    };

    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression)
        (async () => {
            const result = await getRemoteUrl()
                .then((res) => {
                    return res.default();
                })
                .catch(err => {
                    console.log(err);
                    return null;
                });
            setStore(result);
        })();
    }, []);

    return store;
};

export default useRemoteStore;
