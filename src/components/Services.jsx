import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    num: '01',
    title: 'Pre-Production & Planning',
    desc: 'Script development, casting local talent, scouting locations across Nepal (Kathmandu, Pokhara, Everest region), and detailed storyboarding.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="service-icon-svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    id: 2,
    num: '02',
    title: 'Cinematography & Direction',
    desc: 'Equipped with state-of-the-art camera systems (ARRI, RED) to capture rich, cinematic imagery. Directed by creative minds who focus on storytelling.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="service-icon-svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 3,
    num: '03',
    title: 'Post-Production & VFX',
    desc: 'Full post-production suite including offline/online editing, color grading for high dynamic range, sound design/foley, and subtle visual effects.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="service-icon-svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    num: '04',
    title: 'Equipment & Crew Support',
    desc: 'Providing localized support for international crews looking to shoot in Nepal, including filming permissions, logistics, drone setups, and local fixers.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="service-icon-svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">What We Do</span>
          <h2 className="section-title">Production Capabilities</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card animate-fade-in">
              <div className="service-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <span className="service-number">{service.num}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
