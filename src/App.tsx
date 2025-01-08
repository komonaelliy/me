import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
/*import Blog from './pages/Blog';
import CTF from './pages/CTF';*/
import About from './pages/About';
import Game from './pages/Game';
import NotFound from './pages/NotFound';
import ServerError from './pages/ServerError';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<div>Coming Soon</div>} />
        <Route path="/ctf" element={<div>Coming Soon</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
