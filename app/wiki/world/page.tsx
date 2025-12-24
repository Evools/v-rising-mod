"use client";

import { ChevronLeft, Clock, Coins, Skull } from "lucide-react";
import Link from "next/link";

const worldInfo = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Рейд-Таймы",
    content:
      "Будни: 19:00 — 22:00. Выходные: 18:00 — 23:00. В остальное время замки защищены системой магического щита (Castle Heart Shield).",
    tag: "SCHEDULE",
  },
  {
    icon: <Skull className="w-8 h-8" />,
    title: "V-Blood Echoes",
    content:
      "Убийство боссов дает 'Эхо'. Используйте команду .fam echoes, чтобы обменять их на редкую валюту и косметические предметы.",
    tag: "MECHANIC",
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Экономика",
    content:
      "На сервере действует золотой стандарт. Торговля осуществляется через аукцион в Discord и специальные торговые зоны на карте.",
    tag: "ECONOMY",
  },
];

export default function WorldWiki() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <Link
          href="/wiki"
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <ChevronLeft className="w-4 h-4" /> Назад
        </Link>

        <div className="grid md:grid-cols-3 gap-6">
          {worldInfo.map((info) => (
            <div
              key={info.title}
              className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-primary/5 transition-all"
            >
              <div className="absolute top-4 right-4 text-[9px] font-mono text-white/10 group-hover:text-primary/40 font-bold uppercase tracking-widest transition-colors">
                {info.tag}
              </div>
              <div className="text-primary mb-6">{info.icon}</div>
              <h3 className="text-xl font-black uppercase italic text-white mb-4 tracking-wider">
                {info.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {info.content}
              </p>
              <div className="mt-8 h-[1px] w-12 bg-primary transition-all group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
