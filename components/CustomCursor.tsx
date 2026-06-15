'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// Spring config — slightly loose so the dot trails behind the real cursor
const SPRING_CONFIG = { damping: 25, stiffness: 280, mass: 0.6 };

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, SPRING_CONFIG);
  const springY = useSpring(cursorY, SPRING_CONFIG);

  const opacity = useMotionValue(0);

  const setLabel = useCallback((text: string) => {
    if (textRef.current) {
      textRef.current.textContent = text;
    }
  }, []);

  const enterProject = useCallback((label: string) => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('is-project');
    }
    setLabel(label);
  }, [setLabel]);

  const leaveProject = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('is-project');
    }
    setLabel('');
  }, [setLabel]);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    opacity.set(1);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeaveWindow = () => {
      opacity.set(0);
    };

    const handleMouseEnterWindow = () => {
      opacity.set(1);
    };

    // Attach mouseenter/mouseleave directly to each project card.
    // These events do NOT bubble or fire for child elements,
    // so 3D tilt transforms won't cause rapid toggling / glitch.
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

    const enterHandlers = new Map<HTMLElement, () => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    projectCards.forEach((card) => {
      const cursorText = card.getAttribute('data-cursor-text');

      const onEnter = () => enterProject(cursorText || 'VIEW');
      const onLeave = () => leaveProject();

      enterHandlers.set(card, onEnter);
      leaveHandlers.set(card, onLeave);

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.documentElement.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterWindow);

      projectCards.forEach((card) => {
        const onEnter = enterHandlers.get(card);
        const onLeave = leaveHandlers.get(card);
        if (onEnter) card.removeEventListener('mouseenter', onEnter);
        if (onLeave) card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [cursorX, cursorY, opacity, enterProject, leaveProject]);

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        x: springX,
        y: springY,
        opacity,
      }}
    >
      <span ref={textRef} className="custom-cursor-text" />
    </motion.div>
  );
}
