'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import NavOverlay from '@/components/NavOverlay';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <Header
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
      <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <ErrorBoundary>
          <Hero />
          <ScrollReveal />
          <Projects />
          <Skills />
          <CTA />
          <Footer />
        </ErrorBoundary>
      </main>
    </>
  );
}
