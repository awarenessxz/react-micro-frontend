import React, { useEffect } from "react";
import AppFallback from "./AppFallback";
import AppHeader from "../components/AppHeader";
import "../styles/app.scss";

const AppWithHeader = (): JSX.Element => {
    useEffect(() => {
        document.body.classList.add('euiBody--headerIsFixed--double');

        return () => {
            document.body.classList.remove('euiBody--headerIsFixed--double');
        };
    }, []);

    return (
        <React.Fragment>
            <AppHeader />
            <AppFallback />
        </React.Fragment>
    );
};

export default AppWithHeader;
