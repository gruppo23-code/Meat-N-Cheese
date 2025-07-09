import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{ flex: 1 }}>
                <App/>
            </div>
            <Footer/>
        </div>
    </React.StrictMode>
);
