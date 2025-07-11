import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar.jsx";
import RedirectPage from "./pages/RedirectPage";
import IngredientiPage from "./pages/IngredientiPage";

import RequireAuth from "./components/requireAuth.jsx";
import OrderPageAdmin from "./pages/OrderPageAdmin";
import RequireAuthAdmin from "./components/requireAdmin";
import OrderPageClient from "./pages/OrderPageClient";
import RequireUser from "./components/requireUser";

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

                <Route path="/OrdineAdmin" element={
                    <RequireAuthAdmin>
                        <OrderPageAdmin/>
                    </RequireAuthAdmin>
                    } />


                <Route path="/OrdineClient" element={
                    <RequireUser>
                        <OrderPageClient/>
                    </RequireUser>
                } />
                <Route path="/Ingredienti" element={<IngredientiPage />} />

            </Routes>
        </BrowserRouter>
    );
}
