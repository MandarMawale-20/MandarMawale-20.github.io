import React from 'react';
import { MdWorkOutline, MdLocationOn, MdSmartToy, MdSearch, MdDns, MdDescription, MdMemory } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

export const AboutSection: React.FC = () => {
  const currentWork = [
    'Document processing and OCR pipelines over 18M+ records',
    'Semantic search and vector retrieval with ChromaDB & FAISS',
    'RAG and multi-stage LLM workflows with LangGraph',
    'Metadata extraction and automated indexing services',
    'Async processing pipelines with worker queues',
    'AI evaluation, observability and error tracking',
    'Python / FastAPI backend microservices'
  ];

  const currentTech = ['Python', 'FastAPI', 'LangGraph', 'RAG', 'ChromaDB', 'LLMs', 'OCR', 'Vector Search'];

  const whatIBuild = [
    {
      title: 'AI Systems & Workflows',
      icon: MdSmartToy,
      description: 'LLM-powered systems, agentic workflows, deterministic routing, and tool-using AI applications.'
    },
    {
      title: 'Vector Retrieval & Search',
      icon: MdSearch,
      description: 'Semantic search, hybrid BM25 + dense retrieval, custom embeddings, and document-grounded generation.'
    },
    {
      title: 'Backend Infrastructure',
      icon: MdDns,
      description: 'FastAPI services, asynchronous pipelines, task queues, and data-intensive backend architectures.'
    },
    {
      title: 'Document Intelligence',
      icon: MdDescription,
      description: 'OCR, PDF structure parsing, semantic chunking, and tabular data extraction pipelines.'
    },
    {
      title: 'Local & Constrained AI',
      icon: MdMemory,
      description: 'Quantized models (GGUF, llama.cpp), low-latency offline voice assistants, and hardware-constrained inference.'
    }
  ];

  const exploring = [
    'LLM Evaluation & Benchmarking',
    'Multi-Agent Architectures',
    'AI Observability & Tracing',
    'Local LLMs (GGUF / llama.cpp)',
    'Spring AI Ecosystem',
    'Multimodal RAG Pipelines'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="mb-12">
        <SectionHeader
          cmd="cat ~/about.md"
          title="Background & Focus"
          sub="Specialized in production AI systems, vector retrieval pipelines, and backend reliability."
        />
      </div>

      {/* Current Position & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 panel p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-[var(--border)] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
                <MdWorkOutline size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-strong)] leading-snug">
                  AI Engineer Intern
                </h3>
                <p className="text-sm text-[var(--muted)] font-mono">
                  ALL MR ONLINE (NearLaw)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[var(--faint)]">
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)]">
                Feb 2026 – Present
              </span>
              <span className="flex items-center gap-1">
                <MdLocationOn size={14} />
                Mumbai, IN
              </span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[var(--text)] leading-relaxed">
            <p>
              At NearLaw, I engineer production AI pipelines for an enterprise legal search platform managing{' '}
              <strong className="text-[var(--text-strong)] font-semibold">18M+ court records</strong>. My daily work revolves around document ingestion, OCR, semantic indexing, and multi-stage LLM evaluation workflows.
            </p>
            <p>
              I take pride in solving the unglamorous problems that make AI reliable in production: messy real-world PDFs, OCR edge cases, structured extraction accuracy, latency optimization, and deterministic safety checks.
            </p>
          </div>

          <div className="pt-2">
            <div className="text-xs font-mono text-[var(--faint)] mb-2"># active_stack</div>
            <div className="flex flex-wrap gap-1.5">
              {currentTech.map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--ok)] font-semibold mb-4">
              Current Engineering Scope
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-mono text-[var(--text)]">
              {currentWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--ok)] shrink-0 select-none">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-5 border-t border-[var(--border)] text-xs font-mono text-[var(--faint)]">
            [status: pipeline latency &lt; 200ms · zero cross-tenant leaks]
          </div>
        </div>
      </div>

      {/* What I Build */}
      <div className="mb-16">
        <h3 className="text-xl font-bold text-[var(--text-strong)] tracking-tight mb-6">
          Architectural Competencies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatIBuild.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="panel p-5 hover:border-[var(--border-strong)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[var(--accent)]">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-strong)]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exploring */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--faint)] mb-3">
          $ find ~/learning -type topic
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {exploring.map((topic) => (
            <span key={topic} className="chip">{topic}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
