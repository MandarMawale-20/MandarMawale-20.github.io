import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/About';
import { ExperienceSection } from '../components/Experience';
import { ProjectsSection } from '../components/Projects';
import { MetricsSection } from '../components/Metrics';
import { Skills } from '../components/Skills';
import { ResumeSection } from '../components/Resume';
import { FaqSection } from '../components/Faq';
import { ContactSection } from '../components/Contact';
import { Footer } from '../components/Footer';

/**
 * Static, crawlable markup for search engines and AI answer engines that do not execute
 * JavaScript (GPTBot, ClaudeBot, PerplexityBot, CCBot...).
 *
 * The client app replaces this markup as soon as it mounts — createRoot clears the container,
 * so there is no duplicate content for browsers.
 */
export const renderPortfolio = (): string =>
  renderToStaticMarkup(
    <div className="min-h-screen bg-transparent text-[var(--text)] transition-colors duration-300 overflow-x-hidden">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar activeSection="home" darkMode={true} setDarkMode={() => {}} />

      <main id="main" className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="section">
          <AboutSection />
        </section>

        <section id="experience" className="section">
          <ExperienceSection />
        </section>

        <section id="projects" className="section">
          <ProjectsSection />
        </section>

        <section id="metrics" className="section">
          <MetricsSection />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="resume" className="section">
          <ResumeSection />
        </section>

        <section id="faq" className="section">
          <FaqSection defaultOpen />
        </section>

        <section id="contact" className="section">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );

export default renderPortfolio;
