"use client";

import React from 'react';
import { useContactModal } from '../context/ContactModalContext';

interface ContactButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ContactButton({ children, className = '', style = {} }: ContactButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        openModal();
      }} 
      className={className} 
      style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', ...style }}
    >
      {children}
    </button>
  );
}
