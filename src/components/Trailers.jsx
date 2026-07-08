import React, { useRef } from 'react';
import './Trailers.css';

const trailersData = [
  {
    id: 1,
    title: 'ECHOES OF TOMORROW',
    director: 'Sarah Chen',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/22439234?autoplay=1'
  },
  {
    id: 2,
    title: 'THE LAST MELODY',
    director: 'Leo Khan',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/92846187?autoplay=1'
  },
  {
    id: 3,
    title: 'SHADOWFALL',
    director: 'Ales R.',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/113841869?autoplay=1'
  },
  {
    id: 4,
    title: 'HORIZON\'S EDGE',
    director: 'Sophie Chen',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/80836567?autoplay=1'
  },
  {
    id: 5,
    title: 'THE WIND\'S PATH',
    director: 'Anya Sharma',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/285908078?autoplay=1'
  },
  {
    id: 6,
    title: 'KATHMANDU ECHOES',
    director: 'Sam T.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://player.vimeo.com/video/512967675?autoplay=1'
  }
];

export default function Trailers({ onPlayVideo }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -440, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  return (
    <section className="section trailers-v2">
      <div className="container">
        
        <div className="trailers-header-v2">
          <div className="trailers-title-left-v2">
            <span className="section-subtitle">Cinema Releases</span>
            <h2 className="section-title">Official Trailers</h2>
          </div>
          {/* Scroll arrow triggers */}
          <div className="trailers-arrows-v2">
            <button className="trailer-arrow-btn-v2" onClick={scrollLeft} aria-label="Scroll left">&#10229;</button>
            <button className="trailer-arrow-btn-v2" onClick={scrollRight} aria-label="Scroll right">&#10230;</button>
          </div>
        </div>

        {/* Horizontal scroll grid */}
        <div className="trailers-scroll-container-v2" ref={scrollRef}>
          {trailersData.map((trailer) => (
            <div 
              key={trailer.id} 
              className="trailer-card-v2"
              onClick={() => onPlayVideo(trailer)}
            >
              <div className="trailer-card-media-v2">
                <img src={trailer.image} alt={trailer.title} className="trailer-card-img-v2" />
                <div className="trailer-card-overlay-v2">
                  <div className="trailer-play-icon-v2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="trailer-play-svg-v2">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="trailer-card-details-v2">
                <span className="trailer-card-meta-v2">DIR. {trailer.director} &bull; {trailer.year}</span>
                <h3 className="trailer-card-title-v2">{trailer.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
