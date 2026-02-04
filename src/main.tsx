import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/js/dist/collapse';
import './index.css';
import App from './App.tsx';
import GlobalHeadManager from './components/globalHeadManager/GlobalHeadManager.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 3. Wrap your app with the Provider */}
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalHeadManager />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);