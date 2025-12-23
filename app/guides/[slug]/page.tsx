"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Terminal } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { fullGuidesContent } from "../content"; // Импорт данных выше

export default function GuidePage() {
  const params = useParams();
  const router = useRouter();

  // Ищем нужный контент по slug из URL
  const guide =
    fullGuidesContent[params.slug as keyof typeof fullGuidesContent];

  if (!guide) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-serif">Гайд не найден</h1>
        <Button onClick={() => router.push("/guides")} variant="link">
          Вернуться назад
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8 hover:bg-transparent text-muted-foreground hover:text-primary uppercase text-[10px] tracking-widest"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Назад
        </Button>

        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 border border-primary/20 text-primary">
            {guide.icon}
          </div>
          <h1 className="font-serif text-4xl text-foreground">{guide.title}</h1>
        </div>

        <div className="space-y-12">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                {section.header}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {section.text}
              </p>
              {section.cmd && (
                <div className="flex items-center justify-between bg-muted/50 p-4 border border-border group">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-4 h-4 text-primary" />
                    <code className="font-mono text-sm text-primary font-bold">
                      {section.cmd}
                    </code>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Команда чата
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
