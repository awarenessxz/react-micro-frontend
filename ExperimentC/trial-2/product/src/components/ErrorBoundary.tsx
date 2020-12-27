import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallbackComponent: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    static defaultProps = {
        fallbackComponent: (
            <div style={{ border: '1px solid black', textAlign: 'center', backgroundColor: '#FF9494', color: '#000000' }}>
                Remote Component Not Found!
            </div>
        )
    }

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        //console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallbackComponent;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
