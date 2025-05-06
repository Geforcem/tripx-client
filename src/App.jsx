import React from 'react'
import './utils/language/i18n.jsx';
import AppRoutes from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App
