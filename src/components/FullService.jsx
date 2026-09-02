import React from 'react';

const whatWeDo = [
  'Commercials & Brand Films — TV spots, digital ad campaigns, product films, and social-first branded content built around a client\'s campaign objectives.',
  'Documentary & Long-Form — Character-driven, journalistic, and observational documentary production, from development through final cut.',
  'Corporate & Institutional Films — Brand stories, internal communications, NGO and development-sector films, and executive content.',
  'Narrative & Episodic Work — Support for scripted shorts, series, and feature productions, including full local crew-up.',
  'Production Services for Visiting Crews — Fixer services, line production, permits, location management, and logistics for international teams who bring their own director or DP.'
];

const howWeWork = [
  {
    title: 'Development & Planning',
    text: 'We start by understanding the brief — creative goals, tone, timeline, and budget — and build a production plan around it, including locations, scheduling, casting, and permitting.'
  },
  {
    title: 'Casting & Talent',
    text: 'Access to professional actors and models, real-people casting for authenticity-driven work, and coordination with talent agencies for larger productions.'
  },
  {
    title: 'Production',
    text: 'On-the-ground execution led by experienced line producers and department heads, using professional-grade camera, lighting, and sound equipment.'
  },
  {
    title: 'Post-Production',
    text: 'In-house and partner-supported editing, color grading, sound design, and motion graphics, with deliverables built for broadcast, digital, and social use.'
  },
  {
    title: 'Delivery',
    text: 'Final assets delivered in the format your campaign or distribution plan requires, with archive and raw footage handling agreed upfront.'
  }
];

const strengths = [
  'A single point of contact managing your entire production, end to end',
  'Deep, current knowledge of Nepal\'s locations, permitting landscape, and talent pool',
  'Crew and equipment capable of matching international production standards',
  'Transparent budgeting with no surprise costs mid-shoot',
  'Experience working directly with international agencies and brand teams'
];

export default function FullService() {
  return (
    <section id="full-service" className="full-service-section">
      <div className="container full-service-container">
        <div className="offers-header-v2 full-service-header">
          <span className="offers-subtitle-v2">Production Services</span>
          <h2 className="offers-title-main-v2 full-service-title">Films, Commercials, Documentary, Short Films &amp; Music Videos Production in Nepal</h2>
          <div className="offers-header-line-v2"></div>
        </div>

        <div className="full-service-intro">
          <h3>Your Production Partner for Global Stories, Shot in Nepal</h3>
          <p>
            International brands and agencies are increasingly looking beyond familiar filming hubs for something more distinctive — and Nepal delivers it. Kalpit Films is a full-service production house built to give global clients a single, dependable partner for every kind of visual project, from commercials and branded content to documentaries, corporate films, and long-form narrative work.
          </p>
          <p>
            Whatever the genre, our job is the same: turn your creative vision into a finished production that meets international standards, without the friction of coordinating unfamiliar local logistics on your own.
          </p>
        </div>

        <div className="full-service-pillars">
          <div className="full-service-panel">
            <h4>Why International Teams Choose Nepal</h4>
            <ul>
              <li>Extreme visual range in a small footprint, from Himalayan backdrops to riverside villages and modern cityscapes.</li>
              <li>Genuine, uncommodified locations that read as fresh rather than familiar.</li>
              <li>Real cost efficiency with lower overhead and currency advantages.</li>
              <li>Crew culture built for difficult terrain, shifting weather, and tight timelines.</li>
            </ul>
          </div>

          <div className="full-service-panel accent-panel">
            <h4>Built for Every Scale</h4>
            <ul>
              <li>Fast-turnaround social and digital shoots</li>
              <li>Multi-day, multi-location commercial campaigns</li>
              <li>International co-productions requiring a local production partner</li>
              <li>Documentary projects needing extended, embedded access</li>
            </ul>
          </div>
        </div>

        <div className="full-service-section-block">
          <h3>What We Do</h3>
          <div className="full-service-list-wrap">
            {whatWeDo.map((item) => (
              <div key={item} className="full-service-list-item">
                <span className="full-service-bullet">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="full-service-section-block process-block">
          <h3>How We Work</h3>
          <div className="full-service-process-grid">
            {howWeWork.map((step, index) => (
              <div key={step.title} className="full-service-process-card">
                <span className="full-service-step">0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="full-service-section-block strengths-block">
          <h3>Why Kalpit Films</h3>
          <ul className="full-service-strengths">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="full-service-cta">
          <h3>Let&apos;s Talk About Your Project</h3>
          <p>
            If you&apos;re an agency or brand exploring Nepal for your next shoot, Kalpit Films can scope your production from first call to final delivery — reach out to start the conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
