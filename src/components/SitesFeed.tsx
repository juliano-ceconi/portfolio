import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import { sites, type Site } from '@/data/sitesData';
import { DEFAULT_LANG, pick, type Lang } from '@/i18n';
import { ui, type UiStrings } from '@/i18n/ui';

const SiteCard = ({ site, t }: { site: Site; t: UiStrings }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <img
        src={`/vitrine/${site.slug}.webp`}
        alt={t.sitesScreenshotAlt.replace('{site}', site.name)}
        width={800}
        height={500}
        loading="lazy"
        decoding="async"
        className="aspect-[8/5] w-full border-b border-border object-cover object-top"
      />
      <CardHeader className="space-y-2 pb-2">
        <Badge variant="secondary" className="w-fit">
          {site.label === 'cliente'
            ? t.sitesLabelClient
            : site.label === 'cofounder-cto'
              ? t.sitesLabelCofounderCtO
              : t.sitesLabelOwn}
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
              {t.sitesViewSite} <span className="sr-only">{site.name}</span> <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SitesFeed = ({ lang = DEFAULT_LANG }: { lang?: Lang }) => {
  const lista = pick(sites, lang);
  const t = ui(lang);

  return (
    <section id="sites" className="relative z-10 bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">{t.sitesTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.sitesIntro}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((site) => (
            <SiteCard key={site.id} site={site} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SitesFeed;
