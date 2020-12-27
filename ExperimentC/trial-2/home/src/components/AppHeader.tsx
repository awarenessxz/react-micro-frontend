import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderSectionItemButton,
    EuiAvatar,
    EuiHeaderSections,
} from '@elastic/eui';
import ErrorBoundary from "./ErrorBoundary";

const CartButton = React.lazy(() => import("app_purchase/CartButton"));

const AppHeader = (): JSX.Element => {
    const history = useHistory();

    const renderLogo = (
        <EuiHeaderLogo iconType="logoElastic" onClick={(e) => history.push("/")}  aria-label="Go to home page" />
    );

    const renderProductTeamTestingButton = (
        <EuiHeaderSectionItemButton aria-label="Spaces Menu" onClick={() => history.push("/productTeamWithHeader")}>
            <EuiAvatar type="space" name="Product Team With Header" size="s" />
        </EuiHeaderSectionItemButton>
    );

    const renderProductTeamButton = (
        <EuiHeaderSectionItemButton aria-label="Spaces Menu" onClick={() => history.push("/productTeam")}>
            <EuiAvatar type="space" name="Products Team" size="s" />
        </EuiHeaderSectionItemButton>
    );

    const rightSectionItems = [
        <ErrorBoundary>
            <React.Suspense fallback={<div>Loading Cart Button Suspense...</div>}>
                <CartButton />
            </React.Suspense>
        </ErrorBoundary>
    ];

    const sections: EuiHeaderSections[] = [
        {
            items: [renderLogo, renderProductTeamTestingButton, renderProductTeamButton],
            borders: 'right',
        },
        {
            items: rightSectionItems,
        },
    ];

    return <EuiHeader position="fixed" theme="dark" sections={sections} />;
};

export default AppHeader;
