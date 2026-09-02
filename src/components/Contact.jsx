import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'hiring',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const endpoint = isLocal ? "http://localhost:5005/api/send-email" : "/api/send-email";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          category: formState.category,
          projectType: formState.projectType,
          description: formState.description,
          timeline: formState.timeline,
          budget: formState.budget,
          message: formState.message
        })
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', phone: '', category: 'hiring', projectType: '', description: '', timeline: '', budget: '', message: '' });
      } else {
        const errorText = typeof data.error === 'object' ? JSON.stringify(data.error) : data.error;
        alert("Something went wrong: " + (errorText || "Please check that the secure email server is running."));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please ensure the email proxy server is active.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section contact-v2">
      <div className="container">
        
        {/* Title */}
        <div className="section-title-wrapper">
          <span className="section-subtitle">Reach Us</span>
          <h1 className="section-title">Let&apos;s Talk About What You&apos;re Making.</h1>
        </div>

        <div className="contact-grid-v2">
          {/* Left Column: Details */}
          <div className="contact-info-v2">
            <h3 className="contact-heading-v2">Start a Project</h3>
            <div className="contact-desc-block-v2">
              <p className="contact-desc-v2">
                Whether you need a production partner or want to collaborate on something we're building, this is where it starts. Tell us what you're making, your timeline, and where you're based, and we'll follow up directly. International teams: share your shoot dates early — permits and locations in Nepal need lead time. Looking to collaborate, invest, or join a Kalpit Films production instead? Let us know that too — we'll route it to the right person.
              </p>
            </div>

            <div className="details-list-v2">
              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Studio Address</h4>
                <p className="details-val-v2">Lazimpat Road, Kathmandu 44600, Nepal</p>
              </div>

              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Production Desk</h4>
                <p className="details-val-v2">contact@kalpitfilms.com</p>
              </div>

              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Call Studio</h4>
                <p className="details-val-v2">+977 9846967698</p>
              </div>
            </div>

            <div className="details-item-v2">
              <h4 className="details-lbl-v2">Explore More</h4>
              <p className="details-val-v2">
                <a href="/offer/film-production">What We Do</a> · <a href="/offer/nepal-production-destination">International Production Services</a>
              </p>
            </div>

            <div className="socials-list-v2">
              <a href="https://www.facebook.com/profile.php?id=61568543475592" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">Facebook</a>
              <a href="https://instagram.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">Instagram</a>
              <a href="https://www.youtube.com/channel/UC97qR3wKYv0RH01p6dELTuQ" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">YouTube</a>
              <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">Vimeo</a>
              <a href="https://imdb.com" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">IMDb</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-v2">
            {submitted ? (
              <div className="success-box-v2">
                <div className="success-laurel-v2">&#10086;</div>
                <h3 className="success-title-v2">Inquiry Received</h3>
                <p className="success-desc-v2">
                  Thank you for contacting Kalpit Films. Our production managers will review your submission and respond shortly.
                </p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-el-v2">
                <div className="form-group-v2">
                  <label htmlFor="name" className="form-label-v2">Name / Company</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input-v2" 
                    required 
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group-v2">
                  <label htmlFor="email" className="form-label-v2">Email </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input-v2" 
                    required 
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                  />
                </div>
                <div className="form-group-v2">
                  <label htmlFor="phone" className="form-label-v2">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-input-v2" 
                    required 
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>

                <div className="form-group-v2">
                  <label className="form-label-v2">What brings you here?</label>
                  <div className="radio-group-v2">
                    <div className="radio-item-v2">
                      <input 
                        type="radio" 
                        id="hiring" 
                        name="category" 
                        value="hiring" 
                        checked={formState.category === 'hiring'}
                        onChange={handleChange}
                        className="radio-input-v2"
                      />
                      <label htmlFor="hiring" className="radio-label-v2">Hiring Kalpit Films</label>
                    </div>
                    <div className="radio-item-v2">
                      <input 
                        type="radio" 
                        id="collaborating" 
                        name="category" 
                        value="collaborating" 
                        checked={formState.category === 'collaborating'}
                        onChange={handleChange}
                        className="radio-input-v2"
                      />
                      <label htmlFor="collaborating" className="radio-label-v2">Collaborating on a Kalpit Films project</label>
                    </div>
                    <div className="radio-item-v2">
                      <input 
                        type="radio" 
                        id="investment" 
                        name="category" 
                        value="investment" 
                        checked={formState.category === 'investment'}
                        onChange={handleChange}
                        className="radio-input-v2"
                      />
                      <label htmlFor="investment" className="radio-label-v2">Investment or Partnership</label>
                    </div>
                    <div className="radio-item-v2">
                      <input 
                        type="radio" 
                        id="joining" 
                        name="category" 
                        value="joining" 
                        checked={formState.category === 'joining'}
                        onChange={handleChange}
                        className="radio-input-v2"
                      />
                      <label htmlFor="joining" className="radio-label-v2">Joining as Cast or Crew</label>
                    </div>
                  </div>
                </div>

                {formState.category === 'hiring' && (
                  <>
                    <div className="form-group-v2">
                      <label htmlFor="projectType" className="form-label-v2">Project Type</label>
                      <input 
                        type="text" 
                        id="projectType" 
                        name="projectType" 
                        className="form-input-v2" 
                        value={formState.projectType}
                        onChange={handleChange}
                        placeholder="e.g., Film, Commercial, Documentary, Music Video, etc."
                      />
                    </div>

                    <div className="form-group-v2">
                      <label htmlFor="description" className="form-label-v2">Description</label>
                      <textarea 
                        id="description" 
                        name="description" 
                        rows="3" 
                        className="form-textarea-v2" 
                        value={formState.description}
                        onChange={handleChange}
                        placeholder="Brief description of your project..."
                      ></textarea>
                    </div>

                    <div className="form-group-v2">
                      <label htmlFor="timeline" className="form-label-v2">Timeline</label>
                      <input 
                        type="text" 
                        id="timeline" 
                        name="timeline" 
                        className="form-input-v2" 
                        value={formState.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 3 months, Q1 2025, Flexible, etc."
                      />
                    </div>

                    <div className="form-group-v2">
                      <label htmlFor="budget" className="form-label-v2">Budget (optional)</label>
                      <input 
                        type="text" 
                        id="budget" 
                        name="budget" 
                        className="form-input-v2" 
                        value={formState.budget}
                        onChange={handleChange}
                        placeholder="e.g., 500k - 1M NPR, To be discussed, etc."
                      />
                    </div>
                  </>
                )}

                <div className="form-group-v2">
                  <label htmlFor="message" className="form-label-v2">Message / Narrative Scope</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="form-textarea-v2" 
                    required 
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your film production requirements, script synopsis, or fixer needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary submit-btn-v2" disabled={sending}>
                  {sending ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
