'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import TiltedCard from './TiltedCard';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'e-commerce-website',
    name: 'E-COMMERCE WEBSITE',
    image: '/images/project-ecommerce.png',
    category: 'WEB DEVELOPMENT',
  },
  {
    slug: 'smart-attend-ai',
    name: 'SMART ATTEND AI',
    image: '/images/project-smartattend.png',
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
            <TiltedCard
              imageSrc={project.image}
              altText={project.name}
              captionText={project.category}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', padding: '2rem' }}>
                  <div className="project-card-name" style={{ padding: 0 }}>{project.name}</div>
                  <div className="project-card-cta" style={{ opacity: 0.8 }}>VIEW →</div>
                </div>
              }
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
