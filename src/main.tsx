import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App.tsx';

const GlobalHeadManager = lazy(() => import('./components/globalHeadManager/GlobalHeadManager.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <GlobalHeadManager />
      </Suspense>
      <App />
    </BrowserRouter>
  </StrictMode>,
);