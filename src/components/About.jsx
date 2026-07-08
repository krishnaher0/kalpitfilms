import React from 'react';
import './About.css';

const capabilities = [
  {
    id: 1,
    title: 'Preproduction',
    desc: 'Script analysis, location scouting, budget allocations, casting calls, and conceptual storyboards.',
    bgImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Filming & Documentaries',
    desc: 'High-contrast landscape recording, documentaries, and full scale cinema shoots using high-end lens rigs.',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Production Management',
    desc: 'Managing logistics, securing local fixers, obtaining government filming permissions, and drone coordination.',
    bgImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Postproduction & Grading',
    desc: 'Offline video edits, foley and sound design, HDR color tuning, and visual effects integration.',
    bgImage: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop'
  }
];

const teamMembers = [
  {
    id: 1,
    name: 'Amit Pokhrel',
    role: 'CEO & Director',
    image: '/team/amit.jpg',
    socials: {
      facebook: 'https://www.facebook.com/Amiteeyy',
      instagram: 'https://www.instagram.com/strolliinn/',
      twitter: 'https://x.com/strolliinn'
    }
  },
  {
    id: 2,
    name: 'Kushal Pokhrel',
    role: 'COO & Producer',
    image: '/team/kushal.webp',
    socials: {
      facebook: 'https://www.facebook.com/kushal.pokhrel.526',
      instagram: 'https://www.instagram.com/kushalpokhrelll/'
    }
  },
  {
    id: 3,
    name: 'Krishna Bhandari',
    role: 'CTO & Social Media Manager',
    image: '/team/krishna.jpg',
    socials: {
      instagram: 'https://www.instagram.com/krishnabhandari124/'
    }
  }
];

export default function About() {
  const [activeCap, setActiveCap] = React.useState(null);

  return (
    <section id="about" className="section about-v2">
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Our Studio</span>
          <h2 className="section-title">About Kalpit Films</h2>
        </div>

        {/* 1. What We Do Section - Calibrated list layout */}
        <div className="capabilities-section-v2">
          <h3 className="about-subheading-v2">Production Capabilities</h3>
          <div className="capabilities-grid-v2">
            {capabilities.map((cap) => (
              <div key={cap.id} className="capability-card-wrapper animate-fade-in">
                <div 
                  className="capability-card-v2"
                  style={{ '--bg-image': `url(${cap.bgImage})` }}
                  onClick={() => setActiveCap(cap)}
                  role="button"
                  tabIndex="0"
                >
                  <div className="capability-bg-overlay-v2"></div>
                  <div className="capability-content-v2">
                    <span className="capability-number-v2">0{cap.id}</span>
                    <h4 className="capability-title-v2">{cap.title}</h4>
                    <p className="capability-desc-v2">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {activeCap && (
          <div className="capability-modal-overlay" onClick={() => setActiveCap(null)}>
            <div className="capability-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="capability-modal-close" onClick={() => setActiveCap(null)} aria-label="Close modal">&times;</button>
              <div className="capability-modal-img-wrapper">
                <img src={activeCap.bgImage} alt={activeCap.title} className="capability-modal-img" />
                <div className="capability-modal-img-overlay"></div>
              </div>
              <div className="capability-modal-info">
                <span className="capability-modal-number">0{activeCap.id}</span>
                <h3 className="capability-modal-title">{activeCap.title}</h3>
                <p className="capability-modal-desc">{activeCap.desc}</p>
                <div className="capability-modal-additional-details">
                  <p>Our dedicated crew manages all workflows from concept validation, location logistics, permits, drone certifications, through cinematic cinematography and high-fidelity postproduction. We bring a tailored workflow to turn scripts into award-winning silver screen masterpieces.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="film-divider"></div>

        {/* 2. Director Spotlight Section */}
        <div className="director-spotlight-v2 animate-fade-in">
          <div className="director-image-wrapper-v2">
            <img 
              src="/team/amit.jpg" 
              alt="Director Portrait" 
              className="director-img-v2" 
            />
            <div className="director-overlay-v2"></div>
          </div>
          <div className="director-info-v2">
            <span className="director-title-label-v2">Director & Founder</span>
            <h3 className="director-name-v2">Amit Pokhrel</h3>
            <p className="director-quote-v2">
              "Cinema is not just a combination of sound and light; it is a translation of dreams into physical frames. We look at Kathmandu valleys and Annapurna peaks as natural canvases for stories."
            </p>
            <p className="director-bio-v2">
              Amit has spent over 12 years directing independent shorts and award-winning documentaries. He founded Kalpit Films to build a dedicated film studio in Kathmandu that balances local heritage with global high-contrast cinematographic excellence.
            </p>
          </div>
        </div>

        <div className="film-divider"></div>

        {/* 3. Team Section */}
        <div className="team-section-v2">
          <h3 className="about-subheading-v2">Our Creative Team</h3>
          <div className="team-grid-v2">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card-v2 animate-fade-in">
                <div className="team-card-media-v2">
                  <img src={member.image} alt={member.name} className="team-card-img-v2" />
                  <div className="team-card-overlay-v2">
                    <div className="team-social-bar-v2">
                      {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="team-social-icon-v2 facebook" aria-label="Facebook">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="team-social-svg-v2"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1h-4c-3.3 0-5 1.7-5 5v2z"/></svg>
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="team-social-icon-v2 instagram" aria-label="Instagram">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="team-social-svg-stroke-v2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="team-social-icon-v2 twitter" aria-label="Twitter/X">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="team-social-svg-v2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="team-card-details-v2">
                  <h4 className="team-card-name-v2">{member.name}</h4>
                  <p className="team-card-role-v2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
