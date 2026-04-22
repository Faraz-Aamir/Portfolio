'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "IT'S NEVER \"JUST A WEBSITE.\"",
  "EVERY VULNERABILITY MATTERS.",
  "I BUILD SECURE DIGITAL EXPERIENCES.",
  "YOUR SECURITY. MY OBSESSION.",
  "YOUR SYSTEM. MY PLAYGROUND.",
];

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const lineElements = containerRef.current.querySelectorAll('.scroll-reveal-line');

    lineElements.forEach((line) => {
      gsap.to(line, {
        color: 'var(--text-primary)',
        scrollTrigger: {
          trigger: line,
          start: 'top 75%',
          end: 'top 40%',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="scroll-reveal" id="about" ref={containerRef}>
      {lines.map((text, i) => (
        <div className="scroll-reveal-line" key={i}>
          {text}
        </div>
      ))}
    </section>
  );
}
