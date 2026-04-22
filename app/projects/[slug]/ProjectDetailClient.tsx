'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import SmoothScroll from '@/components/SmoothScroll';

interface ProjectData {
  name: string;
  description: string;
  category: string;
  year: string;
  tech: string;
  role: string;
  link: string;
  image: string;
}

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!pageRef.current) return;
    const elements = pageRef.current.querySelectorAll(
      '.project-detail-label, .project-detail-meta-item, .project-detail-description, .project-detail-link, .project-detail-image'
    );

    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <>
      <SmoothScroll />
      <header className="header">
        <div className="header-left">
          <Link href="/" className="header-logo">FARAZ AAMIR</Link>
          <button className="header-btn hide-mobile" onClick={toggleTheme}>
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </button>
        </div>
        <div className="header-right">
          <Link href="/" className="header-btn">BACK</Link>
        </div>
      </header>

      <div className="project-detail" ref={pageRef}>
        <div className="project-detail-header">
          <div>
            <div className="project-detail-label">PROJECT INFOS</div>
            <div className="project-detail-meta">
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">PROJECT</div>
                <div className="project-detail-meta-item-value">{project.name}</div>
              </div>
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">CATEGORY</div>
                <div className="project-detail-meta-item-value">{project.category}</div>
              </div>
              <div className="project-detail-meta-item">
                <div className="project-detail-meta-item-label">YEAR</div>
                <div className="project-detail-meta-item-value">{project.year}</div>
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-link"
            >
              VISIT WEBSITE →
            </a>
          </div>
        </div>
        <Image
          src={project.image}
          alt={project.name}
          width={1400}
          height={800}
          className="project-detail-image"
          priority
        />
      </div>
    </>
  );
}
