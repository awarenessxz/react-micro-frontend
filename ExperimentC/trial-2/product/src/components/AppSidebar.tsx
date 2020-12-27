import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
    EuiCollapsibleNav,
    EuiCollapsibleNavGroup,
    EuiFlexItem,
    EuiHeaderSectionItemButton,
    EuiShowFor,
    EuiListGroupItem,
    EuiIcon,
    EuiSideNav,
} from '@elastic/eui';

const AppSidebar = (): JSX.Element => {
    const [navIsOpen, setIsNavOpen] = useState(false);
    const [navIsDocked, setIsNavDocked] = useState(false);
    const history = useHistory();

    const sideNav = [
        {
            name: 'All Products',
            id: 1,
            onClick: () => history.push('/search/products'),
        },
        {
            name: 'Settings',
            id: 2,
        },
    ];

    return (
        <EuiCollapsibleNav
            id="collapsibleNavSideBar"
            aria-label="Main navigation"
            isOpen={navIsOpen}
            isDocked={navIsDocked}
            button={
                <EuiHeaderSectionItemButton
                    aria-label="Toggle main navigation"
                    onClick={(): void => setIsNavOpen(!navIsOpen)}
                >
                    <EuiIcon type={'menu'} size="m" aria-hidden="true" />
                </EuiHeaderSectionItemButton>
            }
            showCloseButton={false}
        >
            <EuiFlexItem className="eui-yScroll">
                {/* Side Navigation Bar */}
                <EuiCollapsibleNavGroup>
                    <EuiSideNav items={sideNav} style={{ padding: '8px' }} />
                </EuiCollapsibleNavGroup>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
                <EuiShowFor sizes={['l', 'xl']}>
                    <EuiCollapsibleNavGroup>
                        <EuiListGroupItem
                            size="xs"
                            color="subdued"
                            label={`${navIsDocked ? 'Undock' : 'Dock'} navigation`}
                            onClick={(): void => {
                                setIsNavDocked(!navIsDocked);
                                setIsNavOpen(false);
                            }}
                            iconType={navIsDocked ? 'lock' : 'lockOpen'}
                        />
                    </EuiCollapsibleNavGroup>
                </EuiShowFor>
            </EuiFlexItem>
        </EuiCollapsibleNav>
    );
};

export default AppSidebar;