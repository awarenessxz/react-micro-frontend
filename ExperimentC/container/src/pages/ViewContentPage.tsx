import React from 'react';
import { RemoteMFComponent } from "../utils/mf-react-util";

const ViewContentPage = (): JSX.Element => {
    return <RemoteMFComponent config={{ scope: 'app_mf_bidirectional', module: './AllCardsPage'}} />;
};

export default ViewContentPage;
