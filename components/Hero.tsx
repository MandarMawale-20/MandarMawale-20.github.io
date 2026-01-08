import React, { useState, useEffect } from 'react';
import { Terminal } from './Terminal';

export const Hero: React.FC = () => {
  const [cpuLoad, setCpuLoad] = useState(12.4);
  const [memUsage, setMemUsage] = useState(4.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => Math.max(8.0, Math.min(32.0, prev + (Math.random() * 6 - 3))));
      setMemUsage(prev => Math.max(3.8, Math.min(5.2, prev + (Math.random() * 0.2 - 0.1))));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-cyan-500"></span>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">System.Initialization()</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          Mandar Mawale
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-300 dark:to-slate-500 mb-6">
          Aspiring AI & Cloud Engineer
        </h2>
        <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 font-medium dark:font-normal">
          I build intelligent, scalable systems using Agentic AI, LLMs, and cloud-native backend architectures. Focused on turning complex ideas into production-ready applications.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-400 text-white dark:text-[#020617] font-bold rounded-lg transition-all shadow-lg flex items-center gap-2 group"
          >
            <span>VIEW PROJECTS</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button 
            onClick={() => scrollTo('resume')}
            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-900 dark:text-white font-bold rounded-lg transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg text-cyan-700 dark:text-cyan-400">download</span>
            <span>DOWNLOAD CV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        <div className="lg:col-span-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Me</h3>
            <p className="text-slate-700 dark:text-slate-400 text-lg leading-relaxed italic border-l-4 border-slate-300 dark:border-slate-800 pl-6 font-medium dark:font-normal">
              I'm a Computer Engineering undergraduate with a strong builder mindset and hands-on experience in AI systems, backend development, and cloud infrastructure.
            </p>
          </div>
          
          <Terminal title="system_bio.py" headerIcon="lock" className="h-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/4 shrink-0">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                  <img 
                    src="https://picsum.photos/seed/mandar/600/600" 
                    alt="Portrait" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <div className="flex-grow space-y-4 text-sm md:text-base leading-relaxed">
                <div>
                  <span className="text-purple-400">class</span> <span className="text-yellow-500">AIEngineer</span>(<span className="text-cyan-400">Developer</span>):
                </div>
                <div className="pl-4">
                  <p className="text-gray-700 dark:text-slate-400 mb-4">
                    I enjoy designing <span className="text-green-500 dark:text-green-400">agentic AI workflows</span>, <span className="text-green-500 dark:text-green-400">RAG pipelines</span>, and <span className="text-green-500 dark:text-green-400">scalable APIs</span>.
                  </p>
                  <span className="text-purple-400">def</span> <span className="text-blue-400">get_focus</span>(self):
                </div>
                <div className="pl-8">
                  <span className="text-purple-400">return</span> <span className="text-green-400">"Clean architecture, scalability, usability"</span>
                  <span className="blinking-cursor"></span>
                </div>
              </div>
            </div>
          </Terminal>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-200 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg">
            <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center bg-gray-300 dark:bg-gray-800">
              <h3 className="text-white font-bold text-lg">System Specs</h3>
              <span className="material-symbols-outlined text-slate-500">settings_suggest</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-300 dark:divide-gray-700 border-b border-gray-300 dark:border-gray-700 text-xs">
              <div className="p-4">
                <p className="text-gray-600 dark:text-slate-500 uppercase font-mono mb-1">OS_Env</p>
                <p className="text-gray-900 dark:text-white font-mono">Arch Linux</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-slate-500 uppercase font-mono mb-1">Editor</p>
                <p className="text-gray-900 dark:text-white font-mono">Neovim</p>
              </div>
            </div>
            <div className="p-4 text-xs font-mono text-gray-600 dark:text-slate-500 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>CPU Load:</span>
                  <span className="text-green-600 dark:text-green-400">{cpuLoad.toFixed(1)}%</span>
                </div>
                <div className="h-1 w-full bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 transition-all duration-1000" style={{ width: `${cpuLoad}%` }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span className="text-blue-600 dark:text-blue-400">{memUsage.toFixed(1)}GB / 64GB</span>
                </div>
                <div className="h-1 w-full bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${(memUsage/64)*100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 p-6 shadow-lg">
            <h4 className="text-[10px] font-mono uppercase text-gray-600 dark:text-slate-500 mb-4 tracking-widest">Active_Uptime</h4>
            <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono mb-2">99.9%</div>
            <div className="flex items-center gap-2 text-xs text-green-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              ALL SYSTEMS OPTIMAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};