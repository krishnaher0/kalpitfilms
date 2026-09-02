import React from 'react';
import './ServiceLandingPage.css';

export default function ServiceLandingPage({
  eyebrow,
  title,
  description,
  intro,
  bullets,
  process,
  ctaLabel = 'Book a Project',
  ctaHref = '#contact'
}) {
  return (
    <section className="service-landing-page">
      <div className="container service-landing-inner">
        <div className="service-landing-hero">
          <span className="section-subtitle">{eyebrow}</span>
          <h1 className="service-landing-title">{title}</h1>
          <p className="service-landing-description">{description}</p>
          <div className="hero-actions">
            <a href={ctaHref} className="primary-btn-v2">{ctaLabel}</a>
          </div>
        </div>

        <div className="service-landing-content">
          <div className="service-landing-panel">
            <h2>The Pipeline</h2>
            <p>{intro}</p>
          </div>

          <div className="service-landing-panel">
            <h2>Full Capability Index</h2>
            <ul className="service-landing-list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-landing-panel">
            <h2>Our process</h2>
            <ol className="service-process">
              {process.map((item, index) => (
                <li key={item}>
                  <span>{index + 1}.</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
