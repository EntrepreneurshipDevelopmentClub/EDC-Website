'use client';
import React from 'react';
import images from './images.json';
import './Gallery.scss'; // You can copy your existing styles here

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <p className="heading">Gallery</p>
      <p className="gallery-description">
        Our gallery is a visual journey through our events, achievements, and milestones. It captures the essence of our team's dedication and the impact of our work. Each image tells a unique story of perseverance, teamwork, and success. We invite you to explore and get a glimpse into our journey.
      </p>
      <div className="gallery-image">
        {images.map((image, idx) => (
          <div className="img-box" key={idx}>
            <img src={image.src} alt={`gallery-img-${idx}`} />
            <div className="transparent-box">
              <div className="caption"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
