import React, { useState } from 'react';
import { Project } from '../types';
import { Terminal } from './Terminal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'AgentED',
      category: 'AI / ML',
      description: 'AI-Powered Personalized Study Assistant - A full-stack AI platform that personalizes study plans, quizzes, and feedback using multi-agent orchestration.',
      tags: ['Python', 'FastAPI', 'LangChain', 'MongoDB', 'ChromaDB', 'Next.js', 'Google Gemini', 'Tavily'],
      status: 'LIVE',
      image: '/AgentED Img.jpg',
    },
    {
      id: '2',
      title: 'StreamSync',
      category: 'CLOUD',
      description: 'Globally Synchronized Video Streaming System - A scalable platform delivering personalized video streams synchronized to a global timeline using AWS infrastructure.',
      tags: ['AWS EC2', 'S3', 'CloudFront', 'Redis', 'PostgreSQL'],
      status: 'LIVE',
      image: '/StreamSync.png',
    },
    {
      id: '3',
      title: 'VoiceCare',
      category: 'VOICE ASSISTANT',
      description: 'Voice-Based Personal Assistant - A privacy-focused desktop voice assistant designed for reminders and task management, especially for elderly users.',
      tags: ['Python', 'Vosk API', 'pyttsx3', 'Speech Recognition', 'Tkinter'],
      status: 'LIVE',
      image: '/Voice Care.png',
    }
  ];

  const categories = ['ALL', 'AI / ML', 'CLOUD', 'VOICE ASSISTANT'];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col gap-4 mb-12 relative">
        <div className="flex items-center gap-3">
          <div className="size-2 bg-green-400 rounded-full animate-ping"></div>
          <p className="text-green-600 dark:text-green-400 font-mono text-xs tracking-widest font-bold">SYSTEM STATUS: ONLINE</p>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
          Systems Built
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded border font-mono text-xs font-bold transition-all ${
              filter === cat 
                ? 'bg-[#38bdf8]/10 border-[#38bdf8] text-[#38bdf8]' 
                : 'bg-gray-200 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((proj) => (
          <article 
            key={proj.id} 
            onClick={() => setSelectedProject(proj)}
            className="group cursor-pointer bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden hover:border-[#38bdf8]/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent md:hidden"></div>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-[#38bdf8] text-[10px] font-mono uppercase tracking-[0.2em] mb-2">{proj.category}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#38bdf8] transition-colors">{proj.title}</h3>
                <p className="text-gray-700 dark:text-slate-400 text-sm mb-6">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-[10px] font-mono text-gray-700 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <Terminal 
              title={`arch_view::${selectedProject.title.toLowerCase().replace(/\s/g, '_')}`} 
              headerIcon="architecture"
              footer={
                <div className="flex justify-end gap-4">
                  <button onClick={() => setSelectedProject(null)} className="px-6 py-2 border border-slate-700 text-slate-400 hover:text-white font-mono text-xs rounded transition-all">EXIT_LOGS</button>
                  <button className="px-6 py-2 bg-[#38bdf8] text-[#020617] font-bold font-mono text-xs rounded hover:bg-[#0ea5e9] transition-all">VIEW_RESOURCES</button>
                </div>
              }
            >
              <div className="grid md:grid-cols-2 gap-8 py-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#38bdf8] text-xs font-mono uppercase mb-2 tracking-widest">&gt; Technical_Summary</h4>
                    <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">{selectedProject.description} The system utilizes distributed caching and optimized model sharding to ensure sub-100ms response times under heavy concurrent loads.</p>
                  </div>
                  <div>
                    <h4 className="text-[#38bdf8] text-xs font-mono uppercase mb-2 tracking-widest">&gt; Stack_Trace</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-cyan-100 dark:bg-gray-800 text-cyan-700 dark:text-cyan-400 text-xs font-mono rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-300 dark:bg-gray-950 p-6 rounded-lg border border-gray-300 dark:border-gray-800 font-mono text-[10px] space-y-4">
                  <div className="flex justify-between items-center text-gray-700 dark:text-slate-500">
                    <span>Architecture Diagram</span>
                    <span className="text-green-600 dark:text-green-500">v1.2-Stable</span>
                  </div>
                  <div className="border-l-2 border-[#38bdf8]/30 pl-4 space-y-2">
                    <div className="text-gray-700 dark:text-slate-400">[Client_Req] --&gt; [Nginx_Edge]</div>
                    <div className="text-gray-700 dark:text-slate-400 pl-4">|-- Load_Balancer (RR)</div>
                    <div className="text-gray-900 dark:text-white pl-8">|-- Microservice_A (Primary)</div>
                    <div className="text-cyan-600 dark:text-cyan-400 pl-12">|-- Vector_DB (Pinecone)</div>
                    <div className="text-purple-600 dark:text-purple-400 pl-12">|-- LLM_Inference_Cluster</div>
                    <div className="text-gray-700 dark:text-slate-400 pl-4">|-- Cache (Redis_v7)</div>
                  </div>
                  <div className="pt-4 border-t border-gray-400 dark:border-gray-800 text-gray-600 dark:text-slate-600 italic">
                    -- System initialized in production environment.
                  </div>
                </div>
              </div>
            </Terminal>
          </div>
        </div>
      )}
    </div>
  );
};