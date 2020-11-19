import React from 'react';
import { RemoteMFComponent } from "../utils/mf-util";

const ViewContentPage = (): JSX.Element => {
    return (
        <div>
            <RemoteMFComponent config={{
                hostUrl: "http://localhost:4001/remoteEntry.js",
                scope: "app_mf_bidirectional",
                module: "./AllCardsPage",
            }} />
        </div>
    )
};

export default ViewContentPage;
