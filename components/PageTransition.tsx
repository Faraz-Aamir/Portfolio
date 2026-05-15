'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (!wrapperRef.current) return;

    if (isFirst.current) {
      // Skip transition on first mount (loading screen handles it)
      isFirst.current = false;
      return;
    }

    // Animate in on route change
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [pathname]);

  return (
    <div ref={wrapperRef} className="page-transition-wrapper">
      {children}
    </div>
  );
}
