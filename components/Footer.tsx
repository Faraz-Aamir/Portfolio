'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: 'GITHUB', href: 'https://github.com/Faraz-Aamir' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/faraz-aamir' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/' },
  { label: 'EMAIL', href: 'mailto:farazaamir126@gmail.com' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pkt = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
      const hours = String(pkt.getHours()).padStart(2, '0');
      const minutes = String(pkt.getMinutes()).padStart(2, '0');
      const seconds = String(pkt.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="footer-social-link"
          >
            {link.label}
            {!link.href.startsWith('mailto') && ' ↗'}
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
