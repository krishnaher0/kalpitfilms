import React, { useState, useEffect } from 'react';
import './CountdownLoader.css';

export default function CountdownLoader({ onComplete }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 1) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="countdown-loader-v2">
      {/* Vintage film noise & scratches animation overlays */}
      <div className="film-scratch-overlay-v2"></div>
      <div className="film-grain-overlay-v2"></div>
      
      {/* Horizontal and vertical alignment lines */}
      <div className="film-crosshair-h-v2"></div>
      <div className="film-crosshair-v-v2"></div>
      
      {/* Classic concentric target circles */}
      <div className="film-target-outer-v2">
        <div className="film-target-inner-v2">
          {/* Big countdown numbers */}
          <div className="film-count-num-v2">
            {count > 0 ? count : 'START'}
          </div>
        </div>
      </div>

      {/* Skipping option - guarantees active user interaction context for autoplay audio */}
      <button className="skip-intro-btn-v2" onClick={onComplete}>
        Skip Intro &rarr;
      </button>
    </div>
  );
}
