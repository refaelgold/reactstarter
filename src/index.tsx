import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

import './i18n.tsx';//GLOBAL CALL

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);


root.render(
    <ThemeProvider dir="rtl">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);


//HERE ->
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");

reportWebVitals();

