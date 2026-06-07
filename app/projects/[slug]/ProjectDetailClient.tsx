'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import SmoothScroll from '@/components/SmoothScroll';
import Header from '@/components/Header';

gsap.registerPlugin(ScrollTrigger);

interface ProjectData {
  name: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  tech: string;
  role: string;
  link: string;
  image: string;
}

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;
    
    // Animate Hero title
    gsap.fromTo(
      heroRef.current.querySelector('.project-hero-title-inner'),
      { y: '100%' },
      { y: '0%', duration: 1.2, ease: 'power4.out', delay: 0.1 }
    );

    // Animate content section on scroll
    const contentElements = contentRef.current.querySelectorAll(
      '.project-content-subtitle, .project-content-year, .project-detail-label, .project-detail-meta-item, .project-detail-description, .project-detail-link, .project-detail-image'
    );

    gsap.fromTo(
      contentElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <>
      <SmoothScroll />
      <Header variant="minimal" />

      {/* Hero Header */}
      <div className="project-hero" ref={heroRef}>
        <h1 className="project-hero-title">
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="project-hero-title-inner" style={{ display: 'block' }}>
              {project.name}
            </span>
          </span>
        </h1>
      </div>

      <div className="project-content" ref={contentRef}>
        <div className="project-content-top">
          <h2 className="project-content-subtitle">{project.tagline}</h2>
          <div className="project-content-year">{project.year}</div>
        </div>

        <div className="project-detail-header">
          <div>
            <div className="project-detail-label">PROJECT INFOS</div>
            <div className="project-detail-meta">
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">CATEGORY</div>
                <div className="project-detail-meta-item-value">{project.category}</div>
              </div>
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">TECH STACK</div>
                <div className="project-detail-meta-item-value">{project.tech}</div>
              </div>
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">ROLE</div>
                <div className="project-detail-meta-item-value">{project.role}</div>
              </div>
            </div>
          </div>
          <div>
            <p className="project-detail-description">{project.description}</p>
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-link"
              >
                VISIT WEBSITE →
              </a>
            )}
          </div>
        </div>

        {/* Project Screenshot */}
        <div className="project-detail-image">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1400}
            height={875}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </div>
    </>
  );
}
