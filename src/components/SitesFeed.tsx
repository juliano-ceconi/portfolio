import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { sites, type Site } from '@/data/sitesData';

const SiteCard = ({ site }: { site: Site }) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="space-y-2 pb-2">
        <Badge variant="secondary" className="w-fit">
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

        <div className="mt-auto pt-2">
          <Button className="w-full gap-2" asChild>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              Ver site <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
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
