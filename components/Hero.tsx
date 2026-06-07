'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePakistanTime } from '@/hooks/usePakistanTime';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const time = usePakistanTime();

  // Time is now managed by usePakistanTime hook

  useEffect(() => {
    if (!heroRef.current) return;
    const lines = heroRef.current.querySelectorAll('.hero-line-inner');
    const bottomLeft = heroRef.current.querySelector('.hero-bottom-left');
    const bottomRight = heroRef.current.querySelector('.hero-bottom-right');

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(lines, {
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      delay: 0.3,
    });

    tl.fromTo(
      [bottomLeft, bottomRight],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      '-=0.4'
    );
  }, []);

  const heroWords = ['I HACK,', 'CODE AND', 'CREATE.'];

  return (
    <section className="hero" id="home" ref={heroRef}>
      <h1 className="hero-text heading-xl">
        {heroWords.map((word, i) => (
          <span className="hero-line" key={i}>
            <span className="hero-line-inner">{word}</span>
          </span>
        ))}
      </h1>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          CYBERSECURITY STUDENT. WEB DEVELOPER. PROBLEM SOLVER.
        </div>
        <div className="hero-bottom-right">
          <span>ISLAMABAD, PAKISTAN</span>
          <span className="hero-clock">{time}</span>
          <span>FAST NUCES</span>
        </div>
      </div>
    </section>
  );
}
