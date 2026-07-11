import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
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
          message: formState.message
        })
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong: " + (data.error || "Please check that the secure email server is running."));
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
          <h2 className="section-title">Contact Studio</h2>
        </div>

        <div className="contact-grid-v2">
          {/* Left Column: Details */}
          <div className="contact-info-v2">
            <h3 className="contact-heading-v2">Get in Touch</h3>
            <p className="contact-desc-v2">
              For script submissions, co-productions, fixer bookings, or general information, please use our contact details or submit an inquiry form.
            </p>

            <div className="details-list-v2">
              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Studio Address</h4>
                <p className="details-val-v2">Lazimpat Road, Kathmandu 44600, Nepal</p>
              </div>

              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Production Desk</h4>
                <p className="details-val-v2">kalpitfilms@gmail.com</p>
              </div>

              <div className="details-item-v2">
                <h4 className="details-lbl-v2">Call Studio</h4>
                <p className="details-val-v2">+977 9846967698</p>
              </div>
            </div>

            <div className="socials-list-v2">
              <a href="https://facebook.com/kalpitfilms" target="_blank" rel="noopener noreferrer" className="social-txt-link-v2">Facebook</a>
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
                  <label htmlFor="name" className="form-label-v2">Full Name</label>
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
                  <label htmlFor="email" className="form-label-v2">Email Address</label>
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
