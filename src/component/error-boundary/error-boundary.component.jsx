import React from 'react';
import {
    ErrorImageContainer,
    ErrorImageOverlay,
    ErrorImageText
}
    from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError = error => {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yw2w9sc.png' />
                    <ErrorImageText>Sorry this Page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;