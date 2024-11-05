import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import appStore from './redux/store';

import App from './App';
import './styles/index.css';
import { ThemeProvider } from './context/ThemeContent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
