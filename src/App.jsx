import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Offers from './components/Offers';
import FullService from './components/FullService';
import OfferDetail from './components/OfferDetail';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import ServiceLandingPage from './components/ServiceLandingPage';
import './App.css';

const servicePages = [
  {
    path: '/film-production-house-in-nepal',
    seo: {
      title: 'Film Production House in Nepal | Kalpit Films',
      description: 'Looking for a film production house in Nepal? Kalpit Films creates cinematic films, documentaries, and commercial work for brands, campaigns, and productions across Nepal.',
      keywords: 'film production house in Nepal, film production company in Nepal, movie production company Nepal, cinematic production house Nepal',
      canonicalPath: '/film-production-house-in-nepal'
    },
    content: {
      eyebrow: 'Film Production House',
      title: 'Film Production House in Nepal',
      description: 'We are a film production house in Nepal helping brands, filmmakers, and businesses turn ideas into cinematic visual stories.',
      intro: 'Kalpit Films delivers full-service production support from concept development and planning to filming, editing, and final delivery for projects across Nepal.',
      bullets: [
        'Feature films and short films',
        'Commercial and branded storytelling',
        'Production planning and crew management',
        'Location scouting in Kathmandu and beyond',
        'Documentary filmmaking and narrative stories',
        'Post-production and final delivery'
      ],
      process: [
        'We understand your concept, goals, production requirements, and timeline before planning the shoot.',
        'Our team coordinates cast, crew, permits, equipment, and locations to keep production smooth and on schedule.',
        'We create and deliver a polished production that feels cinematic, clear, and ready for audience impact.'
      ],
      ctaLabel: 'Discuss Your Project',
      ctaHref: '#contact'
    }
  },
  {
    path: '/film-production-company-in-nepal',
    seo: {
      title: 'Film Production Company in Nepal | Kalpit Films',
      description: 'Hire a film production company in Nepal for documentaries, commercials, branded films, and high-end storytelling across Kathmandu and the Himalayan region.',
      keywords: 'film production company in Nepal, video production company Nepal, creative production company Kathmandu, cinematic video production Nepal',
      canonicalPath: '/film-production-company-in-nepal'
    },
    content: {
      eyebrow: 'Production Company',
      title: 'Film Production Company in Nepal',
      description: 'Kalpit Films is a production company in Nepal built for creative storytelling, polished visuals, and smooth production execution across multiple formats.',
      intro: 'From cast and crew to location logistics and final edit, we help clients produce standout content that feels cinematic and intentional.',
      bullets: [
        'Commercial film production',
        'Documentary production services',
        'Corporate film and brand stories',
        'Wedding and event cinema',
        'Cinematography and location support',
        'Production management and editing'
      ],
      process: [
        'We align the brief, creative direction, and production strategy with the client’s message and audience.',
        'Our team executes the shoot with disciplined planning, technical care, and strong on-set coordination.',
        'We finish with post-production and delivery tailored for digital, broadcast, and social channels.'
      ],
      ctaLabel: 'Book a Production',
      ctaHref: '#contact'
    }
  },
  {
    path: '/film-production',
    seo: {
      title: 'Film Production Company in Kathmandu, Nepal | Kalpit Films',
      description: 'Hire a premier film production company in Kathmandu for feature films, short films, documentaries, and cinematic storytelling projects across Nepal.',
      keywords: 'film production Kathmandu, film production company Nepal, cinematic production house Kathmandu, feature film production Nepal',
      canonicalPath: '/film-production'
    },
    content: {
      eyebrow: 'Film Production',
      title: 'Film Production Company in Kathmandu, Nepal',
      description: 'We create cinematic films for story-driven brands, independent productions, and international teams needing a dependable production partner in Nepal.',
      intro: 'Kalpit Films helps ideas become finished works with production planning, crew coordination, location strategy, and end-to-end creative execution.',
      bullets: [
        'Feature films and short films',
        'Narrative and documentary production',
        'Production management and crew coordination',
        'Location scouting across Kathmandu and Nepal',
        'International co-production support',
        'Post-production support and delivery'
      ],
      process: [
        'We shape the concept and production plan around your story, budget, and schedule.',
        'Our team handles locations, crew, permits, and cast coordination with local logistics expertise.',
        'We direct, capture, and manage production so the final film is polished and release-ready.'
      ],
      ctaLabel: 'Discuss Your Film',
      ctaHref: '#contact'
    }
  },
  {
    path: '/documentary-production',
    seo: {
      title: 'Documentary Production Company in Nepal | Kalpit Films',
      description: 'Documentary production services in Nepal for cultural stories, social impact campaigns, and human-centered filmmaking with cinematic quality.',
      keywords: 'documentary production Nepal, documentary filmmakers Kathmandu, social impact filmmaking Nepal, human stories documentary',
      canonicalPath: '/documentary-production'
    },
    content: {
      eyebrow: 'Documentary Films',
      title: 'Documentary Production in Nepal',
      description: 'We build thoughtful, visually rich documentaries that respect the people, places, and realities behind the story.',
      intro: 'From research to release, we manage the creative and logistical layers needed to produce honest, compelling documentary work in Nepal.',
      bullets: [
        'Cultural and social documentaries',
        'Research and interview-led projects',
        'Field production and access coordination',
        'Story development and creative guidance',
        'Post-production and final delivery',
        'International documentary collaboration'
      ],
      process: [
        'We identify the story, access requirements, and production constraints early.',
        'Our team plans shoots, interviews, and location logistics with local sensitivity and precision.',
        'We craft a finished documentary that feels honest, cinematic, and audience-ready.'
      ],
      ctaLabel: 'Start a Documentary',
      ctaHref: '#contact'
    }
  },
  {
    path: '/commercial-video-production',
    seo: {
      title: 'Commercial Video Production Kathmandu | Kalpit Films',
      description: 'Professional commercial video production in Kathmandu for brands, agencies, and campaigns seeking meaningful storytelling and high-end visuals.',
      keywords: 'commercial video production Kathmandu, brand film production Nepal, advertising video company Kathmandu, corporate video production Nepal',
      canonicalPath: '/commercial-video-production'
    },
    content: {
      eyebrow: 'Commercial Production',
      title: 'Commercial Video Production in Kathmandu',
      description: 'We produce commercial films and brand content that balance aesthetics, performance, and conversion-oriented storytelling.',
      intro: 'Kalpit Films works with brands, agencies, and founders who need polished visuals delivered on schedule and with strong creative focus.',
      bullets: [
        'Brand films and commercials',
        'Product and campaign videos',
        'Corporate video production',
        'Multi-platform content delivery',
        'Creative direction and production management',
        'Social and digital advertising assets'
      ],
      process: [
        'We align on the brief, message, target audience, and expected deliverables.',
        'Our team plans each shoot for story, product, and production efficiency.',
        'We deliver polished commercial content ready for digital, broadcast, and social use.'
      ],
      ctaLabel: 'Book a Commercial',
      ctaHref: '#contact'
    }
  },
  {
    path: '/wedding-videography-nepal',
    seo: {
      title: 'Wedding Videography Nepal | Kalpit Films',
      description: 'Wedding videography in Nepal with cinematic coverage, intimate storytelling, and beautiful event films for couples and families.',
      keywords: 'wedding videography Nepal, wedding film Kathmandu, cinematic wedding films Nepal, wedding cinematography Kathmandu',
      canonicalPath: '/wedding-videography-nepal'
    },
    content: {
      eyebrow: 'Wedding Films',
      title: 'Wedding Videography in Nepal',
      description: 'We document weddings with a cinematic eye, focusing on emotion, movement, and the atmosphere that makes each day unforgettable.',
      intro: 'For couples wanting a film that feels intimate and timeless, we capture the details, stories, and feelings behind the celebration.',
      bullets: [
        'Wedding film and cinematic coverage',
        'Pre-wedding and engagement shoots',
        'Family and cultural storytelling',
        'Detailed cinematography and sound capture',
        'Short-form teaser and full wedding film',
        'Travel and destination wedding support'
      ],
      process: [
        'We learn the story, rhythm, and key moments important to your celebration.',
        'Our team films with an unobtrusive cinematic approach to preserve emotion and atmosphere.',
        'We craft a wedding film that feels personal, immersive, and beautifully edited.'
      ],
      ctaLabel: 'Plan My Wedding Film',
      ctaHref: '#contact'
    }
  }
];

