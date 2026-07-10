import React from 'react';
import './Offers.css';

const offersData = [
  {
    id: 1,
    title: 'Ads Production',
    tag: 'Commercials',
    desc: 'High-impact advertising campaigns, brand commercials, and social-first video content.',
    image: '/services/IMG_9443.jpeg',
    sizeClass: 'grid-wide'
  },
  {
    id: 2,
    title: 'Film Production',
    tag: 'Feature Films',
    desc: 'End-to-end cinematic execution, screenplay design, film scouting, and full directors cut production.',
    image: '/services/IMG_0739.JPG',
    sizeClass: 'grid-tall'
  },
  {
    id: 3,
    title: 'Documentaries',
    tag: 'Non-Fiction',
    desc: 'Compelling real-world human stories, cultural exploration, and nature expeditions capturing reality.',
    image: '/services/IMG_3453.jpeg',
    sizeClass: 'grid-standard'
  },
  {
    id: 4,
    title: 'Film Merchandising',
    tag: 'Branding',
    desc: 'Creative merchandising strategies, graphic design collections, and collector edition memorabilia.',
    image: '/services/28.JPG',
    sizeClass: 'grid-standard'
  },
  {
    id: 5,
    title: 'Cinema Gear Rental',
    tag: 'Services',
    desc: 'High-end cinema rigs, anamorphic lens packages, drones, stabilizers, and full lighting equipment kits.',
    image: '/services/Screenshot 2026-07-10 at 20.37.07.png',
    sizeClass: 'grid-wide'
  },
  {
    id: 6,
    title: 'International Film Fixing',
    tag: 'Local Support',
    desc: 'Comprehensive fixing support in Nepal: government clearance, mountain logistics, permit acquisition, and Sherpa team coordination.',
    image: '/services/Screenshot 2026-07-10 at 20.35.07.png',
    sizeClass: 'grid-standard'
  }
];

export default function Offers() {
  return (
    <section id="offers" className="offers-section-v2">
      <div className="container">
        <div className="offers-header-v2">
          <span className="offers-subtitle-v2">Capabilities</span>
          <h2 className="offers-title-main-v2">What We Offer</h2>
          <div className="offers-header-line-v2"></div>
        </div>

        <div className="offers-grid-v2">
          {offersData.map((item) => (
            <div key={item.id} className={`offer-card-v2 ${item.sizeClass}`}>
              <div className="offer-image-wrapper-v2">
                <img src={item.image} alt={item.title} className="offer-img-v2" />
                <div className="offer-overlay-gradient-v2"></div>
              </div>
              <div className="offer-content-v2">
                <span className="offer-tag-v2">{item.tag}</span>
                <h3 className="offer-title-v2">{item.title}</h3>
                <p className="offer-desc-v2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
