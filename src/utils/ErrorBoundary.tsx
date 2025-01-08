import { Component, ErrorInfo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { trackError } from './errorTracking';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    trackError(error, 'ErrorBoundary');
  }

  public render() {
    if (this.state.hasError) {
      return <Navigate to="/500" />;
    }

    return this.props.children;
  }
}
