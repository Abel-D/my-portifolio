import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />,
  </PrimeReactProvider>
)
