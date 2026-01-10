import React from 'react';
import { MdTerminal, MdSmartToy, MdDns, MdStorage, MdCloud, MdAnalytics, MdBuild, MdDonutLarge, MdUpgrade } from 'react-icons/md';

export const Skills: React.FC = () => {
  const modules = [
    {
      title: "AI / LLM & Agentic Systems",
      module: "agentic_ai",
      icon: MdSmartToy,
      skills: ["LangChain", "LangGraph", "Google Gemini", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Tool Calling & Agent Orchestration"]
    },
    {
      title: "Backend & API Development",
      module: "backend_dev",
      icon: MdDns,
      skills: ["FastAPI", "Flask", "Spring", "Spring Boot", "REST APIs", "JSON", "Session-based Architectures"]
    },
    {
      title: "Databases & Vector Stores",
      module: "databases",
      icon: MdStorage,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ChromaDB", "Pinecone", "MinIO"]
    },
    {
      title: "Cloud Platforms",
      module: "cloud_infra",
      icon: MdCloud,
      skills: ["AWS (EC2, S3, CloudFront)", "Oracle Cloud", "Deployment & Scaling"]
    },
    {
      title: "Machine Learning & NLP",
      module: "ml_nlp",
      icon: MdAnalytics,
      skills: ["Scikit-learn", "Pandas", "NLTK"]
    },
    {
      title: "Tools & IDEs",
      module: "dev_tools",
      icon: MdBuild,
      skills: ["Git", "VS Code", "IntelliJ IDEA", "Android Studio", "Linux"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col gap-3 border-b border-slate-200 dark:border-slate-800 pb-8 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-[#00e5ff]/80">
          <div className="flex-shrink-0">
            <MdTerminal size={14} />
          </div>
          /home/mandar/skills
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
          <span className="text-cyan-600 dark:text-[#00e5ff] font-mono mr-2">root@ai-engine:</span>Skills Matrix<span className="animate-pulse text-cyan-600 dark:text-[#00e5ff] ml-1">_</span>
        </h2>
        <p className="text-gray-700 dark:text-slate-400 mt-2 font-mono">
          &gt; Initializing module: <span className="text-blue-600 dark:text-cyan-400">Neural Architecture & Cloud Infrastructure</span><br/>
          &gt; Status: <span className="text-green-600 dark:text-green-400">Optimized for production</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-8 border border-gray-300 dark:border-gray-700 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-cyan-600 dark:text-cyan-400 text-[10px] font-mono uppercase tracking-widest mb-1">System Capability</p>
                <p className="text-gray-900 dark:text-white text-xl font-bold">Proficiency Index</p>
              </div>
              <div className="text-cyan-600 dark:text-cyan-400">
                <MdDonutLarge size={24} />
              </div>
            </div>
            
            <div className="flex items-end gap-3 mb-10">
              <p className="text-6xl font-bold text-gray-900 dark:text-white leading-none">84<span className="text-2xl text-cyan-600 dark:text-cyan-400/80">%</span></p>
              <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded text-green-400 text-[10px] font-mono mb-1">
                <div className="flex-shrink-0">
                  <MdUpgrade size={12} />
                </div>
                ACTIVE DEVELOPMENT
              </div>
            </div>

            <div className="space-y-6">
              {[
                { label: "AI / ML", value: 76, color: "bg-cyan-500" },
                { label: "Backend", value: 81, color: "bg-indigo-500" },
                { label: "Cloud", value: 76, color: "bg-blue-500" },
                { label: "DevOps", value: 67, color: "bg-purple-500" }
              ].map((skill) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500 uppercase">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-1000`}
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {modules.map((mod) => {
            const IconComponent = mod.icon;
            return (
            <div key={mod.title} className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden group hover:border-cyan-500/30 transition-all shadow-lg">
              <div className="bg-gray-300 dark:bg-gray-800 px-6 py-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold">{mod.title}</h3>
                    <p className="text-cyan-400/60 text-[10px] font-mono uppercase tracking-widest">module: {mod.module}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {mod.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-sm font-mono text-gray-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 ml-4 flex items-center py-4">
        <div className="font-mono text-lg text-slate-500">
          <span className="text-green-500">mandar@system</span>:<span className="text-cyan-400">~/skills</span>$ 
          <span className="text-slate-900 dark:text-white"> cloudctl status --all</span>
          <span className="blinking-cursor"></span>
        </div>
      </div>
    </div>
  );
};