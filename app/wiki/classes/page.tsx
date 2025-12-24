"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const classes = [
  {
    name: "Paladin",
    role: "Tank / Support",
    difficulty: "Low",
    desc: "Святой воин, использующий магию света для защиты союзников и сокрушения нежити. Обладает высокими защитными характеристиками.",
    stats: { power: 60, defense: 95, utility: 80 },
    color: "text-yellow-400",
  },
  {
    name: "Rogue",
    role: "Melee DPS",
    difficulty: "High",
    desc: "Мастер скрытности и внезапных атак. Использует яды и критические удары, чтобы устранить цель до того, как она его заметит.",
    stats: { power: 90, defense: 30, utility: 50 },
    color: "text-emerald-400",
  },
  {
    name: "Necromancer",
    role: "Mage / Summoner",
    difficulty: "Medium",
    desc: "Повелевает силами смерти, призывая армию скелетов. Способен истощать жизненные силы врагов на расстоянии.",
    stats: { power: 85, defense: 40, utility: 75 },
    color: "text-purple-500",
  },
];

export default function ClassesWiki() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4 font-sans">
      <div className="container mx-auto">
        {/* Хлебные крошки / Назад */}
        <Link
          href="/wiki"
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Вернуться в архив
          </span>
        </Link>

        <h1 className="text-5xl md:text-7xl font-serif font-black uppercase italic text-white mb-16 leading-none">
          Class <span className="text-primary">/</span> Protocols
        </h1>

        <div className="grid gap-6">
          {classes.map((cls) => (
            <div
              key={cls.name}
              className="relative border border-white/5 bg-white/[0.01] flex flex-col lg:flex-row overflow-hidden group"
            >
              {/* Левая панель: Название и Роль */}
              <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                <div
                  className={`text-[10px] font-mono mb-2 ${cls.color} font-bold tracking-[0.4em]`}
                >
                  STATUS_ACTIVE
                </div>
                <h2 className="text-4xl font-serif font-black uppercase italic text-white mb-2">
                  {cls.name}
                </h2>
                <p className="text-white/40 text-[11px] font-black uppercase tracking-widest">
                  {cls.role}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-[10px] font-mono text-white/20 uppercase">
                    <span>Сложность:</span>
                    <span className="text-white">{cls.difficulty}</span>
                  </div>
                  {/* Простой визуальный стат-бар */}
                  <div className="space-y-3">
                    <StatBar
                      label="Power"
                      value={cls.stats.power}
                      color="bg-primary"
                    />
                    <StatBar
                      label="Defense"
                      value={cls.stats.defense}
                      color="bg-blue-500"
                    />
                    <StatBar
                      label="Utility"
                      value={cls.stats.utility}
                      color="bg-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Правая панель: Описание */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-4">
                    Tactical_Overview
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light text-lg italic max-w-2xl">
                    «{cls.desc}»
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Посмотреть умения
                  </button>
                  <button className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                    Синергия предметов
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function StatBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[9px] font-black text-white/40 uppercase tracking-tighter">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-[2px] w-full bg-white/5">
        <div
          className={cn("h-full transition-all duration-1000", color)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
