import React, { useState, useEffect, useRef } from 'react';
import { MdTerminal } from 'react-icons/md';

export const CLI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Mandar-OS [Version 1.2.0]',
    '(c) 2026 Mandar Mawale. All systems nominal.',
    '',
    'Type //help to see available commands.'
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, input]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory(prev => [...prev, `visitor@mandar-pc:~$ ${input}`]);

    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    if (cmd === 'who are you?' || cmd === 'whoami' || cmd === 'bio') {
      setHistory(prev => [...prev,
        '-------------------------------------------------',
        'IDENTITY: Mandar Mawale',
        'ROLE: AI Engineer & Software Engineer',
        'LOC: Mumbai, India',
        'BIO: I build AI-powered products and backend systems using Python, LLMs, RAG, semantic search and modern backend architectures.',
        '-------------------------------------------------'
      ]);
    } else if (cmd === 'cat resume.txt' || cmd === 'resume') {
      setHistory(prev => [...prev,
        'Reading file: resume.txt...',
        '-------------------------------------------------',
        'MANDAR MAWALE - RESUME SUMMARY',
        '-------------------------------------------------',
        '* AI Engineer Intern @ ALL MR ONLINE (NearLaw) (Feb 2026 - Present): production AI systems over 18M+ legal records - document processing, OCR, retrieval and multi-stage LLM workflows.',
        '* Web Developer Intern @ Utkarsha Interiors (Oct 2025 - Dec 2025): full-stack Python/FastAPI apps and a 40% page-load improvement.',
        '* Technical Mentor @ Campus Credentials (Jan 2025): mentored 30+ students in Python, algorithms and problem solving.',
        '* SKILLS: AI/LLM (LLMs, RAG, LangGraph, LangChain, LLM Evaluation), Backend (Python, FastAPI, REST APIs), Retrieval & Data (ChromaDB, Pinecone, FAISS, PostgreSQL, MongoDB, Redis), Document AI (OCR, PDF Parsing), Infrastructure (Docker, vLLM, LiteLLM)',
        '-------------------------------------------------',
        'Type //resume to download the full PDF version.'
      ]);
    } else {
      switch (cmd) {
        case 'ls':
          setHistory(prev => [...prev, 'drwxr-xr-x  home/', 'drwxr-xr-x  experience/', 'drwxr-xr-x  skills/', 'drwxr-xr-x  projects/', '-rw-r--r--  resume.txt', '-rwxr-xr-x  contact.sh']);
          break;
        case '//home':
        case 'cd home':
          scrollTo('home');
          break;
        case '//skills':
        case 'cd skills':
          scrollTo('skills');
          break;
        case '//experience':
        case 'cd experience':
          scrollTo('experience');
          break;
        case '//projects':
        case 'cd projects':
          scrollTo('projects');
          break;
        case '//contact':
        case 'cd contact':
        case './contact.sh':
          scrollTo('contact');
          break;
        case '//help':
        case 'help':
          setHistory(prev => [...prev,
            'COMMANDS:',
            '  ls             - List directory contents',
            '  whoami         - Display user profile',
            '  cat resume.txt - Print text resume',
            '  cd [folder]    - Jump to site section',
            '  clear          - Wipe terminal history',
            '  exit           - Kill current session'
          ]);
          break;
        case 'clear':
          setHistory([]);
          break;
        case 'exit':
          setIsOpen(false);
          break;
        default:
          setHistory(prev => [...prev, `bash: command not found: ${cmd}. Try 'help' for support.`]);
          break;
      }
    }
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono">
      {isOpen ? (
        <div className="w-[320px] md:w-[500px] h-[350px] bg-[var(--surface)] border border-[var(--border-strong)] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="term-bar">
            <span className="flex gap-1.5 flex-none">
              <span className="term-dot" style={{ backgroundColor: '#ea6962' }} />
              <span className="term-dot" style={{ backgroundColor: '#d8a657' }} />
              <span className="term-dot" style={{ backgroundColor: '#a9b665' }} />
            </span>
            <span className="text-[10px] text-[var(--faint)] font-bold uppercase tracking-widest flex-1 min-w-0 truncate">
              Mandar_Terminal_v1.2
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--faint)] hover:text-[var(--accent)] text-xs flex-none px-1"
              aria-label="Close terminal"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-1 text-xs bg-[var(--surface-2)]">
            {history.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith('visitor')
                    ? 'text-[var(--text-strong)] font-bold'
                    : 'text-[var(--muted)]'
                }
              >
                {line}
              </div>
            ))}
            <div className="flex items-center flex-wrap">
              <span className="text-[var(--accent)] font-bold mr-2">visitor@mandar-pc:~$</span>
              <span className="text-[var(--text-strong)] break-all">{input}</span>
              <span className="blinking-cursor"></span>
            </div>
          </div>

          <form onSubmit={handleCommand} className="p-4 bg-[var(--surface)] border-t border-[var(--border)] flex items-center">
            <label htmlFor="cli-input" className="sr-only">Terminal Command</label>
            <input
              id="cli-input"
              ref={inputRef}
              type="text"
              name="cli-command"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-[var(--text-strong)] text-xs flex-grow font-mono"
              spellCheck={false}
              autoComplete="off"
              placeholder="Enter command..."
            />
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open terminal"
          className="w-14 h-14 btn-ink !rounded-lg !p-0 !border-[var(--accent)] relative shadow-lg hover:-translate-y-0.5"
        >
          <MdTerminal size={24} className="text-[var(--accent)]" />
        </button>
      )}
    </div>
  );
};
