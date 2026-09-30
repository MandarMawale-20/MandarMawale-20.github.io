
import React from 'react';
import { MdMail, MdPhone, MdHub, MdCode } from 'react-icons/md';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // Bump this when the portfolio content changes — it is a freshness signal for search and AI engines
  const lastUpdated = 'September 2026';

  const socialLinks = [
    { name: 'LinkedIn', icon: MdHub, href: 'https://www.linkedin.com/in/mandar-mawale/' },
    { name: 'GitHub', icon: MdCode, href: 'https://github.com/MandarMawale-20' },
    { name: 'Email', icon: MdMail, href: 'mailto:mawalemandar2004@gmail.com' },
    { name: 'Phone', icon: MdPhone, href: 'tel:+919867583521' },
  ];

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--surface-2)] py-12 px-6 lg:px-20 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="font-mono text-base font-bold text-[var(--text-strong)] tracking-tight">
            <span className="text-[var(--accent)]">~/</span>mandar_mawale
          </h2>
          <p className="text-[var(--muted)] text-sm">
            © {currentYear} Mandar Mawale. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isDirect = link.href.startsWith('mailto:') || link.href.startsWith('tel:');
            return (
              <a
                key={link.name}
                href={link.href}
                target={isDirect ? undefined : '_blank'}
                rel={isDirect ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                title={link.name}
                aria-label={link.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Crawlers only: file discovery + content freshness. Not rendered visually. */}
      <div className="sr-only">
        <p>Portfolio last updated {lastUpdated}.</p>
        <p>
          Site files: <a href="/Mandar_Mawale.pdf">Mandar_Mawale.pdf</a>,{' '}
          <a href="/llm.txt">llm.txt</a>, <a href="/sitemap.xml">sitemap.xml</a>
        </p>
      </div>
    </footer>
  );
};
