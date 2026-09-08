import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { footerData } from '../data/footerData';

const Footer = () => {
  const { cta } = footerData;

  return (
    <footer className="relative z-10 bg-background/95 px-4 pb-11 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />

        <div className="flex flex-col items-center text-center">
          <h3 className="mb-3 text-2xl font-semibold">{cta.titulo}</h3>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{cta.chamada}</p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={cta.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {cta.whatsappLabel}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`mailto:${cta.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                {cta.email}
              </a>
            </Button>
          </div>

          <div className="mt-6 flex gap-4">
            {footerData.socialLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label={link.name}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon === 'Github' && <Github className="h-5 w-5" />}
                  {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>
            <i>{footerData.quote}</i>
          </p>
          <p className="text-xs text-muted-foreground/60">
            Desenvolvido por Juliano Ceconi • Design original por <a href="https://github.com/isaac-ros/Astro-Shadcn-portfolio" target="_blank" rel="noreferrer" className="underline hover:text-foreground">Isaac Ros</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
