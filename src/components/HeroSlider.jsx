import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const sliderSlides = [
  { id: 1, title: 'Kalpit films', subtitle: '"I dream in 24fps."', image: '/pictures/Chabahil Bus.JPG', targetId: 'about' },
  { id: 2, title: 'It starts with an idea.', subtitle: '', image: '/pictures/FCC1DD78-931B-40F3-9A20-44C8696DA5B4.jpeg', targetId: 'about' },
  { id: 3, title: 'Then we build the story.', subtitle: '', image: '/pictures/_MG_4088.jpg', targetId: 'about' },
  { id: 4, title: 'We chase the light and shadows.', subtitle: '', image: '/pictures/IMG_9490.jpeg', targetId: 'about' },
  { id: 5, title: 'We follow the character.', subtitle: '', image: '/pictures/character.jpeg', targetId: 'about' },
  { id: 6, title: 'Capture the moment.', subtitle: '', image: '/pictures/pic1.jpg', targetId: 'about' },
  { id: 7, title: 'Cut what doesn\'t belong.', subtitle: '', image: '/pictures/pic2.jpg', targetId: 'about' },
  { id: 8, title: 'Leave some moments for silence.', subtitle: '', image: '/pictures/pic3.jpg', targetId: 'about' },
  { id: 9, title: 'Make the ordinary unforgettable.', subtitle: '', image: '/pictures/pic4.jpg', targetId: 'about' },
  { id: 10, title: 'Create the world.', subtitle: '', image: '/pictures/pic5.jpg', targetId: 'about' },
  { id: 11, title: 'For the world to see.', subtitle: '', image: '/pictures/pic6.jpg', targetId: 'about' },
  { id: 12, title: 'Make cinemas. New vision. New perspectives.', image: '/pictures/pic7.jpg', targetId: 'about' }
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
                <img 
                  src={slide.image} 
                  alt={`${slide.title} - ${slide.subtitle} | Kalpit Films`} 
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="slide-image-v2" 
                />
              )}
              <div className="slide-overlay-v2"></div>
            </div>
            
            <div className="container slide-content-container-v2">
              <div className="slide-content-v2">
                <h1 className={`slide-title-v2 ${slide.id === 2 || slide.id === 4 ? 'slide-title-white-v2' : ''}`}>
                  {slide.title}
                </h1>
                {slide.subtitle && <p className="slide-subtitle-v2">{slide.subtitle}</p>}
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
