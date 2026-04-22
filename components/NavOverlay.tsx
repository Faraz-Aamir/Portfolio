'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'HOME', target: '#home' },
  { label: 'PROJECTS', target: '#projects' },
  { label: 'SKILLS', target: '#skills' },
  { label: 'ABOUT', target: '#about' },
];

const socialItems = [
  { label: 'GITHUB ↗', href: 'https://github.com/' },
  { label: 'LINKEDIN ↗', href: 'https://linkedin.com/' },
  { label: 'INSTAGRAM ↗', href: 'https://instagram.com/' },
  { label: 'TWITTER/X ↗', href: 'https://x.com/' },
];

export default function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const animateOpen = useCallback(() => {
    if (!overlayRef.current) return;
    const links = overlayRef.current.querySelectorAll('.nav-link');
    const socials = overlayRef.current.querySelectorAll('.nav-social');

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(overlayRef.current, {
      clipPath: 'inset(0 0 0% 0)',
      duration: 0.7,
      ease: 'power4.inOut',
    });

    tl.to(
      links,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      },
      '-=0.3'
    );

    tl.to(
      socials,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power3.out',
      },
      '-=0.3'
    );
  }, []);

  const animateClose = useCallback(() => {
    if (!overlayRef.current) return;
    const links = overlayRef.current.querySelectorAll('.nav-link');
    const socials = overlayRef.current.querySelectorAll('.nav-social');

    if (tlRef.current) tlRef.current.kill();

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to([...Array.from(links), ...Array.from(socials)], {
      opacity: 0,
      y: 30,
      duration: 0.3,
      stagger: 0.03,
      ease: 'power2.in',
    });

    tl.to(overlayRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.6,
      ease: 'power4.inOut',
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      animateOpen();
    } else {
      animateClose();
    }
  }, [isOpen, animateOpen, animateClose]);

  const handleNavClick = (target: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  return (
    <div
      className={`nav-overlay ${isOpen ? 'open' : ''}`}
      ref={overlayRef}
    >
      <div className="nav-overlay-content">
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-link"
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav-socials">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-overlay-bottom">
        <div className="nav-overlay-tagline">
          I BUILD SECURE CODE & HACK ETHICALLY.
        </div>
        <div className="nav-overlay-location">
          <span>ISLAMABAD, PAKISTAN</span>
        </div>
      </div>
    </div>
  );
}
