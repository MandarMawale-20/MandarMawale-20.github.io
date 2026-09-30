import React from 'react';
import { MdArrowForward, MdDownload, MdCode } from 'react-icons/md';
import { CodeTerminal } from './CodeTerminal';

export const Hero: React.FC = () => {
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
    <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <div className="prompt-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)] flex-none" />
              <span className="text-[var(--muted)]">
                currently @ <strong className="text-[var(--text-strong)] font-semibold">NearLaw</strong>
                <span className="text-[var(--faint)]"> &#8226; 18M+ records</span>
              </span>
            </div>

            <h1 className="hero-name text-4xl sm:text-6xl lg:text-7xl font-bold text-[var(--text-strong)] tracking-tight leading-none">
              Mandar Mawale
            </h1>

            <h2 className="text-xl sm:text-2xl font-mono text-[var(--muted)]">
              <span className="text-[var(--accent)]">&gt;</span> AI Engineer &amp; Software Engineer
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text)] max-w-prose leading-relaxed">
            I engineer production AI systems and resilient backend architectures using{' '}
            <span className="font-semibold text-[var(--text-strong)]">
              Python, LLMs, RAG, semantic search
            </span>{' '}
            and high-throughput document pipelines &mdash; from FastAPI services and vector retrieval to
            multi-stage LLM workflows running over millions of records.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 items-center">
            <button onClick={() => scrollTo('projects')} className="btn-ink">
              <span>./view-projects.sh</span>
              <MdArrowForward size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="https://github.com/MandarMawale-20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn-ghost"
            >
              <MdCode size={16} />
              <span>github</span>
            </a>
            <button onClick={() => scrollTo('resume')} aria-label="View Resume" className="btn-ghost">
              <MdDownload size={16} />
              <span>resume.pdf</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <CodeTerminal />
        </div>
      </div>
    </div>
  );
};
