import React from 'react';
import { TestComponentProps } from './TestComponent.types';
import styles from './TestComponent.module.scss';

/**
 * Test Component
 */
const TestComponent = ({ theme }: TestComponentProps): JSX.Element => {
    const mThemeStyle = theme === 'primary' ? '' : styles.testComponentSecondary;

    return (
        <div data-testid="test-component" className={`${styles.testComponent} ${mThemeStyle}`}>
            <h1 className={`${styles.heading}`}>I&apos;m the test component</h1>
        </div>
    );
};

export default TestComponent;
