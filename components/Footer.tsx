'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
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
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          I BUILD SECURE CODE & HACK ETHICALLY.
        </div>
        <div className="footer-bottom-right">
          <span>ISLAMABAD, PAKISTAN</span>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time}</span>
        </div>
      </div>
    </footer>
  );
}
