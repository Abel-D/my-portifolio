import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { history } from './helpers';

createRoot(document.getElementById('root')).render(
  <BrowserRouter navigator={history} location={history.location}>
    <PrimeReactProvider>
      <App />,
    </PrimeReactProvider>
  </BrowserRouter>
)
