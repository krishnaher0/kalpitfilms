import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OfferDetail.css';

function setSeoMeta({ title, description, url, image }) {
  document.title = title;

  const metaMap = {
    'meta[name="description"]': description,
    'meta[property="og:title"]': title,
    'meta[property="og:description"]': description,
    'meta[property="og:url"]': url,
    'meta[property="og:image"]': image,
    'meta[name="twitter:title"]': title,
    'meta[name="twitter:description"]': description,
    'meta[name="twitter:url"]': url,
    'meta[name="twitter:image"]': image,
  };

  Object.entries(metaMap).forEach(([selector, value]) => {
    let tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      const isProperty = selector.startsWith('meta[property=');
      tag.setAttribute(isProperty ? 'property' : 'name', selector.match(/(?:name|property)="([^"]+)"/)[1]);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', value);
  });

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
}

const localFilmProductionImage = '/offers/film-production.jpeg';

const offersData = [
  {
    id: 1,
    slug: 'film-production',
    title: 'Feature & Short Film Production in Nepal',
    tag: 'Feature Films and Short Films, Produced in Nepal.',
    desc: 'Feature and short film production in Nepal — line production, casting, locations, and full production management.',
    image: localFilmProductionImage,
    fullDescription: `We produce feature and short films, fiction and non-fiction, for Nepali filmmakers and international productions choosing Nepal as a shoot location.

We support feature films, short films, independent and experimental work, and international co-productions, with line production and production management covering the full shoot.

For Nepali filmmakers, this means structure and access to a wide technical network without ambition outrunning logistics. For international productions, it means a partner who understands Nepal's terrain, permissions, and crew realities well enough to make a shooting schedule survive contact with the country it's set in.`,
    capabilities: [
      'Feature, short, independent & experimental film production',
      'International co-production support',
      'Line production & production management',
      'On-set coordination',
      'Crew, cast, and location assembly'
    ],
    whyChooseUs: [
      'Experience across Nepal\'s varied terrain — urban, hill, mountain, rural',
      'A trusted bench of directors, DOPs, and technicians assembled per project',
      'Comfortable with both Nepali-led and internationally-led productions'
    ]
  },
  {
    id: 2,
    slug: 'nepal-production-destination',
    title: 'International Production Fixer in Nepal',
    tag: 'You Bring the Project. We Help You Make Nepal Work',
    desc: 'Full production fixing and local production management in Nepal for international film, documentary, and commercial crews.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    fullDescription: `Nepal is an extraordinary location for film and production, with diverse landscapes, rich culture, and competitive production costs. However, navigating permits, crew coordination, location logistics, and cultural protocols requires local expertise.

We handle all aspects of production fixing and local management for international productions, ensuring your shoot runs smoothly and captures the best of what Nepal has to offer.`,
    capabilities: [
      'Production fixing and permits',
      'Crew and cast coordination',
      'Location scouting and management',
      'Local logistics and transportation',
      'Government clearance and regulatory support',
      'Equipment sourcing and rental'
    ],
    whyChooseUs: [
      'Deep understanding of Nepal\'s terrain and logistics',
      'Established relationships with government agencies',
      'Experienced crew network across all regions',
      'Proven track record with international productions'
    ]
  },
  {
    id: 3,
    slug: 'advertisement-commercial',
    title: 'Advertisement & Commercial Production in Nepal',
    tag: 'Commercials That Look Like the Budget Was Bigger.',
    desc: 'Commercial and brand film production in Nepal for local and international brands and agencies.',
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80',
    fullDescription: `Our commercial work spans TV commercials, digital ads, brand and corporate films, campaign and social content, product films, and commercial photography. We handle concept refinement, casting, locations, shoot production, and multi-format delivery for broadcast, social, and vertical media.\n\nWe work directly with brands who need creative development as well as production, and alongside agencies who already have the concept and need a dependable team on the ground to execute it.`,
    capabilities: [
      'TV commercials and brand films',
      'Corporate videos and promotional content',
      'Campaign production and management',
      'Multi-platform advertising (TV, digital, social)',
      'Concept development to final delivery',
      'Post-production and color grading'
    ],
    whyChooseUs: [
      'Strategic approach to brand storytelling',
      'Experience with both Nepali and international brands',
      'Quick turnaround without compromising quality',
      'Full production and post-production capabilities in-house'
    ]
  },
  {
    id: 4,
    slug: 'development-preproduction',
    title: 'Story & Script Development in Nepal',
    tag: 'Development • Planning • Workshops',
    desc: 'Idea development, screenwriting, script consulting, and production planning for film, advertising, and documentary projects in Nepal.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80',
    fullDescription: `Pre-production is where great projects are built or where problems emerge later. We work with creators and producers at the earliest stage, shaping raw ideas into fully planned, producible projects.`,
    capabilities: [
      'Story development and consultancy',
      'Scriptwriting and screenplay',
      'Storyboarding and visual planning',
      'Budget and schedule development',
      'Location and casting consultancy',
      'Production design consultancy'
    ],
    whyChooseUs: [
      'Experience across multiple production types',
      'Realistic production planning based on Nepal\'s context',
      'Team of directors and technical leads',
      'Problem-solving focus on making ideas feasible'
    ]
  },
  {
    id: 5,
    slug: 'music-video-production',
    title: 'Music Video Production & Song Fixing in Nepal',
    tag: 'Music Videos • Song Production & Fixing',
    desc: 'Music video production, song production, and song fixing services for artists and labels in Nepal.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    fullDescription: `Our music work includes music video production, song production and song fixing, performance videos and live sessions, album visuals, music documentaries, and artist branding content. For artists arriving with a finished track, we handle concept, locations, casting, choreography coordination, and full shoot production. For artists earlier in the process, we can fix a song's production before it reaches a camera at all — and for artists with nothing finished yet, we can develop the concept alongside them from the start.`,
    capabilities: [
      'Music video concept, direction & production',
      'Song production & song fixing',
      'Performance videos & live sessions',
      'Album visuals & music documentary',
      'International artist production support'
    ],
    whyChooseUs: [
      'Comfortable joining a project at any stage, from a rough idea to a finished track',
      'One team across song and video — no handoff between production and the shoot',
      'Built for genres and visual styles that don\'t repeat themselves'
    ],
    ctaText: 'Bring Us Your Track →'
  },
  {
    id: 6,
    slug: 'events-theatre-live',
    title: 'Concert & Event Production in Nepal',
    tag: 'What We Produce • Working With Touring Artists',
    desc: 'Concert and live event production in Nepal for national and international artists — stage, logistics, and full execution.',
    image: '/services/events.jpg',
    fullDescription: `Our live production work covers concert organization for national and international artists, music festivals, cultural and brand events, stage production, and event content production. We manage artist coordination, technical and venue coordination, production logistics, and backstage management, building a run-of-show that accounts for what could go wrong, not just what should go right.`,
    capabilities: [
      'Concert & festival organization',
      'Cultural & brand event production',
      'Stage & technical production',
      'Artist coordination (national & international)',
      'Venue coordination & production logistics'
    ],
    whyChooseUs: [
      'Production discipline applied to live events, not just film',
      'Comfortable producing an event ourselves or executing someone else\'s concept',
      'A run-of-show built to account for what could go wrong, not just what should'
    ],
    ctaText: 'Plan Your Event With Us →'
  },
  {
    id: 7,
    slug: 'equipment-postproduction',
    title: 'Post-Production Services in Nepal',
    tag: 'What We Coordinate • In-House vs. Collaborators',
    desc: 'Editing, color grading, sound, and delivery coordination for film, advertising, and music video projects in Nepal.',
    image: '/services/equipment.jpg',
    fullDescription: `Post-production is where your footage becomes a finished product. We offer rental of professional cameras and equipment, along with comprehensive post-production services to deliver broadcast-quality results.`,
    capabilities: [
      'Professional camera and lens rental',
      'Audio equipment rental',
      'Lighting equipment rental',
      'Editorial and assembly',
      'Color grading and correction',
      'Sound design and mixing',
      'VFX and motion graphics',
      'Mastering for multiple formats'
    ],
    whyChooseUs: [
      'Latest professional equipment',
      'Expert colorists and sound engineers',
      'Multiple post-production suites',
      'Fast turnaround on deadlines',
      'Quality assurance at every stage'
    ]
  },
  {
    id: 8,
    slug: 'documentaries-production',
    title: 'Documentary Production in Nepal',
    tag: 'What We Produce • Supporting International Teams',
    desc: 'Documentary production and field production support in Nepal, for local filmmakers and international documentary teams.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    fullDescription: `Kalpit Films develops and produces its own documentary work, and partners with other filmmakers, broadcasters, and production companies who need a collaborator at a specific point in the process — research, story development, access and permissions, the shoot itself, post, or release. We work across feature and short documentaries, investigative and research-based projects, cultural and nature documentaries.`,
    capabilities: [
      'Long-form documentary production',
      'Subject research and access coordination',
      'Observational cinema',
      'Interview-driven narratives',
      'Cultural and nature documentary',
      'Archive research and integration',
      'Sound design for documentary',
      'Final color and mastering'
    ],
    whyChooseUs: [
      'Comfortable producing our own documentaries and collaborating on someone else\'s, at any stage from research to release',
      'One partner across the full chain — no handoff between research, production, and release',
      'Consent-based, ethical approach to documenting real communities',
      'Built for remote, low-infrastructure environments as much as city streets'
    ]
  },
  {
    id: 9,
    slug: 'creative-collaborations',
    title: 'Creative Network & Collaborations',
    tag: 'Our Collaborators • How We Bring Them In',
    desc: 'The photographers, designers, and performers Kalpit Films collaborates with across Nepal’s creative industry.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    fullDescription: `Great projects often require collaboration across multiple creative disciplines and production companies. We facilitate strategic partnerships and collaborations, connecting creators with the right partners and resources.`,
    capabilities: [
      'Partnership development',
      'Crew and talent network coordination',
      'Production company collaborations',
      'Resource sharing and equipment access',
      'Creative consultancy',
      'Project co-production'
    ],
    whyChooseUs: [
      'Established network across Nepal and internationally',
      'Reputation for smooth collaborations',
      'Experience facilitating complex multi-party projects',
      'Knowledge of talent and resources across disciplines'
    ]
  },
  {
    id: 10,
    slug: 'workshops',
    title: 'Filmmaking & Acting Workshops in Nepal',
    tag: 'Workshop Programs • Project-Embedded Workshops',
    desc: 'Acting, filmmaking, screenwriting, and directing workshops in Nepal, run by a working production house.',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80',
    fullDescription: `We believe in sharing knowledge and developing the next generation of filmmakers and production professionals. Our workshops cover practical skills, creative vision, and industry practices.`,
    capabilities: [
      'Filmmaking fundamentals',
      'Cinematography and camera techniques',
      'Lighting and production design',
      'Editing and post-production',
      'Directing for commercial and narrative',
      'Production management',
      'Custom corporate training'
    ],
    whyChooseUs: [
      'Instructors with real industry experience',
      'Hands-on, practical workshops',
      'Small groups for personalized learning',
      'Ongoing mentorship available',
      'Affordable training for aspiring filmmakers'
    ]
  },
  {
    id: 11,
    slug: 'casting-talent',
    title: 'Film & TV Casting in Nepal',
    tag: 'Who We Cast For • How Casting Works',
    desc: 'Casting and talent scouting for film, documentary, commercial, and music video productions in Nepal.',
    image: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?w=800&q=80',
    fullDescription: `We support casting for feature and short films, international productions, documentaries, commercials, music videos, digital content, and theatre — covering professional actors, background artists, models, musicians, dancers, and community talent, with casting strategy, audition management, and full casting coordination. Casting for young performers is handled only where legally appropriate and with full guardian involvement. We do not claim to represent specific actors; casting is coordinated project by project through open casting processes.`,
    capabilities: [
      'Casting strategy & casting calls',
      'Audition management & coordination',
      'Professional actors, background artists & models',
      'Musicians, dancers & community talent',
      'National & international casting support'
    ],
    whyChooseUs: [
      'Casting run by people who also produce, so choices hold up on set, not just on paper',
      'Comfortable finding both trained talent and undiscovered, authentic faces',
      'Casting processes built around each project\'s genre and scale, not a fixed template'
    ],
    ctaText: "Tell Us Who You're Looking For →"
  },
  {
    id: 12,
    slug: 'theatre-performance',
    title: 'Theatre & Street Theatre Production in Nepal',
    tag: 'Stage Theatre • Street Theatre',
    desc: 'Theatre and street theatre production in Nepal for cultural, artistic, and community work.',
    image: 'https://images.unsplash.com/photo-1507676184212-d0330a151f84?w=800&q=80',
    fullDescription: `Our performance work spans theatre play production, theatre and acting workshops, street theatre, experimental and community theatre, and performance art, with full production management from script or adaptation through to staging. Street theatre often overlaps with our awareness and social-impact work, but stands as a performance discipline in its own right.`,
    capabilities: [
      'Theatre play direction & production',
      'Street theatre & performance art',
      'Community & experimental theatre',
      'Theatre production management',
      'Acting & theatre workshops'
    ],
    whyChooseUs: [
      'Grounded in live performance, not only screen production',
      'Comfortable in formal venues and unscripted public spaces alike',
      'Production management carried from script through to the final performance'
    ],
    ctaText: "Bring a Performance to Life →"
  },
  {
    id: 13,
    slug: 'social-impact-awareness',
    title: 'Awareness Campaign Production in Nepal',
    tag: 'Campaign Production • Theatre-Based Awareness',
    desc: 'Production for awareness campaigns and social impact programs in Nepal, for NGOs and mission-driven organizations.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    fullDescription: `This work includes awareness and social awareness campaigns, street plays and theatre-based awareness programs, educational and community campaigns, social impact films, and documentary-style campaign content for NGOs and INGOs. We are a production partner for this work, not an NGO ourselves, and build every campaign starting from the intended audience and outcome rather than the format.`,
    capabilities: [
      'Awareness campaign concept & production',
      'Social impact & educational film content',
      'Street plays & theatre-based awareness programs',
      'NGO / INGO content production',
      'Multi-region, multi-language production planning'
    ],
    whyChooseUs: [
      'Campaigns built from the audience and outcome first, not the format',
      'Able to combine screen content with live or street performance for deeper reach',
      'A production partner, not an NGO — creative and logistical execution is the job'
    ],
    ctaText: "Discuss Your Campaign →"
  },
  {
    id: 14,
    slug: 'equipment-rental',
    title: 'Cinema Camera & Lighting Equipment Rental in Nepal',
    tag: 'What We Rent • Equipment With Crew',
    desc: 'Rent cinema camera, lighting, and grip equipment in Nepal, with optional experienced operators.',
    image: '/services/equipment.jpg',
    fullDescription: `Our equipment inventory covers cinema cameras, DSLR and mirrorless cameras, cinema lenses, lighting and grip equipment, sound equipment, and production accessories, with drone/aerial support where legally and operationally available [TO BE CONFIRMED]. We work with independent filmmakers, other production companies, and visiting international crews who prefer sourcing gear locally over shipping it in.`,
    capabilities: [
      'Cinema camera & lens rental',
      'Lighting & grip equipment',
      'Sound equipment rental',
      'Aerial/drone support [TO BE CONFIRMED]',
      'Optional operator/technician staffing'
    ],
    whyChooseUs: [
      'Equipment available with or without an operator, depending on what you need',
      'A practical alternative to shipping gear internationally',
      'Gear sourced and maintained by people who also produce with it'
    ],
    ctaText: "Check Equipment Availability →"
  }
];

