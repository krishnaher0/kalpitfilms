import React from 'react';
import './Partners.css';

const partnersData = [
  {
    id: 1,
    name: 'Nature Herbs',
    logo: (
      <svg viewBox="0 0 200 60" className="partner-logo-svg" fill="currentColor">
        {/* Leaf Emblem */}
        <path d="M40 30 C30 15, 15 25, 25 35 C35 45, 45 40, 45 40 C45 40, 50 35, 40 30 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 34 C33 28, 38 28, 41 33" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Elegant Serif Font Text */}
        <text x="60" y="36" fontFamily="var(--font-serif)" fontSize="18" fontWeight="600" letterSpacing="0.08em">NATURE HERBS</text>
        <text x="60" y="48" fontFamily="var(--font-sans)" fontSize="8" letterSpacing="0.2em" opacity="0.6">ORGANIC PREMIUM</text>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Himalayan Media',
    logo: (
      <svg viewBox="0 0 200 60" className="partner-logo-svg" fill="currentColor">
        {/* Mountain Peaks Outline */}
        <polygon points="20,40 32,20 44,40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="35,40 45,25 55,40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Text */}
        <text x="68" y="36" fontFamily="var(--font-serif)" fontSize="18" fontWeight="600" letterSpacing="0.08em">HIMALAYAN</text>
        <text x="68" y="48" fontFamily="var(--font-sans)" fontSize="8" letterSpacing="0.2em" opacity="0.6">MEDIA & CO</text>
      </svg>
    )
  },
  {
    id: 3,
    name: 'Everest Stills',
    logo: (
      <svg viewBox="0 0 200 60" className="partner-logo-svg" fill="currentColor">
        {/* Camera Aperture / Outline */}
        <rect x="20" y="22" width="28" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="34" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M30 22 L32 18 L36 18 L38 22 Z" fill="currentColor" />
        {/* Text */}
        <text x="60" y="36" fontFamily="var(--font-serif)" fontSize="18" fontWeight="600" letterSpacing="0.08em">EVEREST STILLS</text>
        <text x="60" y="48" fontFamily="var(--font-sans)" fontSize="8" letterSpacing="0.25em" opacity="0.6">CINEMATIC FRAME</text>
      </svg>
    )
  },
  {
    id: 4,
    name: 'Mount Production',
    logo: (
      <svg viewBox="0 0 200 60" className="partner-logo-svg" fill="currentColor">
        {/* Cinema Projector / Film Reel Outline */}
        <circle cx="28" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="42" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M22 36 L48 36 L44 42 L26 42 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Text */}
        <text x="62" y="36" fontFamily="var(--font-serif)" fontSize="17" fontWeight="600" letterSpacing="0.08em">MOUNT PRODUCTIONS</text>
        <text x="62" y="48" fontFamily="var(--font-sans)" fontSize="8" letterSpacing="0.2em" opacity="0.6">ENTERTAINMENT</text>
      </svg>
    )
  }
];

export default function Partners() {
  return (
    <section className="partners-section-v2">
      <div className="container">
        <h4 className="partners-title-v2">Partnered With</h4>
        <div className="partners-grid-v2">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partner-card-v2" title={partner.name}>
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
