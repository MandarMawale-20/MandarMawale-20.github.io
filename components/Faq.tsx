import React, { useState } from 'react';
import { MdFolder } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
  tags?: string[];
}

interface FAQGroup {
  file: string;
  label: string;
  items: FAQItem[];
}

const technical: FAQItem[] = [
  {
    id: 't1',
    question: 'What kind of problems do you enjoy solving?',
    answer:
      'I enjoy problems where AI has to work reliably inside a real backend system, not just in a demo. I focus on LLM workflows, RAG, semantic search with vector databases, and building resilient API pipelines that handle real-world edge cases.',
    tags: ['LLM workflows', 'RAG', 'Vector search', 'API pipelines']
  },
  {
    id: 't2',
    question: 'What project are you most proud of?',
    answer:
      'Anantum is an offline AI voice assistant I built to explore what is possible with local AI on limited hardware. It pushed me to work with quantized GGUF models using llama.cpp, low-latency vector search with FAISS, and speech recognition using Whisper, without relying on external cloud APIs for its core AI workflow.',
    tags: ['GGUF', 'llama.cpp', 'FAISS', 'Whisper']
  },
  {
    id: 't3',
    question: 'What has been one of your biggest technical challenges?',
    answer:
      'Working with real-world legal documents at NearLaw taught me that data ingestion and document quality can be harder than the AI itself. Dealing with OCR failures, unusual PDF formats and extraction issues has pushed me to design more resilient processing pipelines with fallback mechanisms instead of assuming every document will be clean.',
    tags: ['OCR', 'PDF parsing', 'Pipeline resilience']
  },
  {
    id: 't4',
    question: 'What are you currently learning?',
    answer: 'I am currently exploring two main areas:',
    bullets: [
      'Backend and AI integration: exploring the Spring ecosystem and Spring AI to understand how AI capabilities can be integrated into Java backend applications.',
      'Agentic architectures: exploring frameworks like CrewAI and LangGraph, along with local inference using GGUF and llama.cpp, to build agent workflows that are easier to observe, evaluate and control.'
    ],
    tags: ['Spring AI', 'CrewAI', 'LangGraph']
  },
  {
    id: 't5',
    question: 'How do you approach designing scalable systems?',
    answer:
      'I start by understanding the requirements, defining data boundaries, and identifying state transitions and edge cases. I prefer decoupled architectures and consider approaches like Redis caching, asynchronous worker queues and structured schemas where they fit the problem, helping systems handle failures without affecting the entire pipeline.',
    tags: ['Redis', 'Async workers', 'Structured schemas']
  }
];

const beyond: FAQItem[] = [
  {
    id: 'b1',
    question: 'What do you enjoy doing outside of coding?',
    answer:
      'Outside of software, I enjoy reading and following geopolitics and global economics. I am fascinated by how macroeconomic shifts, trade policies and global supply chains affect technology adoption and emerging markets.'
  },
  {
    id: 'b2',
    question: 'What are you naturally curious about?',
    answer:
      'I am curious about how ideas turn into actual products. I like understanding not just how something is built, but why it should exist, who would use it, and what makes it sustainable over time.'
  },
  {
    id: 'b3',
    question: 'What do you enjoy about working with other people?',
    answer:
      'I enjoy discussing ideas, challenging assumptions early, and figuring things out together. I like environments where people openly discuss architectural trade-offs, share what they know and learn from different perspectives.'
  },
  {
    id: 'b4',
    question: 'What are you trying to get better at?',
    answer:
      'I am working on connecting technical design with product outcomes. I want to understand how engineering decisions, from latency targets to database schemas, affect user experience, customer needs and business goals.'
  },
  {
    id: 'b5',
    question: "What would you be doing if you weren't working in software?",
    answer:
      'I would probably be building something of my own, perhaps around product strategy or market analysis. I enjoy understanding complex systems, spotting opportunities and turning ideas into something useful, and I would want to do that regardless of the medium.'
  }
];

const groups: FAQGroup[] = [
  { file: 'technical_faq.md', label: 'Technical', items: technical },
  { file: 'beyond_the_code.md', label: 'Beyond the Code', items: beyond }
];

const allQuestionIds = [...technical, ...beyond].map((item) => item.id);

interface FaqSectionProps {
  /**
   * Renders every answer open. Used by the prerender entry so search engines and
   * AI crawlers receive the answers in the static HTML; the client app starts collapsed.
   */
  defaultOpen?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ defaultOpen = false }) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen ? allQuestionIds : []);

  // Single accordion item open at a time (unless everything was opened server-side)
  const toggle = (id: string) => setOpenIds((current) => (current.includes(id) ? [] : [id]));

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <SectionHeader
          cmd="ls faq/"
          title="A few things about how I think, build and spend my time."
          sub="Frequently asked questions about how I build, what I'm learning and what I do outside of code — two files, ten answers. Open one to read it."
        />
      </div>

      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.file}
            aria-label={`${group.label} frequently asked questions`}
            className="panel overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 bg-[var(--surface-2)] border-b border-[var(--border)]">
              <div className="flex items-center gap-3 min-w-0 text-[var(--accent)]">
                <MdFolder size={18} className="shrink-0" />
                <span className="font-mono text-sm md:text-base font-semibold text-[var(--text-strong)] truncate">
                  {group.file}
                </span>
              </div>
              <span className="font-mono text-[10px] md:text-xs text-[var(--faint)] shrink-0">
                {group.items.length} questions
              </span>
            </div>

            <ul className="px-5 md:px-6">
              {group.items.map((item, index) => {
                const isOpen = openIds.includes(item.id);

                return (
                  <li key={item.id} className="border-b border-[var(--border)] last:border-b-0">
                    <button
                      type="button"
                      id={`faq-question-${item.id}`}
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      className="group w-full flex items-start gap-3 py-4 text-left"
                    >
                      <span className="font-mono text-xs text-[var(--accent)] mt-1 w-6 shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-sm md:text-base font-medium text-[var(--text)] group-hover:text-[var(--text-strong)] transition-colors">
                        {item.question}
                        {isOpen && (
                          <span className="blinking-cursor ml-1.5 align-middle text-[var(--accent)]" aria-hidden="true"></span>
                        )}
                      </span>
                      <span className="font-mono text-[var(--faint)] group-hover:text-[var(--accent)] transition-colors mt-0.5">
                        {isOpen ? '▾' : '▸'}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        className="pb-5 pl-9 pr-2 animate-in fade-in duration-200"
                      >
                        <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </p>

                        {item.bullets && (
                          <ul className="mt-3 space-y-2">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-start gap-2.5 text-[var(--muted)] text-sm leading-relaxed"
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.tags && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span key={tag} className="chip uppercase tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-5 border-t border-dashed border-[var(--border)]" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};
