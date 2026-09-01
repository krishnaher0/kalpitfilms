import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Offers from './components/Offers';
import OfferDetail from './components/OfferDetail';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function AppContent({ theme, toggleTheme, setTheme }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const location = useLocation();

  // Scroll to hash element on load / route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // scroll to top if navigating to another route without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} setTheme={setTheme} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider scrollToSection={scrollToSection} />
              <Offers />
              <Gallery />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/offer/:slug" element={<OfferDetail />} />
        </Routes>
      </main>

      <footer className="footer-v2">
        <div className="container footer-container-v2">
          <div className="footer-left-v2">
            <span className="footer-logo-cursive-v2">KALPIT FILMS</span>
            <p className="footer-copy-v2">
              &copy; {new Date().getFullYear()} Kalpit Films. All Rights Reserved. Lazimpat Road, Kathmandu, Nepal.
            </p>
          </div>
          
          <div className="footer-nav-v2">
            <a href="/" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
            <a href="/#gallery" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/#gallery'; }}>Gallery</a>
            <a href="/about" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>About Us</a>
          </div>
        </div>
      </footer>

      {activeVideo && (
        <div className="video-modal-v2" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content-v2" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close-v2" onClick={() => setActiveVideo(null)}>
              &times;
            </button>
            <div className="video-iframe-wrapper-v2">
              <iframe 
                src={activeVideo.videoUrl} 
                title={activeVideo.title}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-desc-box-v2">
              <h3 className="modal-video-title-v2">{activeVideo.title} <span className="modal-video-year-v2">({activeVideo.year})</span></h3>
              <p className="modal-video-role-v2">Directed by {activeVideo.director || 'Kalpit Films'} | {activeVideo.role}</p>
              <p className="modal-video-desc-v2">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <AppContent 
        theme={theme} 
        toggleTheme={toggleTheme} 
        setTheme={setTheme} 
      />
    </Router>
  );
}

export default App;
