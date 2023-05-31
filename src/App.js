import './App.css';
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import { AuthProvider } from 'react-auth-kit'



function App() {
  
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
