import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { sites, type Site } from '@/data/sitesData';

const SiteCard = ({ site }: { site: Site }) => {
  const link = site.url ?? site.repoUrl;
  const isLive = Boolean(site.url);

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="space-y-2 pb-2">
        <Badge variant={isLive ? 'secondary' : 'outline'} className="w-fit">
          {site.label}
        </Badge>
        <h3 className="text-xl font-bold leading-tight">{site.name}</h3>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-muted-foreground">{site.pitch}</p>

        <div className="flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {site.note && <p className="text-sm text-muted-foreground/80">{site.note}</p>}

        <div className="mt-auto pt-2">
          {link && (
            <Button variant={isLive ? 'default' : 'outline'} className="w-full gap-2" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {isLive ? (
                  <>
                    Ver site <ArrowUpRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <Code2 className="h-4 w-4" /> Ver código
                  </>
                )}
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const SitesFeed = () => {
  return (
    <section id="sites" className="relative z-10 bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">Sites e páginas que eu construí</h2>
          <p className="mt-4 text-muted-foreground">
            Do site de um negócio local até plataforma com área de aluno. Todos no ar, todos feitos
            do zero — sem tema pronto.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesFeed;
