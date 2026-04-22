'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const heading = sectionRef.current.querySelector('.cta-heading');
    const content = sectionRef.current.querySelector('.cta-content');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });

    tl.fromTo(
      heading,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    tl.fromTo(
      content,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <section className="cta" id="cta" ref={sectionRef}>
      <div className="cta-heading">
        LET&apos;S BUILD
        <br />
        SOMETHING
        <br />
        SECURE.
      </div>
      <div className="cta-content">
        <p className="cta-text">
          I write code that works and security that holds.
          Let&apos;s make something worth talking about.
        </p>
        <a
          href="mailto:faraz@example.com"
          className="cta-link"
        >
          GET IN TOUCH
          <span className="cta-link-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
