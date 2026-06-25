"use client";

import React from 'react';
import { useContactModal } from '../context/ContactModalContext';

export default function Navbar() {
  const { openModal } = useContactModal();

  return (
    <nav className="navbar fade-in">
      <div className="nav-logo">원피드마케팅</div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </div>
        <button onClick={openModal} className="contact-btn border-none cursor-pointer" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
          상담 신청
        </button>
      </div>
    </nav>
  );
}
