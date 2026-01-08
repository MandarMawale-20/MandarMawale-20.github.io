import React from 'react';
import { Terminal } from './Terminal';

export const ResumeSection: React.FC = () => {
  const handleCVDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Mandar_Mawale_CV_2026.pdf';
    link.download = 'Mandar_Mawale_CV_2026.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end border-b border-slate-200 dark:border-slate-800 pb-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_cyan]"></span>
            <span className="text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest">Information Retrieval Protocol</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
            ENGINEERING  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400">DOSSIER</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl font-light">
            Download the comprehensive dossier containing my engineering specifications, professional history, and full technical stack.
          </p>
        </div>

        <div className="shrink-0">
          <button 
            onClick={handleCVDownload}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 px-10 rounded-xl transition-all shadow-xl group scale-110 origin-right active:scale-100"
          >
            <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
            <span>DOWNLOAD CV (PDF)</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: 'wifi_tethering', title: 'Connection', val: 'SECURE', sub: ':: VERIFIED ::' },
          { icon: 'lock', title: 'Encryption', val: 'AES-256', sub: ':: 128-BIT ::' },
          { icon: 'deployed_code', title: 'Version', val: 'v4.2.0', sub: 'UPDATE: 24H AGO' }
        ].map((item, i) => (
          <div key={i} className="bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-6 rounded-lg relative overflow-hidden group hover:border-blue-500/50 transition-all shadow-md">
            <span className="material-symbols-outlined absolute -right-2 -top-2 text-6xl text-gray-400 dark:text-gray-800 group-hover:text-blue-500/10 transition-colors">{item.icon}</span>
            <p className="text-gray-700 dark:text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-1">{item.title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.val}</p>
            <p className="text-[10px] font-mono text-gray-600 dark:text-slate-600 mt-4">{item.sub}</p>
          </div>
        ))}
      </div>

      <Terminal title="guest@mandar-ai:~/downloads" headerIcon="lock" className="min-h-[350px]">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-grow p-4 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">➜</span>
                <span className="text-cyan-600 dark:text-cyan-400">~</span>
                <span className="text-gray-900 dark:text-white font-bold">./initiate_transfer.sh --target=resume</span>
              </p>
              <div className="pl-4 border-l border-gray-300 dark:border-gray-700 space-y-1 text-xs">
                <p className="text-gray-600 dark:text-slate-500">[10:42:01] <span className="text-gray-800 dark:text-slate-300">Establishing handshake...</span></p>
                <p className="text-gray-600 dark:text-slate-500">[10:42:02] <span className="text-gray-800 dark:text-slate-300">Authenticating user credentials... <span className="text-green-600 dark:text-green-400 font-bold">OK</span></span></p>
              </div>
            </div>

            <div className="bg-gray-300 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 p-6 rounded text-xs space-y-2 max-w-md shadow-sm">
              <div className="grid grid-cols-[100px_1fr] gap-x-2">
                <span className="text-gray-700 dark:text-slate-500 uppercase">FILE:</span>
                <span className="text-gray-900 dark:text-white">Mandar_Mawale_CV_2026.pdf</span>
                <span className="text-gray-700 dark:text-slate-500 uppercase">STATUS:</span>
                <span className="text-green-600 dark:text-green-400 font-bold">READY_FOR_HANDSHAKE</span>
              </div>
            </div>

            <p className="flex items-center gap-1 text-gray-700 dark:text-slate-500 pt-4 italic">
              Terminal sequence idle... Waiting for interaction
              <span className="blinking-cursor"></span>
            </p>
          </div>
        </div>
      </Terminal>
    </div>
  );
};