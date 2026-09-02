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
import ServiceLandingPage from './components/ServiceLandingPage';
import './App.css';

const servicePages = [
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
                title="Kalpit Films | Film Production Company in Kathmandu, Nepal"
                description="Kalpit Films is a cinematic production house in Kathmandu, Nepal creating award-style films, documentaries, commercials, music videos, and live event productions."
                keywords="film production Kathmandu, documentary production Nepal, commercial video company Kathmandu, cinematography Nepal, wedding films Nepal, event production Kathmandu"
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
                title="About Kalpit Films | Documentary & Film Production Nepal"
                description="Learn about Kalpit Films, a Kathmandu-based film production studio crafting documentaries, films, commercials, and cultural storytelling projects across Nepal."
                keywords="about Kalpit Films, film production company Nepal, documentary filmmakers Kathmandu, cinematic studio Nepal"
                canonicalPath="/about"
              />
              <About />
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
                title="Production Services | Kalpit Films"
                description="Explore Kalpit Films production services including film production, documentaries, commercials, event coverage, casting, and post-production in Nepal."
                keywords="film production services Nepal, documentary production Kathmandu, commercial videos Nepal, event production company Kathmandu"
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
