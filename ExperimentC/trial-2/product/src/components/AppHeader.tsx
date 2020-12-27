import React from 'react';
import { EuiHeader, EuiHeaderLogo } from '@elastic/eui';
import AppSidebar from "./AppSidebar";

const AppHeader = (): JSX.Element => {
    // Navigation Menu + Logo
    const leftSectionItems = [
        <AppSidebar key="appSidebar" />,
        <EuiHeaderLogo key="appLogo" iconType="logoElastic">
            Elastic
        </EuiHeaderLogo>,
    ];

    return (
        <EuiHeader
            position="fixed"
            sections={[
                {
                    items: leftSectionItems,
                    borders: 'right',
                },
            ]}
        />
    );
};

export default AppHeader;