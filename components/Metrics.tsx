import React from 'react';
import { Terminal } from './Terminal';
import { SectionHeader } from './common/SectionHeader';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      value: '1 yr',
      label: 'Professional experience',
      detail: 'AI engineering, backend development and technical mentoring'
    },
    {
      value: '18M+',
      label: 'Legal records processed',
      detail: 'Production document & retrieval pipelines at NearLaw'
    },
    {
      value: '93%',
      label: 'AI evaluation accuracy',
      detail: 'Customer support resolution agent evaluation runs'
    },
    {
      value: '40%',
      label: 'Page-load improvement',
      detail: 'Utkarsha Interiors platform (WebP pipeline + lazy loading)'
    },
    {
      value: '30+',
      label: 'Students mentored',
      detail: 'Python, algorithms and problem solving sessions'
    },
    {
      value: '~10ms',
      label: 'Intent pre-classification',
      detail: 'Anantum local AI voice assistant, regex-first routing'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="mb-10">
        <SectionHeader
          cmd="cat metrics.log"
          title="Engineering by Numbers"
          sub="Numbers taken from production work and shipped systems — each one verified and benchmarked."
        />
      </div>

      <Terminal
        title="metrics.log — system performance summary"
        headerIcon="terminal"
        footer={
          <p className="text-xs text-[var(--faint)] font-mono">
            NearLaw 18M+ pipeline · LangGraph evaluation runs · Utkarsha MVC gains · GTX 1650 4GB local inference
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-baseline gap-4 group">
              <span className="w-24 shrink-0 font-mono text-2xl md:text-3xl font-bold text-[var(--text-strong)] tracking-tight">
                {metric.value}
              </span>
              <span className="min-w-0 border-l border-[var(--border-strong)] pl-3">
                <span className="block text-sm font-semibold text-[var(--text)]">{metric.label}</span>
                <span className="block text-xs text-[var(--muted)] mt-0.5">{metric.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </Terminal>
    </div>
  );
};
