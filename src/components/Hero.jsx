import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleExplore = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      const headerOffset = 80;
      const elementPosition = worksSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-timelapse-of-clouds-over-snowy-mountain-peaks-41865-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container animate-fade-in">
        <span className="hero-eyebrow">CINEMATIC PRODUCTION STUDIO</span>
        <h1 className="hero-title">
          Imagination in Motion. <br />
          <span className="gold-text">Stories in Focus.</span>
        </h1>
        <p className="hero-description">
          We handle complete movie production, high-impact commercial advertisements, and thought-provoking short films from the heart of Kathmandu, Nepal.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={handleExplore}>Discover Our Work</button>
          <button className="btn-secondary" onClick={handleContact}>Get in Touch</button>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={handleExplore}>
        <span className="scroll-line"></span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
}
