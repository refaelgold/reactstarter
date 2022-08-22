import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './i18n.tsx';//GLOBAL CALL

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);


root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
);


//HERE ->
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");

reportWebVitals();

