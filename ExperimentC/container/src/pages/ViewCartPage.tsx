import React from 'react';
import {RemoteMFComponent} from "../utils/mf-react-util";

const ViewCartPage = (): JSX.Element => {
    return <RemoteMFComponent config={{ scope: 'app_mf_remote', module: './CartContent'}} />;
};

export default ViewCartPage;
