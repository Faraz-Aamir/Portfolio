'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePakistanTime } from '@/hooks/usePakistanTime';
import { socialLinks } from '@/lib/constants';

// Wait until client has mounted to register ScrollTrigger to prevent hydration issues
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const time = usePakistanTime();

  // Time managed by hook

  useEffect(() => {
    if (!nameRef.current) return;

    gsap.fromTo(
      nameRef.current,
      { scale: 0.6, opacity: 0.3 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <footer className="footer" id="footer" ref={footerRef}>
      <div className="footer-name" ref={nameRef}>
        FARAZ AAMIR
      </div>

      <div className="footer-socials">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            className="footer-social-link"
          >
            {link.label}
            {link.isExternal && ' ↗'}
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © {new Date().getFullYear()} FARAZ AAMIR. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-bottom-right">
          <span>ISLAMABAD, PAKISTAN</span>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time}</span>
        </div>
      </div>
    </footer>
  );
}
