
import React from 'react';
import { MdTerminal } from 'react-icons/md';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#020617] py-12 px-6 lg:px-20 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono text-sm">
            <div className="text-cyan-600 dark:text-cyan-400">
              <MdTerminal size={14} />
            </div>
            <span>root@mandar:~/portfolio/end</span>
            <span className="blinking-cursor"></span>
          </div>
          <p className="text-slate-500 dark:text-slate-600 text-xs">
            © 2026 Mandar Mawale. All systems operational.
          </p>
        </div>

        <div className="text-center md:text-right text-slate-500 dark:text-slate-600 text-xs font-mono">
          Built with React & Tailwind CSS.
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-mono border-b border-transparent hover:border-cyan-500">Privacy_Policy</a>
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-mono border-b border-transparent hover:border-cyan-500">Terms_of_Service</a>
        </div>
      </div>
    </footer>
  );
};
