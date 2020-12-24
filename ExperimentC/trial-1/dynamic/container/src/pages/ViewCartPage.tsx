import React from 'react';
import {RemoteMFComponent} from "../utils/mf-react-util";

const ViewCartPage = (): JSX.Element => {
    return <RemoteMFComponent mfScope='app_mf_remote' mfModule='./CartContent' />;
};

export default ViewCartPage;
