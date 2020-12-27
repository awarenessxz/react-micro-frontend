import React from 'react';

import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
} from '@elastic/eui';

export default () => (
    <EuiPage>
        <EuiPageBody component="div">
            <EuiPageContent verticalPosition="center" horizontalPosition="center">
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>404 - Page Not Found</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
            </EuiPageContent>
        </EuiPageBody>
    </EuiPage>
);