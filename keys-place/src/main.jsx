import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
//
import Home from './pages/Home.jsx'
import ErudaLoader from './components/erudaLoader.jsx'
//
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErudaLoader />   {/* load Eruda */}
    <Home />
  </StrictMode>
);
