import React from 'react';

interface CommandBadgeProps {
  cmd: string;
  className?: string;
}

export const CommandBadge: React.FC<CommandBadgeProps> = ({ cmd, className = '' }) => {
  return (
    <div className={`prompt-badge ${className}`}>
      <span className="host">visitor@mandar</span>
      <span className="sig">:~$</span>
      <span className="cmd">{cmd}</span>
    </div>
  );
};
