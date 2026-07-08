import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Poems from './components/Poems';
import About from './components/About';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Trailers from './components/Trailers';
import CountdownLoader from './components/CountdownLoader';
import './App.css';

function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <CountdownLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <HeroSlider scrollToSection={scrollToSection} />
        <About />
        <Gallery />
        <Poems />
        <Partners />
        <Contact />
      </main>

      <footer className="footer-v2">
        <div className="container footer-container-v2">
          <div className="footer-left-v2">
            <span className="footer-logo-cursive-v2">𝓚𝓪𝓵𝓹𝓲𝓽 𝓕𝓲𝓵𝓶𝓼</span>
            <p className="footer-copy-v2">
              &copy; {new Date().getFullYear()} Kalpit Films. All Rights Reserved. Lazimpat Road, Kathmandu, Nepal.
            </p>
          </div>
          
          <div className="footer-nav-v2">
            <a onClick={() => scrollToSection('home')} className="footer-link-v2">Home</a>
            <a onClick={() => scrollToSection('portfolio')} className="footer-link-v2">Portfolio</a>
            <a onClick={() => scrollToSection('gallery')} className="footer-link-v2">Gallery</a>
            <a onClick={() => scrollToSection('poems')} className="footer-link-v2">Poems</a>
            <a onClick={() => scrollToSection('about')} className="footer-link-v2">About US</a>
            <a onClick={() => scrollToSection('contact')} className="footer-link-v2">Contact</a>
          </div>
        </div>
      </footer>

      {/* Viewport Immersive Video Modal Overlay */}
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

export default App;
