import React from 'react';
import { MdLock } from 'react-icons/md';

interface TerminalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerIcon?: string;
  footer?: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ title, children, className = '', headerIcon = 'lock', footer }) => {
  const getIconComponent = (iconName: string) => {
    if (iconName === 'lock') return <MdLock size={14} />;
    return <MdLock size={14} />;
  };

  return (
    <div className={`rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 shadow-2xl bg-gray-200 dark:bg-gray-900 flex flex-col transition-all duration-300 ${className}`}>
      {/* Terminal Header */}
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-600 dark:text-slate-400 font-mono">
          {getIconComponent(headerIcon)}
          {title}
        </div>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-4 md:p-6 flex-grow font-mono text-sm relative text-gray-900 dark:text-slate-300">
        {children}
      </div>

      {/* Terminal Footer */}
      {footer && (
        <div className="px-6 py-4 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
          {footer}
        </div>
      )}
    </div>
  );
};