"use client";

import React from 'react';
import { useContactModal } from '../context/ContactModalContext';

export default function Navbar() {
  const { openModal } = useContactModal();

  return (
    <nav className="navbar fade-in">
      <a href="/" className="nav-logo">원피드마케팅</a>
      <div className="nav-right">
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="/portfolio" className="mobile-portfolio-link" style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff' }}>포트폴리오</a>
          <button onClick={openModal} className="contact-btn border-none cursor-pointer" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
            상담 신청
          </button>
        </div>
      </div>
    </nav>
  );
}
