import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { ResumeSection } from './components/Resume';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { CLI } from './components/CLI';
import { DataBackground } from './components/DataBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  // Initialize theme based on time of day (Dark mode from 6 PM to 6 AM)
  const [darkMode, setDarkMode] = useState(() => {
    const hours = new Date().getHours();
    return hours < 6 || hours >= 18;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'resume', 'contact'];
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
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-200 transition-colors duration-1000 overflow-x-hidden">
      <DataBackground />
      <Navbar activeSection={activeSection} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="experience" className="pt-24 pb-12 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-1000">
          <ExperienceSection />
        </section>

        <section id="skills" className="pt-24 pb-24">
          <Skills />
        </section>

        <section id="projects" className="pt-24 pb-24 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-1000">
          <ProjectsSection />
        </section>

        <section id="resume" className="pt-24 pb-24">
          <ResumeSection />
        </section>

        <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-1000">
          <ContactSection />
        </section>
      </main>

      <CLI />
      <Footer />
    </div>
  );
};

export default App;