import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar.jsx";
import RedirectPage from "./pages/RedirectPage";

import RequireAuth from "./components/requireAuth.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Login" element={
                    <RequireAuth>
                        <LoginPage />
                    </RequireAuth>
                } />
                <Route path="/Register" element={
                    <RequireAuth>
                        <RegisterPage />
                    </RequireAuth>
                } />
                <Route path="/accesso-negato" element={<RedirectPage />} />
            </Routes>
        </BrowserRouter>
    );
}