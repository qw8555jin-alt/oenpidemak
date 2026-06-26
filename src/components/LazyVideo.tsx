"use client";

import React, { useRef, useEffect, useState } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function LazyVideo({ src, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '200px', // Start playing a bit before it enters the viewport fully
        threshold: 0.1
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      // Play when in view
      videoRef.current?.play().catch(e => console.log('Autoplay prevented:', e));
    } else {
      // Pause when out of view
      videoRef.current?.pause();
    }
  }, [isIntersecting]);

  return (
    <video
      ref={videoRef}
      src={src}
      preload="metadata"
      muted
      loop
      playsInline
      {...props}
    />
  );
}
