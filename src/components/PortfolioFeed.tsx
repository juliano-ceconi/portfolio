import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { projects, type Project } from '@/data/portfolioData';
import { DEFAULT_LANG, pick, type Lang } from '@/i18n';
import { ui, type UiStrings } from '@/i18n/ui';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project, t }: { project: Project; t: UiStrings }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{project.title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <p className="text-muted-foreground">{project.summary}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-[2000px]' : 'max-h-0'
            }`}
          >
            <div className="rounded-lg bg-muted/50 p-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">{t.projectsChallenge}</h4>
                <p className="text-muted-foreground">{project.details.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t.projectsSolution}</h4>
                <p className="text-muted-foreground">{project.details.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">{t.projectsImpact}</h4>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  {project.details.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.externalLink && (
                <Button variant="link" className="flex items-center gap-2 text-md" asChild>
                  <a href={project.externalLink.url} target="_blank" rel="noopener noreferrer">
                    {project.externalLink.title}
                  </a>
                </Button>
              )}
              {project.links && project.links.map((link, idx) => (
                <Button key={idx} variant="link" className="flex items-center gap-2 text-md" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> {t.projectsShowLess}
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> {t.projectsShowMore}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};


const PortfolioFeed = ({ lang = DEFAULT_LANG }: { lang?: Lang }) => {
  const lista = pick(projects, lang);
  const t = ui(lang);

  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          {t.projectsTitle}
        </h2>
        
        <div className="space-y-8">
          {lista.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;
