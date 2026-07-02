import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CategoryPage from './pages/CategoryPage';
import './App.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (section) => {
    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#' + section);
    }
  };

  return (
     <nav className={'navbar' + (scrolled ? ' scrolled' : '')}>
      <div className="logo" style={{cursor:'pointer'}} onClick={() => navigate('/')}>Z<span>LY</span></div>
      <ul className="nav-links">
        <li><a href="/#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>关于</a></li>
        <li><a href="/#projects" onClick={(e) => { e.preventDefault(); handleNav('projects'); }}>项目</a></li>
        <li><a href="/#skills" onClick={(e) => { e.preventDefault(); handleNav('skills'); }}>优势</a></li>
      </ul>
      <a href="/#contact" className="nav-contact-btn" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>联系</a>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
