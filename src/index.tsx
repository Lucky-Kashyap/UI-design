import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import App from '@/App';

// CRA dev overlay treats this benign ResizeObserver warning as a fatal error.
const RESIZE_OBSERVER_LOOP_RE =
  /^ResizeObserver loop completed with undelivered notifications\.?$/;

window.addEventListener(
  'error',
  (event) => {
    if (RESIZE_OBSERVER_LOOP_RE.test(event.message)) {
      event.stopImmediatePropagation();
    }
  },
  true,
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
