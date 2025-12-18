import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App.tsx';
import GlobalHeadManager from './components/globalHeadManager/GlobalHeadManager.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <GlobalHeadManager />
      <App />
    </BrowserRouter>
  </StrictMode>,
);