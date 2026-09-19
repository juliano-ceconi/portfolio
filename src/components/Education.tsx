import React from 'react';
import { education } from '../data/educationData';
import { DEFAULT_LANG, pick, type Lang } from '@/i18n';
import { ui } from '@/i18n/ui';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = ({ lang = DEFAULT_LANG }: { lang?: Lang }) => {
  const itens = pick(education, lang);
  const t = ui(lang);

  return (
    <section id="education" className="py-16 px-4 md:px-8 lg:px-16 bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{t.educationTitle}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {itens.map((edu, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">{edu.institution}</CardTitle>
                <p className="text-muted-foreground">{edu.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
