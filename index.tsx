import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const initialData = typeof window !== 'undefined' ? (window as any).__INITIAL_DATA__ : undefined;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App initialData={initialData} />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App initialData={initialData} />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
