"use client";

import React from 'react';
import { useContactModal } from '../context/ContactModalContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { openModal } = useContactModal();
  const pathname = usePathname();

  if (pathname?.startsWith('/proposal')) {
    return null;
  }

  return (
    <nav className="navbar fade-in">
      <a href="/" className="nav-logo">원피드마케팅</a>
      <div className="nav-right">
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
        </div>
        <div className="mobile-nav-actions">
          <a href="/proposal" className="mobile-nav-link">회사 소개서</a>
          <a href="/portfolio" className="mobile-nav-link">포트폴리오</a>
          <button onClick={openModal} className="contact-btn border-none cursor-pointer" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            상담 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
