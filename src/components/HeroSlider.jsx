import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const sliderSlides = [
  { id: 1, title: 'KALPIT FILMS', subtitle: 'A new vision of cinematic storytelling.', image: '/pictures/Chabahil Bus.JPG', targetId: 'about' },
  { id: 2, title: 'DISCOVER THE FRAME', subtitle: 'Bold visuals meet cinematic craft.', image: '/pictures/FCC1DD78-931B-40F3-9A20-44C8696DA5B4.jpeg', targetId: 'about' },
  { id: 3, title: 'STILL MOMENTS', subtitle: 'Every shot tells the story of a film journey.', image: '/pictures/_MG_4088.jpg', targetId: 'about' },
  { id: 4, title: 'CREATIVE MOTION', subtitle: 'A palette of light, landscape, and motion.', image: '/pictures/IMG_9490.jpeg', targetId: 'about' },
  { id: 5, title: 'CINEMATIC DEPTH', subtitle: 'We capture drama in every composition.', image: '/pictures/IMG_9776.jpeg', targetId: 'about' },
  { id: 6, title: 'VISION IN FOCUS', subtitle: 'Crafting cinematic stories with precision.', image: '/pictures/pic1.jpg', targetId: 'about' },
  { id: 7, title: 'STORY ARCHITECTURE', subtitle: 'Building narrative through visual design.', image: '/pictures/pic2.jpg', targetId: 'about' },
  { id: 8, title: 'MOOD AND TEXTURE', subtitle: 'A visual language for every scene.', image: '/pictures/pic3.jpg', targetId: 'about' },
  { id: 9, title: 'FRAMEWORK', subtitle: 'Images that speak to your brand voice.', image: '/pictures/pic4.jpg', targetId: 'about' },
  { id: 10, title: 'EMOTIONAL PERSPECTIVE', subtitle: 'Still frames with cinematic emotion.', image: '/pictures/pic5.jpg', targetId: 'about' },
  { id: 11, title: 'IMMERSE THE AUDIENCE', subtitle: 'Powerful visuals for every project.', image: '/pictures/pic6.jpg', targetId: 'about' },
  { id: 12, title: 'BOLD EXPRESSION', subtitle: 'Epic shots from the Kalpit Films archive.', image: '/pictures/pic7.jpg', targetId: 'about' }
];

export default function HeroSlider({ scrollToSection }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % sliderSlides.length;
        window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index: next } }));
        return next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Notify initial active slide and when it changes from other sources
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index: activeSlide } }));
  }, [activeSlide]);

  const handlePrev = () => {
    setActiveSlide((prev) => {
      const next = (prev - 1 + sliderSlides.length) % sliderSlides.length;
      window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index: next } }));
      return next;
    });
  };

  const handleNext = () => {
    setActiveSlide((prev) => {
      const next = (prev + 1) % sliderSlides.length;
      window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index: next } }));
      return next;
    });
  };

  return (
    <section id="home" className="hero-slider-v2">
      <div className="slider-wrapper-v2">
        {sliderSlides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slider-slide-v2 ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="slide-image-wrapper-v2">
              {index === activeSlide && slide.bgVideoUrl ? (
                <video 
                  className="slide-video-bg-v2"
                  src={slide.bgVideoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={slide.image}
                />
              ) : (
                <img src={slide.image} alt={slide.title} className="slide-image-v2" />
              )}
              <div className="slide-overlay-v2"></div>
            </div>
            
            <div className="container slide-content-container-v2">
              <div className="slide-content-v2">
                <h1 className="slide-title-v2">{slide.title}</h1>
                <p className="slide-subtitle-v2">{slide.subtitle}</p>
                <button 
                  className="btn-primary slide-btn-v2"
                  onClick={() => scrollToSection(slide.targetId)}
                >
                  {slide.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="slider-dots-v2">
        {sliderSlides.map((_, index) => (
          <button 
            key={index} 
            className={`slider-dot-v2 ${index === activeSlide ? 'active' : ''}`}
              onClick={() => { setActiveSlide(index); window.dispatchEvent(new CustomEvent('hero-slide-change', { detail: { index } })); }}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
