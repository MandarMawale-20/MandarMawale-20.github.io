import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { SectionHeader } from './common/SectionHeader';
import { MdClose, MdArrowForward, MdCode } from 'react-icons/md';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'GEO Auditor',
      subtitle: 'AI Search Visibility Auditor',
      category: 'AI TOOLS',
      description: 'A FastAPI application that audits a website and scores how visible it is to AI answer engines such as ChatGPT Search, Google AI Overviews, Perplexity and Claude — with evidence-backed findings and copy-paste fixes.',
      tags: ['Python', 'FastAPI', 'Pydantic', 'BeautifulSoup', 'LLM APIs', 'ReportLab', 'Cloudflare Pages'],
      status: 'LIVE',
      image: '',
      imageAlt: 'GEO Auditor AI search visibility audit report',
      sourceUrl: 'https://github.com/MandarMawale-20/GEO-Auditor',
      demoUrl: 'https://geoauditor.pages.dev/',
      metric: '100-point score across 30+ checks in ~1–3s',
      highlights: [
        'Explainable 100-point score across 10 weighted categories — every deduction is backed by the exact scraped text, missing tag or code found on the page.',
        'Hybrid scoring: 80% deterministic Python (crawler access, schema validation, DOM structure, fact density) plus an optional LLM layer for query coverage and citation snippet quality, with heuristic fallbacks so an audit always completes.',
        'Fixes are generated from the site\'s own scraped content — JSON-LD, robots.txt rules and HTML snippets — alongside a priority roadmap sorted by impact versus effort.',
        'Five-stage async pipeline (fetch → parse → deterministic scoring → optional LLM evaluation → report) with a short-lived report cache serving the PDF and HTML exports.',
        'Shipped to production: FastAPI backend plus a static, no-build Cloudflare Pages frontend that renders the report in the browser.'
      ],
      architecture: [
        'Data acquisition — HTML, robots.txt and sitemap.xml fetch with retries',
        'Parsing & extraction — DOM, JSON-LD entities, FAQs, facts and tables',
        'Deterministic scoring engines — technical, entity and content checks (80% of score)',
        'Optional LLM semantic evaluation — query coverage and citation quality, with fallbacks',
        'Report generation — web report, standalone HTML export and ReportLab PDF'
      ]
    },
    {
      id: '2',
      title: 'Cura',
      subtitle: 'Healthcare Multi-Agent Assistant',
      category: 'AI AGENTS',
      description: 'A multi-agent healthcare assistant built around patient-data isolation, deterministic emergency handling and tool-based workflows for medical information, patient history and appointments.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'ChromaDB', 'MCP Tools', 'Agentic AI'],
      status: 'LIVE',
      image: '',
      imageAlt: 'Cura healthcare multi-agent assistant',
      sourceUrl: 'https://github.com/MandarMawale-20/Cura',
      highlights: [
        'Patient-data isolation: every patient tool is scoped by patient_id, so cross-patient access is impossible.',
        'Deterministic emergency handling — a keyword policy rather than an LLM, so it cannot be reasoned around or broken by a provider outage.',
        'Tool-based agent architecture on a controlled MCP-style tool layer, with booking gated behind explicit patient confirmation.',
        'Medical information retrieval grounded in MedlinePlus, RxNorm, openFDA and PubMed with source attribution on every answer.'
      ],
      architecture: [
        'Intent & Safety Router (deterministic first, LLM refinement optional)',
        'History Agent → Patient MCP (PostgreSQL, read-only)',
        'Health Info Agent → Medical MCP (MedlinePlus, RxNorm, openFDA, PubMed)',
        'Appointment Agent → explicit confirmation, then row-locking transaction',
        'Communication Agent formats the grounded, cited answer'
      ]
    },
    {
      id: '3',
      title: 'Customer Support Resolution Agent',
      subtitle: 'AI Customer Support Resolution System',
      category: 'AI AGENTS',
      description: 'An AI support agent that combines retrieval, tool calling and human-in-the-loop workflows to resolve customer issues and handle actions such as refunds and cancellations.',
      tags: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Google Gemini', 'Docker'],
      status: 'LIVE',
      image: '',
      imageAlt: 'Customer support resolution agent workflow',
      sourceUrl: 'https://github.com/MandarMawale-20/Customer-Support-Agent',
      metric: '93% evaluation accuracy',
      highlights: [
        'Compared Cache-Augmented Generation against RAG with hybrid BM25 + embedding retrieval to choose the right grounding strategy for policy-dense knowledge bases.',
        'Evaluation suite covering retrieval quality, answer correctness and common failure cases — results were used to refine system behavior.',
        'Human-in-the-loop approval for sensitive financial actions such as refunds and cancellations; nothing is auto-approved.',
        'FastAPI service with SSE streaming and Docker-based deployment for reproducible development and testing.'
      ],
      architecture: [
        'Ticket intake → FastAPI service',
        'Planner agent classifies intent and selects knowledge sources',
        'Knowledge retrieval — Chroma vectors with BM25 hybrid scoring',
        'Order data lookup through tool calls',
        'Human-in-the-loop approval for refunds and cancellations',
        'Resolver writes the grounded, cited response'
      ]
    },
    {
      id: '4',
      title: 'AgentEd',
      subtitle: 'AI-Powered Study Companion',
      category: 'AI / ML',
      description: 'A multi-agent learning platform that creates personalized study plans, retrieves learning resources, generates quizzes and provides performance feedback.',
      tags: ['Python', 'FastAPI', 'LangGraph', 'Pinecone', 'MongoDB Atlas', 'Google Gemini', 'Next.js'],
      status: 'LIVE',
      image: '',
      imageAlt: 'High-tech study space interface for AgentEd',
      sourceUrl: 'https://github.com/MandarMawale-20/AgentEd',
      highlights: [
        'Multi-agent orchestration separating resource discovery, planning, quizzing and feedback instead of one oversized prompt.',
        'FastAPI backend with JWT authentication and MongoDB Atlas for persistent session and conversation state.',
        'Vector retrieval over user-uploaded course material so answers stay grounded in the learner\'s own content.'
      ],
      architecture: [
        'Client request via Next.js frontend',
        'FastAPI backend with JWT authentication',
        'Resource Agent retrieves learning resources',
        'Planner Agent builds the personalized study plan',
        'Quiz Agent generates assessments from the material',
        'Feedback Agent scores performance and adapts the plan'
      ]
    },
    {
      id: '5',
      title: 'Anantum',
      subtitle: 'Local AI Voice Assistant',
      category: 'LOCAL AI',
      description: 'A local AI voice assistant combining speech recognition, LLM inference, text-to-speech and semantic retrieval, designed to run on consumer hardware.',
      tags: ['Python', 'Gemma 3 GGUF', 'Whisper', 'Kokoro TTS', 'FAISS', 'SQLite'],
      status: 'LIVE',
      image: '',
      imageAlt: 'Anantum local AI voice assistant pipeline',
      sourceUrl: 'https://github.com/MandarMawale-20/Anantum',
      metric: '~10ms intent pre-classification',
      highlights: [
        'Fully offline pipeline: Whisper speech recognition, local Gemma 3 GGUF inference and Kokoro TTS with no cloud dependency.',
        'Three-tier memory (hot cache → FAISS → SQLite archive) for long-term context across sessions.',
        'Regex-first intent routing executes instant tools in under 50ms, with LLM fallback for open-ended requests.',
        'Streaming pipeline pushes each generated sentence to TTS while the model keeps generating, cutting perceived latency.',
        'Built and tuned around a GTX 1650 4GB laptop GPU, where the VRAM limit shaped most architecture decisions.'
      ],
      architecture: [
        'Whisper STT with hallucination filtering',
        'Regex-first intent pre-classification (~10ms fast path)',
        'Local LLM inference — Gemma 3 GGUF via llama.cpp',
        'FAISS (HNSW) semantic memory retrieval + SQLite archive',
        'Kokoro TTS with sentence-level streaming output'
      ]
    }
  ];

  const categories = ['ALL', 'AI TOOLS', 'AI AGENTS', 'AI / ML', 'LOCAL AI'];

  const slugify = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  // Case-study dialog: Escape to close, focus trap, scroll lock and focus restore
  useEffect(() => {
    if (!selectedProject) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocused.current?.focus?.();
    };
  }, [selectedProject]);

  const renderArchitectureFlow = (project: Project) => {
    const steps = project.architecture ?? [];

    if (steps.length === 0) {
      return <p className="text-[var(--muted)] text-sm">Architecture specifications are confidential or under active revision.</p>;
    }

    return (
      <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent)] before:to-[var(--border)]">
        {steps.map((step, index) => (
          <li key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] group-hover:bg-[var(--accent)] transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[1px] md:ml-0" />
            <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] text-sm font-medium text-[var(--text)]">
              {step}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <SectionHeader
          cmd="ls ~/projects --featured"
          title="Featured Projects"
          sub="Production AI systems, agentic workflows and retrieval pipelines — with the architecture behind each one."
        />
      </div>

      <div className="inline-flex flex-wrap gap-1 p-1 rounded-md border border-[var(--border)] bg-[var(--surface-2)] mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-4 py-1.5 rounded-[4px] text-[11px] font-mono uppercase tracking-wider transition-colors ${
              filter === cat
                ? 'bg-[var(--ink)] text-[var(--ink-on)] font-semibold'
                : 'text-[var(--muted)] hover:text-[var(--text-strong)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj, index) => (
          <article
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelectedProject(proj); } }}
            className="group cursor-pointer panel overflow-hidden hover:border-[var(--accent)] transition-colors flex flex-col h-full relative"
          >
            {/* Terminal-window cover */}
            <div className="relative h-56 overflow-hidden bg-[var(--surface-2)] border-b border-[var(--border)] border-l-2 border-l-[var(--accent)]">
              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--surface)] border-b border-[var(--border)]">
                <span className="flex gap-1.5 flex-none">
                  <span className="term-dot" style={{ backgroundColor: '#ea6962' }} />
                  <span className="term-dot" style={{ backgroundColor: '#d8a657' }} />
                  <span className="term-dot" style={{ backgroundColor: '#a9b665' }} />
                </span>
                <span className="font-mono text-[10px] text-[var(--faint)] truncate flex-1 min-w-0">
                  ~/projects/{slugify(proj.title)}
                </span>
                <span className="chip !py-0 !px-1.5 !text-[9px] flex-none">{proj.category}</span>
              </div>

              <div className="relative h-[calc(100%-33px)] flex flex-col justify-between p-4 overflow-hidden">
                <span
                  className="absolute -right-1 -bottom-4 font-mono font-bold leading-none select-none text-[5.5rem]"
                  style={{ color: 'var(--faint)', opacity: 0.16 }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="font-mono text-[10px] text-[var(--faint)]">
                  {proj.subtitle}
                </span>

                {proj.metric && (
                  <span className="relative font-mono text-[11px] font-semibold text-[var(--accent)]">
                    → {proj.metric}
                  </span>
                )}
              </div>

              {proj.demoUrl && (
                <div className="absolute top-10 right-3">
                  <span className="chip !border-[var(--ok)] !text-[var(--ok)] !bg-transparent uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)]" />
                    Live
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--text-strong)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {proj.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mb-4 flex-grow leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="chip !text-[10px]">{tag}</span>
                ))}
                {proj.tags.length > 4 && (
                  <span className="chip !text-[10px] !bg-transparent">+{proj.tags.length - 4}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden flex flex-col"
          >
            <div className="term-bar !border-b !border-[var(--border)]">
              <span className="flex gap-1.5 flex-none">
                <span className="term-dot" style={{ backgroundColor: '#ea6962' }} />
                <span className="term-dot" style={{ backgroundColor: '#d8a657' }} />
                <span className="term-dot" style={{ backgroundColor: '#a9b665' }} />
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest font-mono">
                  {selectedProject.category}
                </span>
                <h3 id="case-study-title" className="text-xl font-bold text-[var(--text-strong)] truncate">
                  {selectedProject.title}
                </h3>
                {selectedProject.subtitle && (
                  <p className="text-xs text-[var(--faint)] font-mono truncate">{selectedProject.subtitle}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-md hover:bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--text-strong)] transition-colors flex-none"
                aria-label="Close case study"
              >
                <MdClose size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <section>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--faint)] mb-3 flex items-center gap-2 font-mono">
                      <MdArrowForward className="text-[var(--accent)]" /> Executive Summary
                    </h4>
                    <p className="text-[var(--muted)] leading-relaxed text-sm">
                      {selectedProject.description}
                    </p>

                    {selectedProject.metric && (
                      <p className="mt-4 font-mono text-sm font-semibold text-[var(--accent)]">
                        → {selectedProject.metric}
                      </p>
                    )}

                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <ul className="mt-5 space-y-2.5">
                        {selectedProject.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[var(--muted)] text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>

                  <section>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--faint)] mb-3 flex items-center gap-2 font-mono">
                      <MdCode className="text-[var(--accent)]" /> Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map(t => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--faint)] mb-4 font-mono">
                    Architecture Flow
                  </h4>
                  <div className="panel-sunken p-6">
                    {renderArchitectureFlow(selectedProject)}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[var(--border)] bg-[var(--surface-2)] flex flex-wrap justify-end gap-3">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink"
                >
                  <MdArrowForward size={16} />
                  Open Live Demo
                </a>
              )}
              {selectedProject.sourceUrl && (
                <a
                  href={selectedProject.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <MdCode size={16} />
                  View on GitHub
                </a>
              )}
              <button onClick={() => setSelectedProject(null)} className="btn-ghost">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
