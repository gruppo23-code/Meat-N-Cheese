import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './compontents/Navbar';
import Footer from "./compontents/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>

            <
                Navbar
            />
            <div
                style=
                    {{ flex: 1 }}>
                <
                    App
                />
            </div>
            <
                Footer
            />
        </div>
    </React.StrictMode>
);
