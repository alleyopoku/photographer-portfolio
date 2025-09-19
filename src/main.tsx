import React from 'react';
import ReactDOM from 'react-dom/client';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import ThemeWrapper from './theme/ThemeWrapper';
import AppRouter from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <AppRouter />
    </ThemeWrapper>
  </React.StrictMode>
);


import { Toaster } from 'react-hot-toast';

<ThemeWrapper>
  <Toaster position="top-right" />
  <AppRouter />
</ThemeWrapper>
