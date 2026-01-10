import React from 'react';
import { Experience } from '../types';
import { MdCommit, MdCallSplit, MdLocationOn, MdChevronRight } from 'react-icons/md';

export const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      role: 'Web Developer Intern',
      company: 'Utkarsha Interiors',
      period: '2025 – 2026',
      location: 'Full-Stack Development',
      tags: ['Frontend', 'Backend', 'Database', 'Web Development'],
      achievements: [
        'Developed and maintained company website features and customer request forms.',
        'Implemented real-time forwarding of customer inquiries to marketing/PR teams.',
        'Ensured efficient backend processing and database handling of website data.'
      ],
      active: true
    },
    {
      id: '2',
      role: 'Trainee Intern & Python Mentor',
      company: 'Campus Credentials',
      period: '2025',
      location: 'Campus Training Program',
      tags: ['Python', 'Mentoring', 'Problem-Solving'],
      achievements: [
        'Completed a supervised campus recruitment training program.',
        'Assisted students as a Python trainer and debugger.',
        'Resolved multiple Python program issues, improving correctness and execution.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="font-mono bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl overflow-hidden mb-12">
        <div className="bg-gray-300 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-xs text-slate-500 font-mono tracking-wide uppercase">bash — log_viewer</div>
          <div className="w-8"></div>
        </div>
        <div className="p-8">
          <h2 className="text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 mb-4">
            ./experience_log.sh
          </h2>
          <div className="flex flex-wrap gap-2 text-sm font-mono text-gray-700 dark:text-slate-300">
            <span className="text-green-600 dark:text-green-400">mandar@system</span>:<span className="text-cyan-600 dark:text-cyan-400">~/work_history</span>$
            <span className="text-gray-900 dark:text-white"> grep -r "achievements" . --sort=date</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col pl-4 md:pl-12">
        <div className="absolute left-[20px] md:left-[52px] top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-slate-800"></div>
        
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="relative mb-12 last:mb-0">
            <div className="absolute left-[-28px] md:left-[-60px] top-2 flex items-center justify-center bg-transparent p-1 z-10">
              <div className={exp.active ? "text-cyan-600 dark:text-[#00e5ff] drop-shadow-sm" : "text-gray-500 dark:text-slate-700"}>
                {exp.active ? (
                  <MdCommit size={32} />
                ) : (
                  <MdCallSplit size={32} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-2 font-mono ml-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs md:text-sm px-2 py-0.5 rounded border ${exp.active ? 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-500/10' : 'text-gray-700 dark:text-slate-500 border-gray-400 dark:border-gray-600'}`}>
                  [{exp.period}]
                </span>
              </div>
            </div>

            <div className={`bg-gray-200 dark:bg-gray-900 border rounded-lg p-6 md:p-8 ml-4 transition-all group hover:border-cyan-500/40 ${exp.active ? 'border-cyan-500/30 shadow-xl' : 'border-gray-300 dark:border-gray-700'}`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-300 dark:border-gray-700 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                  <p className="text-lg text-gray-700 dark:text-slate-400 font-mono">@{exp.company}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-slate-400 bg-gray-300 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700">
                  <div className="text-cyan-400">
                    <MdLocationOn size={14} />
                  </div>
                  <span className="font-mono">{exp.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-[10px] md:text-xs font-mono text-gray-600 dark:text-slate-400 group-hover:border-cyan-500/30 transition-colors">
                    --{tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 font-mono text-sm md:text-base text-gray-700 dark:text-slate-400">
                <p className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold">
                  <div className="flex-shrink-0">
                    <MdChevronRight size={14} />
                  </div>
                  cat ./achievements.txt
                </p>
                <div className="pl-6 border-l border-gray-300 dark:border-gray-700 space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-gray-600 dark:text-slate-600 select-none">0{i + 1}</span>
                      <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-8 ml-4 flex items-center py-4">
          <div className="font-mono text-lg text-slate-500">
            <span className="text-green-500">mandar@system</span>:<span className="text-cyan-400">~/work_history</span>$ 
            <span className="text-slate-900 dark:text-white"> cd ../skills</span>
            <span className="blinking-cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};