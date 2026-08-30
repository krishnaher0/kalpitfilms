import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';

const offersData = [

  {
    id: 1,
    slug: 'film-production',
    title: 'Film Production',
    tag: 'Feature Films and Short Films, Produced in Nepal.',
    desc: 'Development to delivery — narrative production built for Nepal\'s landscapes, stories, and production realities. We support feature films, short films, independent and experimental work, and international co-productions with line production and production management.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    slug: 'nepal-production-destination',
    title: 'Nepal as a Production Destination',
    tag: 'You Bring the Project. We Help You Make Nepal Work',
    desc: 'Full production fixing and local production management for international film, documentary, commercial, and music productions in Nepal.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    slug: 'advertisement-commercial',
    title: 'Advertisement and TV Commercial',
    tag: 'Commercials That Look Like the Budget Was Bigger.',
    desc: 'We produce commercials, brand films, corporate and promotional content, and campaign films as a brand\'s production partner or an agency\'s execution arm.',
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    slug: 'development-preproduction',
    title: 'Development and Pre-Production',
    tag: 'Before the Camera, the Idea Has to Earn Its Shape',
    desc: 'We work with projects at their earliest and most fragile stage — before a schedule exists, sometimes before a script does — helping shape an idea into something that can actually be produced.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    slug: 'music-video-production',
    title: 'Music Video & Song Production',
    tag: 'From the Studio to the Screen.',
    desc: 'We work across both sides of a release — getting a song right, and getting the video that carries it — for artists, labels, and managers.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    slug: 'events-theatre-live',
    title: 'Events & Concerts',
    tag: 'Live Events, Produced Like a Production.',
    desc: 'We organize and produce concerts, festivals, and brand and cultural events — applying full production discipline to a format with no second take..',
    image: 'https://images.unsplash.com/photo-1540039155732-d6741b687c9a?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    slug: 'equipment-postproduction',
    title: 'Equipment',
    tag: 'The Right Gear. Ready When You Are.',
    desc: 'We rent professional cinema camera, lenses, lighting, grip, and sound equipment, with the option of experienced operators alongside the gear.',
    image: 'https://images.unsplash.com/photo-1527011045974-4d8cc384358a?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    slug: 'equipment-postproduction',
    title: 'Post Production',
    tag: 'Where we Re-Write the Story in Color, Sound, and Rhythm.',
    desc: 'We coordinate post-production across editing, color grading, sound, and final delivery, clearly distinguishing what we handle directly from what we manage through external specialists.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop'
  },
  {
    id: 9,
    slug: 'documentaries-production',
    title: 'Documentaries',
    tag: 'Real Stories. Handled with Respect and Rigor.',
    desc: 'Compelling real-world human stories, cultural exploration, and nature expeditions capturing reality.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop'
  },
  {
    id: 10,
    slug: 'creative-collaborations',
    title: 'Creative Networks & Collaborations',
    tag: 'The Wider Circle Behind Every Production',
    desc: 'Beyond our core production capabilities, we work with a wider creative network across photography, design, and performance — presented here honestly as collaborations, not in-house departments.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
  },
  {
    id: 11,
    slug: 'workshops',
    title: 'Workshops',
    tag: 'Building Skills the Same Way We Build Productions.',
    desc: 'We run workshops as both educational and practical creative-development programs — for individuals building skills and for teams preparing a specific project.',
    image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600&h=400&fit=crop'
  },
  {
    id: 12,
    slug: 'creative-collaborations',
    title: 'Casting & Talent',
    tag: 'Faces That Belong to the Story.',
    desc: 'We provide casting for productions of every kind — from professional actors to authentic, non-professional faces found directly in the communities a story is set in.',
    image: 'https://images.unsplash.com/photo-1517630800677-932d836ab680?w=600&h=400&fit=crop'
  },
  {
    id: 13,
    slug: 'creative-collaborations',
    title: 'Location Scout & Recce',
    tag: 'A Country That Doesn\'t Repeat Its Scenery.',
    desc: 'We scout and manage locations across Nepal — from Kathmandu Valley\'s architecture to the high Himalaya of Everest and Annapurna, the sacred plains of Lumbini, and the mountain, hill, and village settings in between — for productions that need more than a postcard view.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop'
  },
  {
    id: 14,
    slug: 'events-theatre-live',
    title: 'Theatre & Performance',
    tag: 'A Stage for Every Story.',
    desc: 'We produce theatre on stage and in public space — direction, staging, and performer coordination for formal productions, and street theatre built to reach audiences wherever they already are.',
    image: 'https://images.unsplash.com/photo-1507676184212-d0330a151f84?w=600&h=400&fit=crop'
  },
  {
    id: 15,
    slug: 'creative-collaborations',
    title: 'Social Impact & Awareness',
    tag: 'Stories That Are Meant to Change Something',
    desc: 'We produce content and live programming for organizations working to change minds, behavior, or policy — built for genuine reach, not just polish..',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop'
  },
];

export default function Offers() {
  const navigate = useNavigate();

  const handleOfferClick = (slug) => {
    navigate(`/offer/${slug}`);
  };

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
            <div
              key={item.id}
              className="offer-card-v2"
              onClick={() => handleOfferClick(item.slug)}
              style={{ cursor: 'pointer' }}
            >
              <div className="offer-image-wrapper-v2">
                <img src={item.image} alt={`${item.title} - Kalpit Films Production Service`} loading="lazy" decoding="async" className="offer-img-v2" />
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