function updateMetaTag(selector, attribute, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement(attribute === 'property' ? 'meta' : 'meta');
    tag.setAttribute(attribute, selector.replace(/^\[|\]$/g, ''));
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute === 'property' ? 'property' : 'name', selector.replace(/^\[|\]$/g, ''));
  tag.setAttribute('content', value);
}

function Seo({ title, description, keywords, canonicalPath = '/', ogImage = 'https://kalpitfilms.com/pictures/Chabahil%20Bus.JPG' }) {
  useEffect(() => {
    const baseUrl = 'https://kalpitfilms.com';
    const currentUrl = `${baseUrl}${canonicalPath}`;
    document.title = title;

    const metaMap = {
      'meta[name="description"]': description,
      'meta[name="keywords"]': keywords,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:url"]': currentUrl,
      'meta[property="og:image"]': ogImage,
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': description,
      'meta[name="twitter:url"]': currentUrl,
      'meta[name="twitter:image"]': ogImage,
    };

    Object.entries(metaMap).forEach(([selector, content]) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        const isProperty = selector.startsWith('meta[property=');
        if (isProperty) {
          tag.setAttribute('property', selector.match(/property="([^"]+)"/)? selector.match(/property="([^"]+)"/)[1] : selector.replace(/^meta\[property="|"\]$/g, ''));
        } else {
          tag.setAttribute('name', selector.match(/name="([^"]+)"/)? selector.match(/name="([^"]+)"/)[1] : selector.replace(/^meta\[name="|"\]$/g, ''));
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  }, [title, description, keywords, canonicalPath, ogImage]);

  return null;
}

function AppContent({ theme, toggleTheme, setTheme }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const location = useLocation();

  // Scroll to hash element on load / route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // scroll to top if navigating to another route without hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} setTheme={setTheme} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Seo
                title="KALPIT FILMS | Film, Advertising & Production House in Nepal"
                description="Nepal-based production house covering film, documentary, advertising, music, events, and international production — from concept development to final delivery."
                keywords="production house Nepal, production company Nepal, film production Nepal, film production Kathmandu"
                canonicalPath="/"
              />
              <HeroSlider scrollToSection={scrollToSection} />
              <Offers />
              <FullService />
              <Gallery />
              <Contact />
            </>
          } />
          <Route path="/about" element={
            <>
              <Seo
                title="About Kalpit Films | Creative Production House in Nepal"
                description="Kalpit Films is a Kathmandu-based production house connecting development, casting, locations, production, and post into one creative ecosystem."
                keywords="production company Nepal, film production house Nepal, Kathmandu production company"
                canonicalPath="/about"
              />
              <About />
            </>
          } />
          <Route path="/our-work" element={
            <>
              <Seo
                title="Our Work | Film, Commercial & Event Production Portfolio — Kalpit Films"
                description="Browse Kalpit Films’s portfolio of films, commercials, music videos, documentaries, and live events produced in Nepal."
                keywords="production company Nepal portfolio, film production Kathmandu"
                canonicalPath="/our-work"
              />
              <Portfolio />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <Seo
                title="Our Work | Film, Commercial & Event Production Portfolio — Kalpit Films"
                description="Browse Kalpit Films’s portfolio of films, commercials, music videos, documentaries, and live events produced in Nepal."
                keywords="production company Nepal portfolio, film production Kathmandu"
                canonicalPath="/portfolio"
              />
              <Portfolio />
            </>
          } />
          <Route path="/filming-in-nepal" element={
            <>
              <Seo
                title="Filming in Nepal | Production Destination Guide — Kalpit Films"
                description="An honest guide to filming in Nepal — landscapes, culture, and the production realities international crews should plan for."
                keywords="filming in Nepal, film production Nepal, Nepal shooting locations"
                canonicalPath="/filming-in-nepal"
              />
              <section className="section">
                <div className="container">
                  <h1>A Country That Doesn't Repeat Itself.</h1>
                  <p>Filming in Nepal is a production company Nepal opportunity for filmmakers, agencies, and international crews who want distinct landscapes, cultural texture, and strong visual contrast without the polish of a more familiar production hub.</p>
                  <p>From Himalayan terrain and heritage streets to river valleys and modern urban scale, Nepal offers a wide range of shooting conditions that can support commercial, documentary, and narrative projects.</p>
                  <h2>What Nepal Offers</h2>
                  <ul>
                    <li>Varied geography in a compact country, from cities to mountain and rural settings.</li>
                    <li>Authentic visual character for films, documentaries, and branded work.</li>
                    <li>Strong value for international crews seeking unique locations and efficient production planning.</li>
                  </ul>
                  <h2>What to Plan For</h2>
                  <ul>
                    <li>Permits, access arrangements, and local logistics require early planning.</li>
                    <li>Seasonality, roads, and weather can affect location schedules and crew movement.</li>
                    <li>Working with a local production partner reduces friction and keeps the shoot realistic.</li>
                  </ul>
                  <p><a href="/offer/nepal-production-destination">International Production Services</a> · <a href="/offer/film-production">Locations</a></p>
                </div>
              </section>
            </>
          } />
          <Route path="/clients" element={
            <>
              <Seo
                title="Clients & Collaborators | Kalpit Films"
                description="Brands, artists, and organizations Kalpit Films has partnered with on production projects across Nepal."
                keywords="production company Nepal clients"
                canonicalPath="/clients"
              />
              <section className="section">
                <div className="container">
                  <h1>Who We&apos;ve Worked With.</h1>
                  <p>Kalpit Films works with brands, agencies, artists, cultural organizations, NGOs, and international production teams who need a reliable production company Nepal partner with both creative sensitivity and production discipline.</p>
                  <ul>
                    <li>Brand and advertising clients</li>
                    <li>Independent filmmakers and documentary teams</li>
                    <li>Artists, labels, and performance groups</li>
                    <li>NGOs and awareness-focused organizations</li>
                    <li>International crews seeking local production fixers and line production support</li>
                  </ul>
                  <p><a href="/our-work">Portfolio</a> · <a href="/contact">Contact</a></p>
                </div>
              </section>
            </>
          } />
          <Route path="/contact" element={
            <>
              <Seo
                title="Contact Us | Start a Production Project in Nepal — Kalpit Films"
                description="Get in touch with Kalpit Films to start a film, commercial, music video, event, or international production project in Nepal."
                keywords="production company Nepal contact"
                canonicalPath="/contact"
              />
              <Contact />
            </>
          } />
          {servicePages.map(({ path, seo, content }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Seo
                    title={seo.title}
                    description={seo.description}
                    keywords={seo.keywords}
                    canonicalPath={seo.canonicalPath}
                  />
                  <ServiceLandingPage {...content} />
                </>
              }
            />
          ))}
          <Route path="/offer/:slug" element={
            <>
              <Seo
                title="What We Do | Film, Advertising, Music & Event Production — Kalpit Films"
                description="Explore Kalpit Films’s full production capabilities in Nepal — development, casting, locations, film, advertising, music, events, and international production services."
                keywords="production company Nepal, film production services Nepal, production house Kathmandu"
                canonicalPath="/offer"
              />
              <OfferDetail />
            </>
          } />
        </Routes>
      </main>

      <footer className="footer-v2">
        <div className="container footer-container-v2">
          <div className="footer-left-v2">
            <span className="footer-logo-cursive-v2">KALPIT FILMS</span>
            <p className="footer-copy-v2">
              &copy; {new Date().getFullYear()} Kalpit Films. All Rights Reserved. Lazimpat Road, Kathmandu, Nepal.
            </p>
          </div>
          
          <div className="footer-nav-v2">
            <a href="/" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
            <a href="/#gallery" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/#gallery'; }}>Gallery</a>
            <a href="/about" className="footer-link-v2" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>About Us</a>
          </div>
        </div>
      </footer>

      {activeVideo && (
        <div className="video-modal-v2" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content-v2" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close-v2" onClick={() => setActiveVideo(null)}>
              &times;
            </button>
            <div className="video-iframe-wrapper-v2">
              <iframe 
                src={activeVideo.videoUrl} 
                title={activeVideo.title}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-modal-desc-box-v2">
              <h3 className="modal-video-title-v2">{activeVideo.title} <span className="modal-video-year-v2">({activeVideo.year})</span></h3>
              <p className="modal-video-role-v2">Directed by {activeVideo.director || 'Kalpit Films'} | {activeVideo.role}</p>
              <p className="modal-video-desc-v2">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <AppContent 
        theme={theme} 
        toggleTheme={toggleTheme} 
        setTheme={setTheme} 
      />
    </Router>
  );
}

export default App;
