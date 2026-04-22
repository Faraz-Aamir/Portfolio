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
    name: 'E-COMMERCE WEBSITE',
    image: '/images/project-ecommerce.jpg',
    category: 'WEB DEVELOPMENT',
  },
  {
    slug: 'smart-attend-ai',
    name: 'SMART ATTEND AI',
    image: '/images/project-smartattend.jpg',
    category: 'AI & AUTOMATION',
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

    const cards = sectionRef.current.querySelectorAll('.project-card');
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
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
      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="project-card"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="project-card-image"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="project-card-overlay">
              <div className="project-card-name">{project.name}</div>
              <div className="project-card-cta">VIEW →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
