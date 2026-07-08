import React, { useState } from 'react';
import './Works.css';

const worksData = [
  {
    id: 1,
    title: 'The Last Peak',
    category: 'features',
    year: '2025',
    role: 'Production & Post-production',
    image: '/landing/landing1.jpg',
    videoUrl: 'https://player.vimeo.com/video/324254681?autoplay=1',
    description: 'An award-winning documentary following a high-altitude expedition attempting a new route up the world’s most perilous peak.'
  },
  {
    id: 2,
    title: 'Eclipse',
    category: 'features',
    year: '2024',
    role: 'Cinematography & VFX',
    image: '/landing/landing2.jpg',
    videoUrl: 'https://player.vimeo.com/video/512967675?autoplay=1',
    description: 'A psychological sci-fi thriller exploring human isolation during a permanent solar eclipse on a distant colony.'
  },
  {
    id: 3,
    title: 'Silhouettes',
    category: 'features',
    year: '2022',
    role: 'Executive Production',
    image: '/landing/landing3.jpg',
    videoUrl: 'https://player.vimeo.com/video/285908078?autoplay=1',
    description: 'An editorial drama exploring the intersection of modern art and relationships in urban Kathmandu.'
  },
  {
    id: 4,
    title: 'Nike: Rise',
    category: 'ads',
    year: '2025',
    role: 'Commercial Ad Campaign',
    image: '/landing/landing4.jpg',
    videoUrl: 'https://player.vimeo.com/video/355557733?autoplay=1',
    description: 'A high-octane commercial campaign highlighting extreme mountain running in Nepal.'
  },
  {
    id: 5,
    title: 'Audi: The Journey',
    category: 'ads',
    year: '2024',
    role: 'Branding Film',
    image: '/landing/landing5.jpg',
    videoUrl: 'https://player.vimeo.com/video/324254681?autoplay=1',
    description: 'A cinematic brand film showcasing an all-road journey through rugged Himalayan landscapes.'
  },
  {
    id: 6,
    title: 'Apple: Unboxing',
    category: 'ads',
    year: '2023',
    role: 'Tech Commercial',
    image: '/landing/landing6.jpg',
    videoUrl: 'https://player.vimeo.com/video/539301072?autoplay=1',
    description: 'Minimalist product reveal ad showcasing the sleek design and engineering of the latest mobile devices.'
  },
  {
    id: 7,
    title: 'The Whisper',
    category: 'shorts',
    year: '2026',
    role: 'Short Movie (15 min)',
    image: '/landing/landing7.jpg',
    videoUrl: 'https://player.vimeo.com/video/512967675?autoplay=1',
    description: 'A narrative short following a young local guide who hears echoes of ancient folklore in the mountain winds.'
  },
  {
    id: 8,
    title: 'Drift',
    category: 'shorts',
    year: '2024',
    role: 'Short Movie (12 min)',
    image: '/landing/landing8.jpg',
    videoUrl: 'https://player.vimeo.com/video/285908078?autoplay=1',
    description: 'A visual-sensory short film showcasing water ripples, reflections, and human movement.'
  }
];

export default function Works() {
  const [filter, setFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredWorks = filter === 'all' 
    ? worksData 
    : worksData.filter(item => item.category === filter);

  return (
    <section id="works" className="section works">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Selected Works</h2>
        </div>

        {/* Filter Controls */}
        <div className="works-filter-wrapper">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Works
          </button>
          <button 
            className={`filter-btn ${filter === 'features' ? 'active' : ''}`}
            onClick={() => setFilter('features')}
          >
            Movies
          </button>
          <button 
            className={`filter-btn ${filter === 'ads' ? 'active' : ''}`}
            onClick={() => setFilter('ads')}
          >
            Ads & Commercials
          </button>
          <button 
            className={`filter-btn ${filter === 'shorts' ? 'active' : ''}`}
            onClick={() => setFilter('shorts')}
          >
            Short Movies
          </button>
        </div>

        {/* Works Grid */}
        <div className="works-grid" key={filter}>
          {filteredWorks.map((work) => (
            <div 
              key={work.id} 
              className="work-card animate-fade-in"
              onClick={() => setActiveVideo(work)}
            >
              <div className="work-card-media">
                <img src={work.image} alt={work.title} className="work-card-img" />
                <div className="work-card-overlay">
                  <div className="play-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="play-svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="work-card-details">
                <div className="work-card-meta">
                  <span className="work-card-year">{work.year}</span>
                  <span className="work-card-dot"></span>
                  <span className="work-card-role">{work.role}</span>
                </div>
                <h3 className="work-card-title">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
              &times;
            </button>
            <div className="video-iframe-wrapper">
              <iframe 
                src={activeVideo.videoUrl} 
                title={activeVideo.title}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-desc-box">
              <h3 className="modal-video-title">{activeVideo.title} <span className="modal-video-year">({activeVideo.year})</span></h3>
              <p className="modal-video-role">{activeVideo.role}</p>
              <p className="modal-video-desc">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
