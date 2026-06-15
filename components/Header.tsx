'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

interface HeaderProps {
  onMenuToggle?: () => void;
  menuOpen?: boolean;
  variant?: 'default' | 'minimal';
}

export default function Header({ onMenuToggle, menuOpen, variant = 'default' }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  const scrollToCTA = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header" id="header">
      <div className="header-left">
        <Link href="/" className="header-logo">
          <span className="header-logo-circle">F</span>
          FARAZ AAMIR
        </Link>
        <button className="header-btn hide-mobile" onClick={toggleTheme}>
          {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </button>
      </div>
      <div className="header-right">
        {variant === 'default' && (
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-btn hide-mobile"
          >
            RESUME
          </a>
        )}
        {variant === 'default' && (
          <button className="header-btn hide-mobile" onClick={scrollToCTA}>
            LET&apos;S TALK
          </button>
        )}
        {variant === 'minimal' && (
          <Link href="/" className="header-btn">
            BACK TO HOME
          </Link>
        )}
        {variant === 'default' && onMenuToggle && (
          <button 
            className="header-btn" 
            onClick={onMenuToggle}
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        )}
      </div>
    </header>
  );
}
