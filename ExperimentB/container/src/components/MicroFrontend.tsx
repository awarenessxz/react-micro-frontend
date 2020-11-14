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
            window[`render${name}`] && window[`render${name}`](`${name}-container`, history);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const promises = Object.keys(manifest['files'])
                    .filter(key => key.endsWith('.js'))
                    .reduce((sum: Promise<void>[], key) => {
                        sum.push(
                            new Promise<void>(resolve => {
                                const path = `${host}${manifest['files'][key]}`;
                                const script = document.createElement('script');
                                if (key === 'main.js') {
                                    script.id = scriptId;
                                }
                                script.onload = () => {
                                    resolve();
                                };
                                script.src = path;
                                //document.head.appendChild(script);
                                document.body.after(script)
                            })
                        );
                        return sum;
                    }, []);
                Promise.allSettled(promises).then(() => {
                    renderMicroFrontend();
                });
            });

        return () => {
            // @ts-ignore
            window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
        };
    }, [name, host, history]);

    return <main id={`${name}-container`} />;
};

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;
