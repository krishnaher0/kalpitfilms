import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const sliderSlides = [
  {
    id: 1,
    title: 'KALPIT FILMS',
    subtitle: 'A new vision of cinematic storytelling, anchored in the heart of Nepal.',
    image: '/gallery/mountain.jpg',
    bgVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-mountain-range-covered-in-fog-and-snow-40348-large.mp4',
    btnText: 'Discover Our Vision',
    targetId: 'about'
  },
  {
    id: 2,
    title: 'CRAFTING STORYTELLING',
    subtitle: 'From conceptual screenplays and location logistics to high-fidelity production management.',
    image: '/gallery/temple.jpg',
    bgVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-starry-night-sky-with-clouds-in-time-lapse-40013-large.mp4',
    btnText: 'Explore Capabilities',
    targetId: 'about'
  },
  {
    id: 3,
    title: 'FRAMED IN MAJESTY',
    subtitle: 'Capturing the raw landscape, culture, and humanity of the Himalayas.',
    image: '/gallery/rain.jpg',
    bgVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    btnText: 'Connect With Us',
    targetId: 'contact'
  }
];

export default function HeroSlider({ scrollToSection }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % sliderSlides.length);
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

      {/* Slider Controls */}
      <button className="slider-arrow-v2 prev" onClick={handlePrev} aria-label="Previous slide">&#10229;</button>
      <button className="slider-arrow-v2 next" onClick={handleNext} aria-label="Next slide">&#10230;</button>

      {/* Slider Dots */}
      <div className="slider-dots-v2">
        {sliderSlides.map((_, index) => (
          <button 
            key={index} 
            className={`slider-dot-v2 ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
