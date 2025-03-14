import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MendoverContextProvider from '@/context/MendoverContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MendoverContextProvider>
            <App />
        </MendoverContextProvider>
    </StrictMode>,
);
