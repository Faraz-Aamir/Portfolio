'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const screenRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!screenRef.current) return;

    const counter = screenRef.current.querySelector('.loading-counter');
    const nameLetters = screenRef.current.querySelectorAll('.loading-name-letter');
    const tagline = screenRef.current.querySelector('.loading-tagline');
    const overlay = screenRef.current;

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    // Counter animation 0 → 100
    const obj = { val: 0 };
    tl.to(obj, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counter) counter.textContent = String(Math.floor(obj.val));
      },
    });

    // Stagger name letters in
    tl.fromTo(
      nameLetters,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
      },
      '-=1.2'
    );

    // Tagline fade in
    tl.fromTo(
      tagline,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.6'
    );

    // Hold
    tl.to({}, { duration: 0.3 });

    // Wipe out
    tl.to(overlay, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div className="loading-screen" ref={screenRef}>
      <div className="loading-content">
        <div className="loading-name">
          {'FARAZ AAMIR'.split('').map((char, i) => (
            <span
              key={i}
              className="loading-name-letter"
              style={char === ' ' ? { width: '0.3em' } : undefined}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="loading-tagline">CYBERSECURITY · WEB DEVELOPMENT · PROBLEM SOLVING</div>
      </div>
      <div className="loading-counter">0</div>
      <div className="loading-line" />
    </div>
  );
}
