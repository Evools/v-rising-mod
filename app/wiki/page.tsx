"use client";

import { cn } from "@/lib/utils";
import {
  Binary,
  Book,
  ChevronRight,
  Droplets,
  Globe,
  Sword,
  Zap,
} from "lucide-react";
import Link from "next/link";

const wikiCategories = [
  {
    id: "01",
    title: "Путь Магии",
    slug: "classes",
    icon: <Zap className="w-6 h-6" />,
    color: "text-purple-400",
    desc: "Изучите доступные магические классы, их уникальные пассивные навыки и синергию с экипировкой.",
    stats: "12 Классов / 48 Способностей",
  },
  {
    id: "02",
    title: "Арсенал",
    slug: "weapons",
    icon: <Sword className="w-6 h-6" />,
    color: "text-amber-500",
    desc: "Мастерство владения оружием (Expertise). Как эффективно прокачивать и какие статы выбирать.",
    stats: "14 Типов оружия / 30+ Статов",
  },
  {
    id: "03",
    title: "Чистота Крови",
    slug: "blood",
    icon: <Droplets className="w-6 h-6" />,
    color: "text-red-500",
    desc: "Система наследия, типы крови и их влияние на RPG-составляющую вашего персонажа.",
    stats: "7 Типов крови / Legacy System",
  },
  {
    id: "04",
    title: "Мироустройство",
    slug: "world",
    icon: <Globe className="w-6 h-6" />,
    color: "text-sky-400",
    desc: "Рейд-таймы, боссы, экономика сервера и правила захвата территорий.",
    stats: "V-Blood Echoes / Economy",
  },
];

export default function WikiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4 font-sans selection:bg-primary">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-black tracking-[0.5em] text-[10px] uppercase">
                Central_Database_v1.0
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black uppercase italic tracking-tighter text-white leading-none">
              The <span className="text-primary">/</span> Archive
            </h1>
            <p className="mt-6 text-white/30 text-sm uppercase tracking-[0.2em] font-light">
              Полное руководство по выживанию и доминированию в мире Blood &
              Wine.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10 backdrop-blur-md">
            <Binary className="text-primary w-5 h-5" />
            <div className="text-left">
              <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">
                System_Access
              </p>
              <p className="text-xs text-white font-mono uppercase">
                Level: Administrator
              </p>
            </div>
          </div>
        </div>

        {/* GRID BOXES */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {wikiCategories.map((cat) => (
            <Link
              href={`/wiki/${cat.slug}`}
              key={cat.id}
              className="group relative bg-[#0a0a0c] p-10 hover:bg-white/[0.02] transition-all overflow-hidden"
            >
              {/* Фоновый номер секции */}
              <span className="absolute -right-4 -bottom-8 text-[12rem] font-black text-white/[0.02] group-hover:text-primary/[0.03] transition-colors pointer-events-none">
                {cat.id}
              </span>

              <div className="relative z-10">
                <div
                  className={cn(
                    "mb-6 inline-block p-3 bg-white/5 border border-white/10 transition-colors group-hover:border-primary/50",
                    cat.color
                  )}
                >
                  {cat.icon}
                </div>

                <h2 className="text-3xl font-black uppercase italic text-white mb-4 tracking-wider group-hover:text-primary transition-colors">
                  {cat.title}
                </h2>

                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm group-hover:text-white/60 transition-colors">
                  {cat.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/40">
                    {cat.stats}
                  </span>
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Открыть
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* HELP SECTION */}
        <div className="mt-20 p-12 bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="p-4 bg-primary text-white">
              <Book className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase italic text-white">
                Не нашли нужную информацию?
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Наша библиотека постоянно обновляется сообществом и
                администрацией.
              </p>
            </div>
          </div>
          <Link
            href="/support"
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-xs"
          >
            Задать вопрос
          </Link>
        </div>
      </div>

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
        .font-serif {
          font-family: "Cinzel", serif;
        }
        .text-shadow-glow {
          text-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
        }
      `}</style>
    </main>
  );
}
