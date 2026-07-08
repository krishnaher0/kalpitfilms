import React from 'react';
import './Poems.css';

const poemsData = [
  {
    id: 1,
    title: 'कृपाण',
    lines: [
      'आखिर पूरै हस्तिनापुर अपनाउँदा के पायौ ?',
      'छाती चौडा गरेर दुई छाकसँगको सिँघौरी ?',
      'अर्धचेत भई कमरामा एक्लै',
      'मुढो ढलेझैँ, बालकचेतको तमासा',
      'अवरमा परेको मन सुस्ताउन',
      'मात्र एक रातको निधौरी ?'
    ],
    author: 'अमित पोखरेल',
    link: 'https://baahrakhari.com/detail/455955?fbclid=IwY2xjawS68XlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeGOi3B78R9ZrfJTZwe2L-CXh0VxqdoNetx9-UvOW0yho4iIcT8C-PyzjN7FA_aem_4D_QJTiFRNwfRLjiRHCYqA'
  },
  {
    id: 2,
    title: 'धुम्न बाछिटाहरू',
    lines: [
      'कहिले तृष्णासँग कहिले वितृष्णासँग',
      'मृगतृष्णाको पदमार्गमा बिलौनाको आहाल खेली',
      'तर्कवितर्क गर्दागर्दै कति बेला छोप्न पुगेछन् मलाई',
      'अतिरञ्जनाका धुम्न बाछिटाहरू पत्तै भएन ...'
    ],
    author: 'अमित पोखरेल',
    link: 'https://baahrakhari.com/detail/492402?fbclid=IwY2xjawS68iVleHRuA2FlbQIxMQBicmlkETJwQXRFb0s2VEZrZEhGZ3Bkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhBK60a6coN4m1UiJ-3hXobiUFno2jmdZ2NKLb6U62st_hMu8amz28OsZE_P_aem_A1hrb3eu3zjmGcHBWTGjQA'
  }
];

export default function Poems() {
  return (
    <section id="poems" className="section poems-v2">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Poetic Cinema</span>
          <h2 className="section-title">Poem Collection</h2>
        </div>

        <div className="poems-grid-v2">
          {poemsData.map((poem) => (
            <div key={poem.id} className="poem-card-v2 animate-fade-in">
              <div className="poem-card-top-v2">
                <span className="poem-laurel-v2">&#10086;</span>
                <h3 className="poem-title-v2">{poem.title}</h3>
              </div>
              <div className="poem-body-v2">
                {poem.lines.map((line, idx) => (
                  <p key={idx} className="poem-line-v2">{line}</p>
                ))}
              </div>
              <span className="poem-author-v2">लेखक: {poem.author}</span>
              <a 
                href={poem.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="poem-link-v2"
              >
                Read Full Poem on Baahrakhari &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
