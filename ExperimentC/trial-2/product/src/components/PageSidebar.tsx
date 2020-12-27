import React from "react";
import { EuiPageSideBar, EuiSideNav } from "@elastic/eui";
import { useHistory } from "react-router-dom";

const PageSidebar = (): JSX.Element => {
    const history = useHistory();

    const sideNav = [
        {
            name: 'Product Team',
            id: 0,
            items: [
                {
                    name: 'All Products',
                    id: 1,
                    onClick: () => history.push('/productTeam'),
                },
                {
                    name: 'Settings',
                    id: 2,
                    onClick: () => history.push('/productTeam/settings'),
                },
            ],
        },
    ];

    return (
        <EuiPageSideBar>
            <EuiSideNav items={sideNav} style={{ padding: '8px' }} />
        </EuiPageSideBar>
    )
};

export default PageSidebar;
