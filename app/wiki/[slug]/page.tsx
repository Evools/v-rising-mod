"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ChevronLeft,
  Activity,
  Target,
  Info,
  Zap,
  GanttChartSquare,
  Home,
} from "lucide-react";
import Image from "next/image";
import { wikiContent } from "@/data/wikiContent";

export default function WikiArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const content = wikiContent[slug];

  if (!content)
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-primary font-mono tracking-widest">
        ERROR_404: DATA_NOT_FOUND
      </div>
    );

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans pb-32">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,0,255,0.03))] bg-[size:100%_4px,4px_100%]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 uppercase text-[10px] font-bold tracking-[0.4em]"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Вернуться в архив
        </button>

        <div className="flex flex-col md:flex-row items-start gap-8 mb-20 border-l-2 border-primary pl-8">
          <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-primary/10 border border-primary/20 text-primary">
            {content.icon}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase">
                Status: Decrypted
              </span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black uppercase italic tracking-tighter mb-4">
              {content.title}
            </h1>
            <p className="text-white/40 text-lg italic max-w-2xl leading-relaxed">
              {typeof content.description === "string"
                ? content.description
                : "Описание секции данных..."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-8">
            <Activity className="w-4 h-4 text-primary" /> Реестр_Объектов
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {content.sections.map((item: any, idx: number) => (
              <div
                key={idx}
                className="group relative bg-[#080808]/60 border border-white/5 hover:border-primary/30 transition-all overflow-hidden flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-64 h-72 md:h-auto overflow-hidden bg-white/5 border-b md:border-b-0 md:border-r border-white/5">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.t}
                      fill
                      className="object-contain p-4 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white/10 group-hover:text-primary/20 transition-colors" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                </div>

                {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ: Информация */}
                <div className="flex-grow p-8 flex flex-col justify-between gap-8">
                  <div>
                    <h4 className="text-2xl font-black text-white uppercase italic mb-3 flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      {item.t}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed italic mb-8 max-w-2xl border-l border-white/10 pl-4">
                      {item.d}
                    </p>

                    {/* БЛОК НАГРАД (Unlocks) */}
                    {item.unlocks && item.unlocks.length > 0 && (
                      <div className="mb-8 space-y-3">
                        <div className="text-[8px] font-bold text-primary uppercase tracking-[0.3em]">
                          Получаемые_Технологии
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {item.unlocks.map((unlock: any, uIdx: number) => (
                            <div
                              key={uIdx}
                              className="flex items-center gap-2 border border-white/10 px-3 py-1 bg-white/[0.02] group-hover:border-primary/20 transition-colors"
                            >
                              <div className="text-primary/60">
                                {unlock.category === "power" && (
                                  <Zap className="w-3 h-3" />
                                )}
                                {unlock.category === "recipe" && (
                                  <GanttChartSquare className="w-3 h-3" />
                                )}
                                {unlock.category === "build" && (
                                  <Home className="w-3 h-3" />
                                )}
                              </div>
                              <span className="text-[10px] text-white/70 uppercase tracking-tight">
                                {unlock.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Таблица характеристик */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/5">
                      {Object.entries(item.stats).map(([key, val]: any) => (
                        <div key={key} className="relative">
                          <div className="text-[7px] uppercase text-white/20 tracking-widest mb-1">
                            {key}
                          </div>
                          <div className="text-[10px] font-bold text-primary uppercase truncate">
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Футер */}
        <div className="mt-20 p-8 border border-white/5 bg-white/[0.01] flex items-center gap-6">
          <Info className="w-6 h-6 text-primary" />
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
            Внимание: Данные могут меняться в зависимости от версии сервера.{" "}
            <br />
            Последняя синхронизация: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
        .font-serif {
          font-family: "Cinzel", serif;
        }
      `}</style>
    </div>
  );
}
