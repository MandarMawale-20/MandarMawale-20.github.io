import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { usePageSEO } from './hooks/usePageSEO';
import type { SectionKey } from './utils/seoConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionSkeleton } from './components/common/SectionSkeleton';
import { Reveal } from './components/common/Reveal';

// 1. Code Splitting / Lazy Loading
// Optimizing bundle size by splitting heavy sections into separate chunks.
// Using explicit mapping for named exports.
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const AboutSection = lazy(() => import('./components/About').then(m => ({ default: m.AboutSection })));
const ExperienceSection = lazy(() => import('./components/Experience').then(m => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import('./components/Projects').then(m => ({ default: m.ProjectsSection })));
const MetricsSection = lazy(() => import('./components/Metrics').then(m => ({ default: m.MetricsSection })));
const ResumeSection = lazy(() => import('./components/Resume').then(m => ({ default: m.ResumeSection })));
const FAQSection = lazy(() => import('./components/Faq').then(m => ({ default: m.FaqSection })));
const ContactSection = lazy(() => import('./components/Contact').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const CLI = lazy(() => import('./components/CLI').then(m => ({ default: m.CLI })));

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');
  const seoHead = usePageSEO(activeSection);
  const themePersisted = useRef(false);
  // Initialize theme: a stored preference wins, otherwise dark mode from 6 PM to 6 AM
  const [darkMode, setDarkMode] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    const hours = new Date().getHours();
    return hours < 6 || hours >= 18;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections: SectionKey[] = ['home', 'about', 'experience', 'projects', 'metrics', 'skills', 'resume', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Only persist explicit user choices, so the time-of-day default keeps working
    if (themePersisted.current) {
      window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
    themePersisted.current = true;
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-transparent text-[var(--text)] transition-colors duration-200 overflow-x-hidden">
      {seoHead}
      <a href="#main" className="skip-link">Skip to content</a>
      
      <Navbar activeSection={activeSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main id="main" className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="about" className="section">
            <Reveal>
              <AboutSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="experience" className="section">
            <Reveal>
              <ExperienceSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="projects" className="section">
            <Reveal>
              <ProjectsSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="metrics" className="section">
            <Reveal>
              <MetricsSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="skills" className="section">
            <Reveal>
              <Skills />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="resume" className="section">
            <Reveal>
              <ResumeSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="faq" className="section">
            <Reveal>
              <FAQSection />
            </Reveal>
          </section>
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="contact" className="section">
            <Reveal>
              <ContactSection />
            </Reveal>
          </section>
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-16 bg-[var(--surface-2)] border-t border-[var(--border)]" />}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <CLI />
      </Suspense>
    </div>
  );
};

export default App;