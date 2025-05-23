import { BrowserRouter } from 'react-router';
import React from 'react';
import { AuthProvider } from './context/AuthProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
}
