import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}