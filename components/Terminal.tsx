import React from 'react';
import { MdLock, MdTerminal } from 'react-icons/md';

interface TerminalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerIcon?: string;
  footer?: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ title, children, className = '', headerIcon = 'lock', footer }) => {
  const getIconComponent = (iconName: string) => {
    if (iconName === 'terminal') return <MdTerminal size={14} />;
    return <MdLock size={14} />;
  };

  return (
    <div className={`term overflow-hidden flex flex-col transition-colors ${className}`}>
      {/* Terminal Header */}
      <div className="term-bar">
        <div className="flex gap-1.5 flex-none">
          <span className="term-dot" style={{ backgroundColor: '#ea6962' }} />
          <span className="term-dot" style={{ backgroundColor: '#d8a657' }} />
          <span className="term-dot" style={{ backgroundColor: '#a9b665' }} />
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--faint)] flex-1 min-w-0">
          {getIconComponent(headerIcon)}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex gap-1 flex-none">
          <span className="w-1 h-1 bg-[var(--border-strong)] rounded-full" />
          <span className="w-1 h-1 bg-[var(--border-strong)] rounded-full" />
          <span className="w-1 h-1 bg-[var(--border-strong)] rounded-full" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 md:p-7 flex-grow font-mono text-sm relative bg-[var(--surface-2)] text-[var(--text)]">
        {children}
      </div>

      {/* Terminal Footer */}
      {footer && (
        <div className="px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface)]">
          {footer}
        </div>
      )}
    </div>
  );
};