import React from 'react';

export const SectionSkeleton: React.FC = () => {
  return (
    <div className="w-full h-96 animate-pulse p-8 mx-auto max-w-7xl">
      <div className="h-8 bg-[var(--surface-2)] rounded w-1/4 mb-8" />
      <div className="space-y-4">
        <div className="h-4 bg-[var(--surface-2)] rounded w-full" />
        <div className="h-4 bg-[var(--surface-2)] rounded w-5/6" />
        <div className="h-4 bg-[var(--surface-2)] rounded w-4/6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="h-64 bg-[var(--surface-2)] rounded-lg" />
        <div className="h-64 bg-[var(--surface-2)] rounded-lg" />
        <div className="h-64 bg-[var(--surface-2)] rounded-lg" />
      </div>
    </div>
  );
};
