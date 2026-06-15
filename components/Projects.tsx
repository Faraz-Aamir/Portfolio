'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'e-commerce-website',
    name: 'AAMIR FABRICS',
    image: '/images/project-ecommerce.png',
    category: 'WEB DEVELOPMENT',
    size: 'featured',
  },
  {
    slug: 'dld-alarm-network',
    name: 'DLD ALARM NETWORK',
    image: '/images/project-dld.jpeg',
    category: 'HARDWARE / DLD',
    size: 'horizontal',
  },
  {
    slug: 'phishing-awareness',
    name: 'PHISHGUARD',
    image: '/images/project-phishguard.png',
    category: 'CYBERSECURITY',
    size: 'square',
  },
  {
    slug: 'network-sniffer',
    name: 'NETWORK SNIFFER',
    image: '/images/project-sniffer.jpeg',
    category: 'CYBERSECURITY',
    size: 'square',
  },
  {
    slug: 'code-alpha',
    name: 'CODE ALPHA',
    image: '/images/project-codealpha.png',
    category: 'SOFTWARE ENGINEERING',
    size: 'square',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );

    const cards = sectionRef.current.querySelectorAll('.bento-card');
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-title heading-lg" ref={titleRef}>
        PROJECTS
      </div>
      <div className="bento-grid">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className={`bento-card bento-card--${project.size} bento-card--${project.slug}`}
            data-cursor-text={project.category}
          >
            <div className="bento-card-image-wrap">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes={
                  project.size === 'featured'
                    ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw'
                    : project.size === 'horizontal'
                    ? '(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 60vw'
                    : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw'
                }
                className="bento-card-image"
              />
            </div>
            <div className="bento-card-overlay">
              <span className="bento-card-tag">{project.category}</span>
              <div className="bento-card-info">
                <h3 className="bento-card-name">{project.name}</h3>
                <span className="bento-card-cta">VIEW →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
