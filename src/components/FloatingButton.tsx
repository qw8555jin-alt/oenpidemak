"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './FloatingButton.css';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (pathname?.startsWith('/proposal')) {
    return null;
  }

  return (
    <div className={`floating-container ${isVisible ? 'visible' : ''}`}>
      <button className="floating-top-btn" onClick={scrollToTop} aria-label="맨 위로 가기">
        <span className="arrow">▲</span>
        <span className="text">TOP</span>
      </button>
      
      <a 
        href="http://pf.kakao.com/_kxdmxfX/chat" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-kakao-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C7.02944 4 3 7.21071 3 11.1714C3 13.7258 4.70837 16.0357 7.24072 17.3325L6.1558 21.2825C6.07542 21.5753 6.3986 21.8021 6.64333 21.6247L11.3931 18.1724C11.5925 18.1882 11.7951 18.1964 12 18.1964C16.9706 18.1964 21 14.9857 21 11.025C21 7.06429 16.9706 4 12 4Z" />
        </svg>
        <span className="text">문의하기</span>
      </a>
    </div>
  );
}
