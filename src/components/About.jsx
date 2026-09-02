import React from 'react';
import './About.css';

const capabilities = [
  {
    id: 1,
    title: 'Preproduction',
    desc: 'Script analysis, location scouting, budget allocations, casting calls, and conceptual storyboards.',
    bgImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop',
    intro: '',
    bodyCopy: [],
    keyCapabilities: [],
    whyChooseUs: []
  },
  {
    id: 2,
    title: 'Filming & Documentaries',
    desc: 'High-contrast landscape recording, documentaries, and full scale cinema shoots using high-end lens rigs.',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
    intro: 'We produce feature and short films — some entirely our own, others in collaboration with Nepali and international filmmakers — at any stage from script development through to distribution and release.',
    bodyCopy: [
      'Kalpit Films works both sides of the camera. We develop and produce our own feature and short film projects, and we partner with other filmmakers and production companies who need a collaborator at a specific stage — writing, financing conversations, casting, the shoot itself, post, or getting a finished film in front of an audience.',
      'For Nepali filmmakers, that means a partner who can join wherever you already are, without forcing you to restart your process around ours. For international productions, it means a team that understands Nepal\'s terrain, permissions, and crew realities well enough to make a shooting schedule survive contact with the country it\'s set in — whether we\'re producing alongside you or handling production on our own project you\'re investing in or co-producing.'
    ],
    keyCapabilities: [
      'Feature, short, independent & experimental film production — in-house and collaborative',
      'Script and story development through to a shoot-ready project',
      'International co-production support',
      'Line production & full production management',
      'On-set coordination · crew, cast, and location assembly',
      'Distribution and release support'
    ],
    whyChooseUs: [
      'Comfortable producing our own work and collaborating on someone else\'s, at any stage from script to release',
      'One partner across the full chain — no handoff between development, production, and distribution'
    ]
  },
  {
    id: 3,
    title: 'Production Management',
    desc: 'Managing logistics, securing local fixers, obtaining government filming permissions, and drone coordination.',
    bgImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    intro: '',
    bodyCopy: [],
    keyCapabilities: [],
    whyChooseUs: []
  },
  {
    id: 4,
    title: 'Postproduction & Grading',
    desc: 'Offline video edits, foley and sound design, HDR color tuning, and visual effects integration.',
    bgImage: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop',
    intro: '',
    bodyCopy: [],
    keyCapabilities: [],
    whyChooseUs: []
  }
];

const teamMembers = [
  {
    id: 1,
    name: 'Amit Pokhrel',
    role: 'Founder & CEO',
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
    role: 'Co-Founder & COO',
    image: '/team/kushal.webp',
    socials: {
      facebook: 'https://www.facebook.com/kushal.pokhrel.526',
      instagram: 'https://www.instagram.com/kushalpokhrelll/'
    }
  },
  {
    id: 3,
    name: 'Krishna Bhandari',
    role: 'Co-Founder & CTO',
    image: '/team/krishna.jpg',
    socials: {
      instagram: 'https://www.instagram.com/krishnabhandari124/'
    }
  }
];

