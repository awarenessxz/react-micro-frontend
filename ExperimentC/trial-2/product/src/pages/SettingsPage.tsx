import React from 'react';
import {
    EuiPageBody,
    EuiPageContent, EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection, EuiPageHeader, EuiPageHeaderSection,
    EuiTitle,
} from '@elastic/eui';

const SettingsPage = (): JSX.Element => {
    return (
        <EuiPageBody component="div">
            <EuiPageHeader>
                <EuiPageHeaderSection>
                    <EuiTitle size="l">
                        <h1>Settings Page</h1>
                    </EuiTitle>
                </EuiPageHeaderSection>
            </EuiPageHeader>
            <EuiPageContent>
                <EuiPageContentHeader>
                    <EuiPageContentHeaderSection>
                        <EuiTitle>
                            <h2>Content title</h2>
                        </EuiTitle>
                    </EuiPageContentHeaderSection>
                    <EuiPageContentHeaderSection>
                        Content abilities
                    </EuiPageContentHeaderSection>
                </EuiPageContentHeader>
                <EuiPageContentBody>Content body</EuiPageContentBody>
            </EuiPageContent>
        </EuiPageBody>
    );
};

export default SettingsPage;
