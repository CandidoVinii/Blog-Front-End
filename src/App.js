import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Reset from './pages/Reset';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<Reset />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