export default function About() {
  const [activeCap, setActiveCap] = React.useState(null);
  const [form, setForm] = React.useState({ name: '', email: '', phone: '', category: 'hiring', projectType: '', description: '', timeline: '', budget: '', message: '' });
  const [formState, setFormState] = React.useState({ loading: false, success: null, error: null });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setFormState({ loading: false, success: null, error: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: false, success: null, error: null });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormState({ loading: false, success: null, error: 'Please complete all fields.' });
      return;
    }
    if (!validateEmail(form.email)) {
      setFormState({ loading: false, success: null, error: 'Please provide a valid email address.' });
      return;
    }

    setFormState({ loading: true, success: null, error: null });
    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const endpoint = isLocal ? "http://localhost:5005/api/send-email" : "/api/send-email";

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          category: form.category,
          projectType: form.projectType,
          description: form.description,
          timeline: form.timeline,
          budget: form.budget,
          message: form.message
        })
      });
      const data = await resp.json();
      if (resp.ok) {
        setFormState({ loading: false, success: 'Message sent. We will reply soon.', error: null });
        setForm({ name: '', email: '', phone: '', category: 'hiring', projectType: '', description: '', timeline: '', budget: '', message: '' });
      } else {
        const errorText = typeof data.error === 'object' ? JSON.stringify(data.error) : data.error;
        setFormState({ loading: false, success: null, error: errorText || 'Failed to send message.' });
      }
    } catch (err) {
      setFormState({ loading: false, success: null, error: err.message || 'Network error' });
    }
  };

  return (
    <section id="about" className="section about-v2">
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <h1 className="section-title">Story, People, Production, Culture, Execution.</h1>
        </div>

        <div className="about-single-story-panel-v2">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="about-subheading-v2">Kalpit Films</h2>

          <div className="about-single-copy-v2">
            <p>
              Kalpit Films is a Kathmandu-based production house working across film, documentary, advertising, music, theatre, and live events.
              Founded in 2025 by Amit Pokhrel and Kushal Pokhrel — Amit bringing close to a decade of experience as a screenwriter, filmmaker,
              and director, and Kushal bringing over five years of experience as a screenwriter, filmmaker, actor, and producer — we were built to
              close a gap we kept encountering ourselves: the distance between a strong creative idea and the unglamorous production work required to
              actually get it made in Nepal.
            </p>

            <p>
              A good idea deserves a production process that doesn't compromise it. That belief is why we didn't build a company around one discipline —
              a film unit, or an ad agency, or an equipment shop — but around the full chain a creative project actually travels through: development,
              casting, locations, crew, production, and post. Treating these as one connected practice, rather than outsourced fragments, is how a
              project keeps its original intention intact from the first draft to the final export.
            </p>
          </div>

          <div className="about-single-grid-v2">
            <div className="about-single-grid-item-v2">
              <span className="-subtitle">Why We Work Across Multiple Disciplines</span>
              <p>
                Film, advertising, music, theatre, and events look like different industries from the outside. From inside a production, they share
                almost everything: a script or a concept, a cast, a crew, a location, a schedule, a technical department, and an audience waiting on the
                other end. Once you've built the infrastructure to do one well, extending it across the others is a matter of specialists, not a different company.
              </p>
            </div>

            <div className="about-single-grid-item-v2">
              <span className="section-subtitle">Our Production Philosophy</span>
              <p>
                Plan for the country as it is, not as it looks in a photograph. Solve problems before the shoot day, not during it. Keep one point of
                accountability, no matter how many specialists a project requires.
              </p>
            </div>

            <div className="about-single-grid-item-v2">
              <span className="section-subtitle">Our Understanding of Nepal</span>
              <p>
                We don't think of Nepal as a backdrop. It's a country with real terrain, real bureaucracy, real seasons, and real communities who live in
                the places productions want to film. Understanding that — not just knowing which valley looks good on camera — is what separates a
                production partner from a location fixer.
              </p>
            </div>

            <div className="about-single-grid-item-v2">
              <span className="section-subtitle">Why Choose Us</span>
              <ul className="about-bullets-v2">
                <li>A single team spanning creative development and production logistics.</li>
                <li>Deep, current knowledge of Nepal's terrain, regulation, and culture.</li>
                <li>A flexible specialist network rather than a fixed, limited in-house team.</li>
                <li>Proven comfort working with both Nepali and international clients.</li>
              </ul>
            </div>
          </div>

          <div className="about-single-quote-v2">
            
          </div>
        </div>

        {/* 1. What We Do Section - Calibrated list layout */}
        <div className="capabilities-section-v2">
          <h2 className="about-subheading-v2">What We Believe</h2>
          <br height="20"></br>
          <h3 className="about-subheading-v2">Collaborate with us</h3>
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
                
                {activeCap.intro && (
                  <div className="capability-modal-section">
                    <h4 className="capability-modal-section-title">Intro</h4>
                    <p className="capability-modal-section-text">{activeCap.intro}</p>
                  </div>
                )}

                {activeCap.bodyCopy.length > 0 && (
                  <div className="capability-modal-section">
                    <h4 className="capability-modal-section-title">About</h4>
                    {activeCap.bodyCopy.map((para, idx) => (
                      <p key={idx} className="capability-modal-section-text">{para}</p>
                    ))}
                  </div>
                )}

                {activeCap.keyCapabilities.length > 0 && (
                  <div className="capability-modal-section">
                    <h4 className="capability-modal-section-title">Key Capabilities</h4>
                    <ul className="capability-modal-bullets">
                      {activeCap.keyCapabilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeCap.whyChooseUs.length > 0 && (
                  <div className="capability-modal-section">
                    <h4 className="capability-modal-section-title">Why Choose Us</h4>
                    <ul className="capability-modal-bullets">
                      {activeCap.whyChooseUs.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
              alt="Amit Pokhrel - Founder and CEO of Kalpit Films" 
              loading="lazy"
              decoding="async"
              className="director-img-v2" 
            />
            <div className="director-overlay-v2"></div>
          </div>
          <div className="director-info-v2">
            <span className="director-title-label-v2">Founder & CEO</span>
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

        {/* 3. Contact Form Section */}
        <div id="contact" className="contact-section-in-about-v2 animate-fade-in">
          <div className="contact-inner-grid-v2">
            <div className="contact-details-panel-v2">
              <span className="section-subtitle">Reach Us</span>
              <h3 className="about-subheading-v2">Let's Talk About What We're Making</h3>
              <p className="contact-blurb-v2">
Whether you need a production partner or want to collaborate on something we're building — this is where it starts.<br></br><br></br>Tell us what you're making, your timeline, and where you're based, and we'll follow up directly. International teams: share your shoot dates early — permits and locations in Nepal need lead time. Looking to collaborate, invest, or join a Kalpit Films production instead? Let us know that too — we'll route it to the right person.</p>           
   <div className="contact-meta-v2">
                <div className="contact-meta-item-v2">
                  <strong>Email</strong>
                  <span>contact@kalpitfilms.com</span>
                </div>
                <div className="contact-meta-item-v2">
                  <strong>Phone</strong>
                  <span>+977 9860671040</span>
                </div>
                <div className="contact-meta-item-v2">
                  <strong>Studio</strong>
                  <span>Kupandole Road, Lalitpur</span>
                </div>
              </div>
            </div>
            <div className="contact-form-panel-v2">
              <form className="about-contact-form-v2" onSubmit={handleSubmit} noValidate>
                <div className="form-group-v2">
                  <label htmlFor="about-name" className="form-label-v2">Full Name</label>
                  <input id="about-name" name="name" type="text" className="form-input-v2" placeholder="Your full name" value={form.name} onChange={handleInput} />
                </div>
                <div className="form-group-v2">
                  <label htmlFor="about-email" className="form-label-v2">Email Address</label>
                  <input id="about-email" name="email" type="email" className="form-input-v2" placeholder="name@company.com" value={form.email} onChange={handleInput} />
                </div>
                <div className="form-group-v2">
                  <label htmlFor="about-phone" className="form-label-v2">Phone / WhatsApp</label>
                  <input id="about-phone" name="phone" type="tel" className="form-input-v2" placeholder="+977 98XXXXXXXX" value={form.phone} onChange={handleInput} />
                </div>

                <div className="form-group-v2">
                  <label className="form-label-v2">What brings you here?</label>
                  <div className="radio-group-v2">
                    <div className="radio-item-v2">
                      <input type="radio" id="about-hiring" name="category" value="hiring" checked={form.category === 'hiring'} onChange={handleInput} className="radio-input-v2" />
                      <label htmlFor="about-hiring" className="radio-label-v2">Hiring Kalpit Films</label>
                    </div>
                    <div className="radio-item-v2">
                      <input type="radio" id="about-collaborating" name="category" value="collaborating" checked={form.category === 'collaborating'} onChange={handleInput} className="radio-input-v2" />
                      <label htmlFor="about-collaborating" className="radio-label-v2">Collaborating on a Kalpit Films project</label>
                    </div>
                    <div className="radio-item-v2">
                      <input type="radio" id="about-investment" name="category" value="investment" checked={form.category === 'investment'} onChange={handleInput} className="radio-input-v2" />
                      <label htmlFor="about-investment" className="radio-label-v2">Investment or Partnership</label>
                    </div>
                    <div className="radio-item-v2">
                      <input type="radio" id="about-joining" name="category" value="joining" checked={form.category === 'joining'} onChange={handleInput} className="radio-input-v2" />
                      <label htmlFor="about-joining" className="radio-label-v2">Joining as Cast or Crew</label>
                    </div>
                  </div>
                </div>

                {form.category === 'hiring' && (
                  <>
                    <div className="form-group-v2">
                      <label htmlFor="about-projectType" className="form-label-v2">Project Type</label>
                      <input id="about-projectType" name="projectType" type="text" className="form-input-v2" placeholder="e.g., Film, Commercial, Documentary, Music Video" value={form.projectType} onChange={handleInput} />
                    </div>
                    <div className="form-group-v2">
                      <label htmlFor="about-description" className="form-label-v2">Description</label>
                      <textarea id="about-description" name="description" rows="3" className="form-textarea-v2" placeholder="Brief description of your project..." value={form.description} onChange={handleInput}></textarea>
                    </div>
                    <div className="form-group-v2">
                      <label htmlFor="about-timeline" className="form-label-v2">Timeline</label>
                      <input id="about-timeline" name="timeline" type="text" className="form-input-v2" placeholder="e.g., 3 months, Q1 2025, Flexible" value={form.timeline} onChange={handleInput} />
                    </div>
                    <div className="form-group-v2">
                      <label htmlFor="about-budget" className="form-label-v2">Budget (optional)</label>
                      <input id="about-budget" name="budget" type="text" className="form-input-v2" placeholder="e.g., 500k - 1M NPR, To be discussed" value={form.budget} onChange={handleInput} />
                    </div>
                  </>
                )}

                <div className="form-group-v2">
                  <label htmlFor="about-message" className="form-label-v2">Message</label>
                  <textarea id="about-message" name="message" rows="5" className="form-textarea-v2" placeholder="Describe your film or production idea" value={form.message} onChange={handleInput}></textarea>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <button type="submit" className="btn-primary" disabled={formState.loading}>{formState.loading ? 'Sending…' : 'Send Message'}</button>
                  {formState.success && <div className="form-success-msg">{formState.success}</div>}
                  {formState.error && <div className="form-error-msg">{formState.error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="film-divider"></div>

        {/* 4. Team Section */}
        <div className="team-section-v2">
          <h3 className="about-subheading-v2">Our Founding Team</h3>
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
