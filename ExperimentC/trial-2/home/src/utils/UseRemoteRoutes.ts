import { useEffect, useState } from "react";
import { RouteProps } from "react-router-dom";

type RemoteUrl = "app_product/routes" | "app_purchase/routes";

// https://github.com/module-federation/module-federation-examples/issues/303
// https://medium.com/javascript-in-plain-english/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423
// https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
const useRemoteRoutes = (remoteUrl: RemoteUrl, variableName: string = "routes"): RouteProps[] => {
    const [routes, setRoutes] = useState<RouteProps[]>([]);

    const getRemoteUrl = () => {
        switch (remoteUrl) {
            case "app_product/routes":
                return import('app_product/routes');
            case "app_purchase/routes":
                return import('app_purchase/routes');
        }
    };

    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression)
        (async () => {
            const remoteRoutes = await getRemoteUrl()
                .then((res) => {
                    if (res[variableName]) {
                        return res[variableName];
                    }
                    return [];
                })
                .catch(err => {
                    return [];
                });
            setRoutes(remoteRoutes);
        })();
    }, []);

    return routes;
};

export default useRemoteRoutes;
