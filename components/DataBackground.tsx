import React, { useEffect, useRef } from 'react';

export const DataBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let signals: Signal[] = [];
    
    // Configuration
    const particleCount = 70;
    const connectionDistance = 180;
    const signalChance = 0.005; // Chance per frame to spawn a signal
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 2 + 1; // Slightly larger nodes
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw(isDark: boolean) {
        // Pulsing effect
        const pulseScale = 1 + Math.sin(this.pulse) * 0.3;
        const currentSize = this.size * pulseScale;
        
        // Light Mode: Darker particles (Slate 500/600) for visibility on white
        // Dark Mode: Light particles (Sky 400) for visibility on dark
        const alpha = isDark ? 0.3 + Math.sin(this.pulse) * 0.2 : 0.4 + Math.sin(this.pulse) * 0.2;
        
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        ctx!.fillStyle = isDark 
          ? `rgba(56, 189, 248, ${alpha})` // Sky blue for dark
          : `rgba(71, 85, 105, ${alpha})`; // Slate 600 for light
        ctx!.fill();
      }
    }

    class Signal {
      start: Particle;
      end: Particle;
      progress: number;
      speed: number;
      isDead: boolean;

      constructor(start: Particle, end: Particle) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = 0.02 + Math.random() * 0.03;
        this.isDead = false;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.isDead = true;
        }
      }

      draw(isDark: boolean) {
        const x = this.start.x + (this.end.x - this.start.x) * this.progress;
        const y = this.start.y + (this.end.y - this.start.y) * this.progress;
        
        ctx!.beginPath();
        ctx!.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = isDark ? '#ffffff' : '#0ea5e9';
        ctx!.fill();
        
        // Glow effect for signal
        ctx!.shadowBlur = 6;
        ctx!.shadowColor = isDark ? '#ffffff' : '#0ea5e9';
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      signals = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw(isDark);
      });

      // Draw connections
      ctx.lineWidth = isDark ? 1 : 1.2;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < connectionDistance) {
            // Draw line
            const opacity = isDark 
              ? (1 - dist / connectionDistance) * 0.15 
              : (1 - dist / connectionDistance) * 0.12;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark 
              ? `rgba(56, 189, 248, ${opacity})` 
              : `rgba(71, 85, 105, ${opacity})`;
            ctx.stroke();

            // Chance to spawn signal
            if (Math.random() < signalChance && signals.length < 10) {
              signals.push(new Signal(particles[i], particles[j]));
            }
          }
        }
      }

      // Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        signals[i].update();
        signals[i].draw(isDark);
        if (signals[i].isDead) {
          signals.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    
    const handleResize = () => init();
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-1000 opacity-60 dark:opacity-40"
    />
  );
};