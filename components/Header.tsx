'use client';

import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export default function Header({ onMenuToggle, menuOpen }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  const scrollToCTA = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header" id="header">
      <div className="header-left">
        <a href="/" className="header-logo">
          <span className="header-logo-circle">F</span>
          FARAZ AAMIR
        </a>
        <button className="header-btn hide-mobile" onClick={toggleTheme}>
          {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
        </button>
      </div>
      <div className="header-right">
        <button className="header-btn" onClick={onMenuToggle}>
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
        <button className="header-btn hide-mobile" onClick={scrollToCTA}>
          LET&apos;S TALK
        </button>
      </div>
    </header>
  );
}
