import React, { useState, useEffect } from 'react';
import './Gallery.css';

const galleryPhotos = [
  // Behind the Scenes Stills
  {
    id: 1,
    image: '/gallery/mountain.jpg',
    caption: 'Annapurna Valley Shoot - Widescreen Landscape Still',
    category: 'bts'
  },
  {
    id: 2,
    image: '/gallery/ghat.jpg',
    caption: 'Bagmati Ghats - Atmospheric Night Ceremony Sequence',
    category: 'bts'
  },
  {
    id: 3,
    image: '/gallery/rain.jpg',
    caption: 'Kathmandu Garden - Monsoon Rainfall Scenic Still',
    category: 'bts'
  },
  {
    id: 4,
    image: '/gallery/staircase.jpg',
    caption: 'Swayambhu Staircase - Mossy Path Journey Sequence',
    category: 'bts'
  },
  {
    id: 5,
    image: '/gallery/temple.jpg',
    caption: 'Durbar Square - Moonlit Pagoda Temple Capture',
    category: 'bts'
  },
  {
    id: 6,
    image: '/landing/landing10.jpg',
    caption: 'Behind the Scenes - Camera Set Crew Gear Mapping & Rigging',
    category: 'bts'
  },
  // Pictures / Fine Art Stills
  {
    id: 11,
    image: '/pictures/pic1.jpg',
    caption: 'Nepalese Architecture - Swayambhunath Stupa Heritage Details',
    category: 'pictures'
  },
  {
    id: 12,
    image: '/pictures/pic2.jpg',
    caption: 'Himalayan Foothills - Scenic Melamchi Valley Landscape',
    category: 'pictures'
  },
  {
    id: 13,
    image: '/pictures/pic3.jpg',
    caption: 'Juxtaposed Night - Dramatic Twilight Contrast of Valley Roads',
    category: 'pictures'
  },
  {
    id: 14,
    image: '/pictures/pic4.jpg',
    caption: 'Night Melamchi - Starry Sky and Valley Settlement Lights',
    category: 'pictures'
  },
  {
    id: 15,
    image: '/pictures/pic5.jpg',
    caption: 'Sacred Pashupatinath - Golden Lit Roof Architecture & Details',
    category: 'pictures'
  },
  {
    id: 16,
    image: '/pictures/pic6.jpg',
    caption: 'Kathmandu Alleyways - Historic Courtyard Fine Art Still',
    category: 'pictures'
  },
  {
    id: 17,
    image: '/pictures/pic7.jpg',
    caption: 'Monsoon Light - Cinematic Contrast of Traditional Windows',
    category: 'pictures'
  },
  {
    id: 18,
    image: '/pictures/Chabahil Bus.JPG',
    caption: 'Chabahil Transit - Vibrant Kathmandu Daily Commute & City Life Still',
    category: 'pictures'
  },
  {
    id: 19,
    image: '/pictures/_MG_4088.jpg',
    caption: 'Framed Perspective - Cinematic Portrait & Production Capture',
    category: 'pictures'
  },
  {
    id: 20,
    image: '/pictures/FCC1DD78-931B-40F3-9A20-44C8696DA5B4.jpeg',
    caption: 'Scenic Heights - High Altitude Expedition Frame',
    category: 'pictures'
  },
  {
    id: 21,
    image: '/pictures/IMG_9490.jpeg',
    caption: 'Highland Serenity - Visual Flow and Majestic Ridge Landscape',
    category: 'pictures'
  },
  {
    id: 22,
    image: '/pictures/IMG_9776.jpeg',
    caption: 'Sacred Carving Details - Heritage Architecture Close-up',
    category: 'pictures'
  },
  {
    id: 23,
    image: '/pictures/IMG_3820.jpeg',
    caption: 'Cinematic Vista - High-contrast Valley Silhouette Still',
    category: 'pictures'
  },
  {
    id: 24,
    image: '/pictures/IMG_3822.jpeg',
    caption: 'Atmospheric Light - Evening Glow on Traditional Settlement',
    category: 'pictures'
  },
  {
    id: 25,
    image: '/pictures/IMG_3825.jpeg',
    caption: 'Nepalese Heritage - Durbar Architecture Details',
    category: 'pictures'
  },
  {
    id: 26,
    image: '/pictures/IMG_4133.jpeg',
    caption: 'Behind the Scenes - Camera Crew and Direction Setup',
    category: 'pictures'
  },
  {
    id: 27,
    image: '/pictures/IMG_4187.jpeg',
    caption: 'Epic Mountain Scale - Snowy Himalayan Peak Capture',
    category: 'pictures'
  },
  {
    id: 28,
    image: '/pictures/IMG_5534.jpeg',
    caption: 'Traditional Living - Cultural Portrait of Nepal Life',
    category: 'pictures'
  },
  {
    id: 29,
    image: '/pictures/IMG_5536.jpeg',
    caption: 'Visual Mood - Rainy Day Alleyways of Kathmandu',
    category: 'pictures'
  },
  {
    id: 30,
    image: '/pictures/IMG_6464.jpeg',
    caption: 'Cinematic Portrait - Expressive Human Story Still',
    category: 'pictures'
  },
  {
    id: 31,
    image: '/pictures/IMG_6715.jpeg',
    caption: 'Mountain Ridge - Scenic Trekking Path & Valleys',
    category: 'pictures'
  },
  {
    id: 32,
    image: '/pictures/IMG_6716.jpeg',
    caption: 'Monsoon Green - Natural Landscape of Melamchi Valley',
    category: 'pictures'
  },
  {
    id: 33,
    image: '/pictures/IMG_6718.jpeg',
    caption: 'Golden Temple - Dusk Reflection on Sacred Pagoda',
    category: 'pictures'
  },
  {
    id: 34,
    image: '/pictures/IMG_6781.jpeg',
    caption: 'Scouting Location - Atmospheric Travel Capture',
    category: 'pictures'
  },
  {
    id: 35,
    image: '/pictures/IMG_6804.jpeg',
    caption: 'Cultural Rituals - Night Time Ceremony Sequence',
    category: 'pictures'
  },
  {
    id: 36,
    image: '/pictures/IMG_7725.jpeg',
    caption: 'Cinematic Frame - Focus on Traditional Wood Carvings',
    category: 'pictures'
  },
  {
    id: 37,
    image: '/pictures/IMG_8563.JPG',
    caption: 'BTS Stills - Camera Rigs and On-Set Production',
    category: 'pictures'
  }
];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [activeCategory, setActiveCategory] = useState('bts');

  useEffect(() => {
    const handleSetTab = (e) => {
      if (e.detail === 'bts' || e.detail === 'pictures') {
        setActiveCategory(e.detail);
      }
    };
    window.addEventListener('set-gallery-tab', handleSetTab);
    return () => window.removeEventListener('set-gallery-tab', handleSetTab);
  }, []);

  const filteredPhotos = galleryPhotos.filter(photo => photo.category === activeCategory);

  return (
    <section id="gallery" className="section gallery-v2">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Set Stills</span>
          <h2 className="section-title">Behind the Scenes</h2>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="gallery-tabs-v2">
          <button 
            className={`gallery-tab-btn-v2 ${activeCategory === 'bts' ? 'active' : ''}`}
            onClick={() => setActiveCategory('bts')}
          >
            Behind the Scenes
          </button>
          <button 
            className={`gallery-tab-btn-v2 ${activeCategory === 'pictures' ? 'active' : ''}`}
            onClick={() => setActiveCategory('pictures')}
          >
            Pictures
          </button>
        </div>

        <div className="gallery-grid-v2" key={activeCategory}>
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="gallery-item-v2 animate-fade-in"
              onClick={() => setActivePhoto(photo)}
            >
              <img src={photo.image} alt={photo.caption} className="gallery-img-v2" />
              <div className="gallery-item-overlay-v2">
                <span className="gallery-zoom-icon-v2">&#65291;</span>
                <p className="gallery-item-caption-v2">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Window Lightbox Overlay */}
      {activePhoto && (
        <div className="lightbox-v2" onClick={() => setActivePhoto(null)}>
          <button className="lightbox-close-v2" onClick={() => setActivePhoto(null)}>&times;</button>
          <div className="lightbox-content-v2" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.image} alt={activePhoto.caption} className="lightbox-img-v2" />
            <p className="lightbox-caption-v2">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
