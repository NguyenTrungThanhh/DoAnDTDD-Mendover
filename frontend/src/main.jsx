import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App.jsx';
import MendoverContextProvider from '@/context/MendoverContext';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MendoverContextProvider>
            <ToastContainer />
            <App />
        </MendoverContextProvider>
    </StrictMode>,
);
