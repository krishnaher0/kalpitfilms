import React, { useState } from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: 'Echoes of Tomorrow',
    category: 'movies',
    year: '2024',
    director: 'Sarah Chen',
    role: 'Full Production',
    image: '/landing/landing1.jpg',
    videoUrl: 'https://player.vimeo.com/video/22439234?autoplay=1',
    description: 'A sci-fi narrative mapping memory transfers and survival on a desolate orbital platform.'
  },
  {
    id: 2,
    title: 'The Last Melody',
    category: 'movies',
    year: '2023',
    director: 'Leo Khan',
    role: 'Cinematography',
    image: '/landing/landing2.jpg',
    videoUrl: 'https://player.vimeo.com/video/92846187?autoplay=1',
    description: 'A musical drama tracking a classical violinist struggling to preserve her heritage in a modern city.'
  },
  {
    id: 3,
    title: 'Shadowfall',
    category: 'movies',
    year: '2023',
    director: 'Ales R.',
    role: 'VFX & Grade',
    image: '/landing/landing3.jpg',
    videoUrl: 'https://player.vimeo.com/video/113841869?autoplay=1',
    description: 'An atmospheric neo-noir thriller exploring standard detective themes in rain-drenched valleys.'
  },
  {
    id: 4,
    title: 'Horizon\'s Edge',
    category: 'movies',
    year: '2022',
    director: 'Sophie Chen',
    role: 'Co-Production',
    image: '/landing/landing4.jpg',
    videoUrl: 'https://player.vimeo.com/video/80836567?autoplay=1',
    description: 'A quiet narrative mapping the crossing of high mountain ridges during a major blizzard.'
  },
  {
    id: 5,
    image: '/landing/landing5.jpg',
    title: 'The Wind\'s Path',
    category: 'shorts',
    year: '2025',
    director: 'Anya Sharma',
    role: 'Full Production',
    videoUrl: 'https://player.vimeo.com/video/285908078?autoplay=1',
    description: 'A cinematic short capturing the sensory experiences of a young guide traversing Himalayan routes.'
  },
  {
    id: 6,
    title: 'Silhouettes',
    category: 'shorts',
    year: '2024',
    director: 'Sam T.',
    role: 'Cinematography',
    image: '/landing/landing6.jpg',
    videoUrl: 'https://player.vimeo.com/video/512967675?autoplay=1',
    description: 'A narrative short following two artists crossing paths in the mist-filled alleyways of old Kathmandu.'
  },
  {
    id: 7,
    title: 'Drift',
    category: 'shorts',
    year: '2023',
    director: 'Mark Novak',
    role: 'Color Grading',
    image: '/landing/landing7.jpg',
    videoUrl: 'https://player.vimeo.com/video/22439234?autoplay=1',
    description: 'A sensory-visual short film depicting movement, light reflections, and flow.'
  },
  {
    id: 8,
    title: 'Sherpas of Annapurna',
    category: 'documentaries',
    year: '2025',
    director: 'Anya Sharma',
    role: 'Full Production',
    image: '/landing/landing8.jpg',
    videoUrl: 'https://player.vimeo.com/video/92846187?autoplay=1',
    description: 'An intimate, high-altitude documentary recording the winter preparations of sherpas.'
  },
  {
    id: 9,
    title: 'Kathmandu Echoes',
    category: 'documentaries',
    year: '2024',
    director: 'Sam T.',
    role: 'Cinematography',
    image: '/landing/landing9.jpg',
    videoUrl: 'https://player.vimeo.com/video/512967675?autoplay=1',
    description: 'A documentary mapping the sounds, bells, and chants of ancient temples across the valley.'
  }
];

export default function Portfolio({ activeVideo, onPlayVideo = () => {} }) {
  const [activeTab, setActiveTab] = useState('movies');

  const filteredItems = portfolioData.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="section portfolio-v2">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Filmography</span>
          <h1 className="section-title">The Work Speaks Nepali. And Every Other Language, Too.</h1>
        </div>

        <h2>Filter by Category</h2>

        {/* Portfolio Tabs - Integrated inline */}
        <div className="portfolio-tabs-v2">
          <button 
            className={`portfolio-tab-btn-v2 ${activeTab === 'movies' ? 'active' : ''}`}
            onClick={() => setActiveTab('movies')}
          >
            Movies
          </button>
          <button 
            className={`portfolio-tab-btn-v2 ${activeTab === 'shorts' ? 'active' : ''}`}
            onClick={() => setActiveTab('shorts')}
          >
            Short Films
          </button>
          <button 
            className={`portfolio-tab-btn-v2 ${activeTab === 'documentaries' ? 'active' : ''}`}
            onClick={() => setActiveTab('documentaries')}
          >
            Documentaries
          </button>
        </div>

        {/* Grid showcase */}
        <div className="portfolio-grid-v2" key={activeTab}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card-v2 animate-fade-in"
              onClick={() => onPlayVideo(item)}
            >
              <div className="portfolio-card-media-v2">
                <img src={item.image} alt={item.title} className="portfolio-card-img-v2" />
                <div className="portfolio-card-overlay-v2">
                  <div className="portfolio-play-btn-v2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="portfolio-play-svg-v2">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-details-v2">
                <h3 className="portfolio-card-title-v2">{item.title}</h3>
                <div className="portfolio-card-meta-v2">
                  <span>Role: {item.role}</span>
                  <span className="meta-separator-v2">|</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
