import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Mail, MessageCircle } from 'lucide-react';
import { heroData } from '../data/heroData';
import { DEFAULT_LANG, pick, type Lang } from '@/i18n';
import { ui } from '@/i18n/ui';

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
};

const Hero = ({ lang = DEFAULT_LANG }: { lang?: Lang }) => {
  const hero = pick(heroData, lang);
  const t = ui(lang);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize stars
    const initStars = () => {
      stars.current = Array.from({ length: 200 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.4 + 0.1,
      }));
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      stars.current.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        const dx = star.x - mousePosition.current.x;
        const dy = star.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const push = (1 - distance / maxDistance) * 2;
          star.x += Math.cos(angle) * push;
          star.y += Math.sin(angle) * push;
        }

        ctx.fillStyle = isDarkMode ? `rgba(255, 255, 255, ${star.opacity})` : `rgba(0, 0, 0, ${star.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleResize = () => {
      setCanvasSize();
      initStars();
    };

    setCanvasSize();
    initStars();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 h-56 w-56 rounded-full border-4 border-primary shadow-lg overflow-hidden">
          <img
            src={hero.profilePicture}
            alt={hero.name}
            className="h-full w-full object-cover object-center"
            style={{ transform: 'translate(2px, 1px) scale(1.20)' }}
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          {hero.name}
        </h1>
        <p className="mb-6 text-xl text-muted-foreground sm:text-2xl">
          {hero.title}
        </p>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          {hero.description}
        </p>
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full gap-2">
            <a href={hero.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              {t.heroWhatsapp}
            </a>
          </Button>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={hero.contact.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label={t.heroGithubLabel}>
              <a href={hero.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label={t.heroEmailLabel}>
              <a href={`mailto:${hero.contact.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mb-4 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {hero.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
