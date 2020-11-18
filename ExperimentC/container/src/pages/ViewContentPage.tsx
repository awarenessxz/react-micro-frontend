import React from 'react';
import { RemoteComponent, RemoteComponentType } from "../utils/mf-util";

const ViewContentPage = (): JSX.Element => {
    const [remoteAllCardsPage, setRemoteAllCardsPage] = React.useState<RemoteComponentType|undefined>(undefined);

    const setApp2 = (): void => {
        setRemoteAllCardsPage({
            hostUrl: "http://localhost:4001/remoteEntry.js",
            scope: "app_mf_bidirectional",
            module: "./AllCardsPage",
        });
    };

    React.useEffect(() => {
        setApp2();
    }, []);

    return (
        <div>
            <RemoteComponent component={remoteAllCardsPage} />
        </div>
    )
};

export default ViewContentPage;
