import React, { useState, useEffect, useRef } from 'react';

export const CLI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Mandar-OS [Version 1.2.0]',
    '(c) 2024 Mandar Mawale. All systems nominal.',
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
        'ROLE: AI Engineer & Systems Architect',
        'LOC: Silicon Valley / Remote',
        'BIO: Specializing in high-throughput backend services and fine-tuned LLM deployments.',
        '-------------------------------------------------'
      ]);
    } else if (cmd === 'cat resume.txt' || cmd === 'resume') {
      setHistory(prev => [...prev, 
        'Reading file: resume.txt...',
        '-------------------------------------------------',
        'MANDAR MAWALE - RESUME SUMMARY',
        '-------------------------------------------------',
        '* AI ENGINEER @ NeuralNet_Inc (2023-Present)',
        '* BACKEND DEV @ ServerSide_Solutions (2021-2023)',
        '* SKILLS: PyTorch, FastAPI, Docker, K8s, AWS',
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
        <div className="w-[320px] md:w-[500px] h-[350px] bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px] text-cyan-400">terminal</span>
              <span className="text-[10px] text-gray-600 dark:text-slate-400 font-bold uppercase tracking-widest">Mandar_Terminal_v1.2</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#ffbd2e]"></button>
              <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f56]"></button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-1 text-xs scrollbar-hide">
            {history.map((line, i) => (
              <div key={i} className={line.startsWith('visitor') ? 'text-gray-900 dark:text-white font-bold' : 'text-cyan-600 dark:text-cyan-400/90'}>
                {line}
              </div>
            ))}
            <div className="flex items-center flex-wrap">
              <span className="text-green-600 dark:text-green-400 font-bold mr-2">visitor@mandar-pc:~$</span>
              <span className="text-gray-900 dark:text-white break-all">{input}</span>
              <span className="blinking-cursor"></span>
            </div>
          </div>

          <form onSubmit={handleCommand} className="p-4 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-800 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-gray-900 dark:text-white text-xs flex-grow font-mono"
              spellCheck={false}
              autoComplete="off"
              placeholder="Enter command..."
            />
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-xl hover:scale-105 transition-all group"
        >
          <span className="material-symbols-outlined text-2xl">terminal</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};