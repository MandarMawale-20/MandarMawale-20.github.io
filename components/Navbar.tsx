
import React from 'react';
import type { SectionKey } from '../utils/seoConfig';
import { MdTerminal, MdLightMode, MdDarkMode, MdDownload } from 'react-icons/md';

interface NavbarProps {
  activeSection: SectionKey;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, darkMode, setDarkMode }) => {
  const navItems = [
    { id: 'home', label: '//home' },
    { id: 'skills', label: '//skills' },
    { id: 'experience', label: '//experience' },
    { id: 'projects', label: '//projects' },
    { id: 'contact', label: '//contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/50 bg-[#f8fafc]/80 dark:bg-[#020617]/80 backdrop-blur-md px-6 py-4 lg:px-20 transition-colors">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div 
          onClick={() => scrollTo('home')}
          className="flex items-center gap-4 text-slate-900 dark:text-white hover:text-[#00e5ff] transition-colors duration-300 cursor-pointer group"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-[#00e5ff]/50 transition-all">
            <div className="text-[#00e5ff]">
              <MdTerminal size={20} />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tight leading-none uppercase">Mandar Mawale</h2>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase mt-1">AI Engineer</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-mono transition-all relative ${
                activeSection === item.id 
                  ? 'text-[#00e5ff] font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all"
            title="Toggle Mode"
          >
            <div className="flex items-center justify-center">
              {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </div>
          </button>
          
          <button 
            onClick={() => scrollTo('resume')}
            className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-[#00e5ff]/30 hover:border-[#00e5ff] text-[#00e5ff] px-5 py-2 rounded-lg text-sm font-mono font-bold transition-all group"
          >
            <div className="flex-shrink-0">
              <MdDownload size={18} />
            </div>
            <span>CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};
