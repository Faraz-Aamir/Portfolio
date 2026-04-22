'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'CYBERSECURITY',
  'WEB DEVELOPMENT',
  'PYTHON',
  'C++',
  'NETWORK SECURITY',
  'ETHICAL HACKING',
  'AI & AUTOMATION',
  'PROBLEM SOLVING',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.skill-item');

    gsap.fromTo(
      items,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      }
    );
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-title heading-lg">SKILLS</div>
      <div className="skills-list">
        {skills.map((skill, i) => (
          <div className="skill-item" key={skill}>
            <span className="skill-item-name">{skill}</span>
            <span className="skill-item-index">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
