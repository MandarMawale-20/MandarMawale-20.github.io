import React from 'react';
import { MdLocationOn, MdDateRange } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

interface Experience {
  id: string;
  hash: string;
  role: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  achievements: string[];
  active?: boolean;
}

export const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      hash: '9a3f2d',
      role: 'AI Engineer Intern',
      company: 'ALL MR ONLINE (NearLaw)',
      period: 'Feb 2026 – Present',
      location: 'Mumbai, India',
      tags: ['Python', 'FastAPI', 'RAG', 'LangGraph', 'ChromaDB', 'OCR', 'Vector Search'],
      achievements: [
        'Developed Python components for a production legal search platform processing 18M+ court records, working across document processing, semantic retrieval and LLM-based workflows.',
        'Designed asynchronous processing pipelines using worker queues and multi-stage LLM workflows for document ingestion, metadata extraction, indexing and automated processing.',
        'Built and tested OCR/PDF processing components for structured extraction, metadata generation and searchable knowledge bases across varied document formats.',
        'Implemented evaluation and observability workflows to monitor retrieval quality, processing errors and LLM outputs.',
        'Debugged and investigated failures across document and AI pipelines by reproducing issues, reviewing generated outputs and iterating on fixes to improve reliability.'
      ],
      active: true
    },
    {
      id: '2',
      hash: '5c1b8e',
      role: 'Web Developer Intern',
      company: 'Utkarsha Interiors',
      period: 'Oct 2025 – Dec 2025',
      location: 'Thane, India',
      tags: ['Python', 'FastAPI', 'JavaScript', 'HTML', 'CSS', 'WebP'],
      achievements: [
        'Engineered full-stack Python business applications using MVC architecture, building FastAPI endpoints for portfolio media processing and secure backend storage.',
        'Optimized frontend performance, achieving a 40% improvement in website load speed through automated WebP asset pipelines and lazy loading.',
        'Developed dynamic customer request forms with backend processing to forward enquiries to marketing teams reliably.'
      ]
    },
    {
      id: '3',
      hash: '2e7f4a',
      role: 'Technical Mentor',
      company: 'Campus Credentials',
      period: 'Jan 2025',
      location: 'Mumbai, India',
      tags: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
      achievements: [
        'Mentored 30+ students in Python programming, algorithms and problem solving through practical sessions and technical guidance.',
        'Diagnosed and resolved algorithmic issues, improving student code correctness and execution times.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12">
        <SectionHeader
          cmd="git log --oneline --graph"
          title="Experience History"
          sub="Engineering production AI systems, asynchronous pipelines, and high-performance backend platforms."
        />
      </div>

      <div className="relative border-l border-[var(--border-strong)] ml-4 sm:ml-6 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8 group">
            {/* Git commit dot */}
            <div
              className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg)] transition-colors ${
                exp.active ? 'bg-[var(--ok)]' : 'bg-[var(--border-strong)]'
              }`}
            />

            <div className="panel p-5 sm:p-7 transition-colors group-hover:border-[var(--border-strong)]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[var(--faint)]">
                      commit {exp.hash}
                    </span>
                    {exp.active && (
                      <span className="chip !text-[10px] !text-[var(--ok)] !border-[var(--ok)] uppercase tracking-wider">
                        HEAD · active
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-strong)]">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text)] font-mono">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs font-mono text-[var(--faint)]">
                  <div className="flex items-center gap-1">
                    <MdDateRange size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdLocationOn size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {exp.tags.map(tag => (
                  <span key={tag} className="chip !text-[10px]">{tag}</span>
                ))}
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[var(--ok)] shrink-0 font-mono mt-0.5">&gt;</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
