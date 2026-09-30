import React from 'react';
import { CommandBadge } from './CommandBadge';

interface SectionHeaderProps {
  cmd: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ cmd, title, sub, align = 'left' }) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <CommandBadge cmd={cmd} />
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-strong)]">
        {title}
      </h2>
      {sub && (
        <p className="font-mono text-xs sm:text-sm text-[var(--muted)] max-w-2xl leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
};
