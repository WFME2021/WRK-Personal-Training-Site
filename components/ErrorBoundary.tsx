import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = this.state.error?.message || 'An unexpected error occurred.';
      
      try {
        // Check if it's a Firestore error
        const parsedError = JSON.parse(errorMessage);
        if (parsedError.error && parsedError.operationType) {
          errorMessage = `Database Error (${parsedError.operationType}): ${parsedError.error}`;
        }
      } catch (e) {
        // Not a JSON error, use as is
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-cream text-forest p-4">
          <div className="max-w-md w-full bg-quiet rounded-2xl p-8 border border-forest/15 shadow-lg text-center">
            <h1 className="text-2xl font-bold text-red-700 mb-4">Something went wrong</h1>
            <p className="text-forest/80 mb-6">{errorMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-forest text-cream px-6 py-2 rounded-full font-medium hover:bg-forest-deep transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
