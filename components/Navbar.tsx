import React, { useState } from 'react';
import type { SectionKey } from '../utils/seoConfig';
import { MdLightMode, MdDarkMode, MdDownload, MdMenu, MdClose } from 'react-icons/md';

interface NavbarProps {
  activeSection: SectionKey;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: { id: SectionKey; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'skills', label: 'Skills' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md px-6 py-3.5 lg:px-12 transition-colors"
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Linux Path Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-1.5 font-mono text-left group"
          aria-label="Navigate to Home"
        >
          <span className="text-[var(--text-strong)] font-bold text-base tracking-tight">
            ~/mandar
          </span>
          <span className="inline-block w-1.5 h-3.5 bg-[var(--accent)]" />
          <span className="hidden sm:inline-block text-[11px] text-[var(--faint)] font-mono ml-2 border-l border-[var(--border)] pl-2">
            ai engineer
          </span>
        </button>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`text-xs font-mono uppercase tracking-wider transition-colors py-1 border-b-2 ${
                activeSection === item.id
                  ? 'text-[var(--text-strong)] font-semibold border-[var(--accent)]'
                  : 'text-[var(--faint)] border-transparent hover:text-[var(--text)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text-strong)] hover:bg-[var(--surface-2)] hover:border-[var(--border-strong)] transition-colors"
            title="Toggle theme"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
          </button>

          <button
            onClick={() => scrollTo('resume')}
            className="hidden sm:flex items-center gap-1.5 btn-ghost !px-3.5 !py-1.5"
          >
            <MdDownload size={15} />
            <span>cv.pdf</span>
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted)] hover:bg-[var(--surface-2)] transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <MdClose size={18} /> : <MdMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="lg:hidden mt-3 pt-3 border-t border-[var(--border)] grid grid-cols-2 gap-2"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`px-3 py-2 rounded-md text-xs font-mono text-left border transition-colors ${
                activeSection === item.id
                  ? 'border-[var(--accent)] bg-[var(--surface-2)] text-[var(--text-strong)] font-semibold'
                  : 'border-[var(--border)] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('resume')}
            className="col-span-2 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono border border-[var(--border)] text-[var(--text)] bg-[var(--surface-2)]"
          >
            <MdDownload size={15} />
            <span>download cv.pdf</span>
          </button>
        </nav>
      )}
    </header>
  );
};
