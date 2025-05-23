import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import AppProviders from './providers/AppProviders.tsx';
import CssBaseline from '@mui/material/CssBaseline';

// Start MSW mocking
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  await worker.start({
    onUnhandledRequest: 'warn',
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
