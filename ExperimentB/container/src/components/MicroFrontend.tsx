import React, { useEffect } from "react";
import {BrowserHistory} from "history";

interface MicroFrontendProps {
    history: BrowserHistory;
    host?: string;
    name: string;
}

const MicroFrontend = ({ name, host, history }: MicroFrontendProps) => {
    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            // @ts-ignore
            window[`render${name}`](`${name}-container`, history);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            // @ts-ignore
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
        };
    });

    return <main id={`${name}-container`} />;
};

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;
