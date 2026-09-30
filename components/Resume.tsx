import React from 'react';
import { MdDownload, MdSchool, MdWorkspacePremium, MdWorkOutline } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

export const ResumeSection: React.FC = () => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mandar_Mawale.pdf';
    link.download = 'Mandar_Mawale.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="panel p-8 md:p-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
          <div className="space-y-6 flex-1 text-center md:text-left">
            <SectionHeader
              cmd="cat resume.pdf"
              title="Curriculum Vitae"
              sub="A one-page summary of my experience building production AI systems, backend services and AI products."
            />

            <div className="pt-2 flex justify-center md:justify-start">
              <button onClick={handleCVDownload} className="btn-ink !px-8 !py-3.5">
                <MdDownload size={18} />
                <span>Download Full CV (PDF)</span>
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-3 shrink-0">
            {[
              {
                icon: MdWorkOutline,
                title: 'Current Role',
                subtitle: 'AI Engineer Intern',
                detail: 'NearLaw (ALL MR ONLINE) · Feb 2026 – Present'
              },
              {
                icon: MdSchool,
                title: 'Education',
                subtitle: 'B.Tech in Computer Engineering',
                detail: 'Mumbai University (CGPA: 8.68/10)'
              },
              {
                icon: MdWorkspacePremium,
                title: 'Certifications',
                subtitle: 'Oracle Cloud & AI Associate',
                detail: 'CS50 Python, LangChain & Vector Databases'
              }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-[var(--surface-2)] p-4 rounded-lg border border-[var(--border)]">
                  <div className="w-11 h-11 rounded-md bg-[var(--surface)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[var(--text-strong)]">{item.title}</p>
                    <p className="text-xs text-[var(--muted)] font-medium">{item.subtitle}</p>
                    <p className="text-[10px] font-mono text-[var(--faint)] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
