"use client";

import React from 'react';

interface SlideNavProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export default function SlideNav({ totalSlides, currentSlide, onDotClick }: SlideNavProps) {
  return (
    <div className="slide-nav">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          className={`slide-nav-dot ${currentSlide === i ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