export default function OfferDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const offer = offersData.find((item) => item.slug === slug);

  React.useEffect(() => {
    if (!offer) return;

    const url = `https://kalpitfilms.com/offer/${offer.slug}`;
    setSeoMeta({
      title: `${offer.title} | Kalpit Films Nepal`,
      description: offer.desc,
      url,
      image: offer.image.startsWith('http') ? offer.image : `https://kalpitfilms.com${offer.image}`,
    });
  }, [offer]);

  if (!offer) {
    return (
      <section className="offer-detail-section">
        <div className="container">
          <div className="offer-not-found">
            <h2>Offer not found</h2>
            <button onClick={() => navigate('/#offers')} className="back-btn">
              Back to Offers
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="offer-detail-section">
      <div className="container">
        <button
          onClick={() => navigate('/#offers')}
          className="back-btn-detail"
        >
          ← Back to Offers
        </button>

        <div className="offer-detail-header">
          <img
            src={offer.image}
            alt={offer.title}
            className="offer-detail-image"
          />
          <div className="offer-detail-info">
            <span className="offer-detail-tag">{offer.tag}</span>
            <h1 className="offer-detail-title">{offer.title}</h1>
            <p className="offer-detail-desc">{offer.desc}</p>
          </div>
        </div>

        <div className="offer-detail-content">
          <div className="detail-section">
            <div className="detail-section-header">
              <div className="detail-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/>
                  <path d="M5 18v2"/>
                  <path d="M19 18v2"/>
                  <path d="m9 11 6 7"/>
                  <path d="m15 11-6 7"/>
                </svg>
              </div>
              <h2>About This Service</h2>
            </div>
            <div className="detail-section-content">
              <p>{offer.fullDescription}</p>
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-section-header">
              <div className="detail-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h2>Key Capabilities</h2>
            </div>
            <div className="detail-section-content">
              <ul className="capabilities-list">
                {offer.capabilities.map((capability, index) => (
                  <li key={index}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-section-header">
              <div className="detail-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                </svg>
              </div>
              <h2>Why Choose Us</h2>
            </div>
            <div className="detail-section-content">
              <ul className="why-choose-list">
                {offer.whyChooseUs.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail-section cta-section">
            <h2>Ready to Work Together?</h2>
            <p>Get in touch with us to discuss your project and how we can help bring your vision to life.</p>
            <button
              onClick={() => navigate('/#contact')}
              className="cta-btn"
            >
              {offer.ctaText || "Let's Collaborate"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
