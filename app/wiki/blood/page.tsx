"use client";

import { ChevronLeft, Droplets, Zap } from "lucide-react";
import Link from "next/link";

const bloodSystems = [
  {
    title: "Vampiric Legacy",
    code: "LEGACY_MOD",
    desc: "Система накопления опыта поколений. При каждом перерождении (престиже) вы сохраняете часть силы, усиливая базовые характеристики своего рода.",
    benefits: [
      "+5% к силе заклинаний за уровень",
      "+10% к шансу крита",
      "Уникальные префикс-титулы",
    ],
  },
  {
    title: "Blood Purity",
    code: "PURITY_STAT",
    desc: "Ваша группа крови теперь влияет на классовые способности. Например, кровь Ученого (Scholar) усиливает заклинания некроманта на 15%.",
    benefits: [
      "Синергия с магией",
      "Ускоренная регенерация маны",
      "Бонус к времени действия баффов",
    ],
  },
];

export default function BloodWiki() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <Link
          href="/wiki"
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 group uppercase text-[10px] font-black tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" /> Назад в архив
        </Link>

        <h1 className="text-6xl font-serif font-black uppercase italic text-white mb-4">
          Blood <span className="text-primary">/</span> Systems
        </h1>
        <p className="text-white/30 tracking-[0.4em] text-xs uppercase mb-16 underline decoration-primary/30 underline-offset-8">
          Протоколы генетического превосходства
        </p>

        <div className="grid gap-px bg-white/5">
          {bloodSystems.map((item) => (
            <div
              key={item.title}
              className="bg-[#0a0a0c] p-10 border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-4">
                    <Droplets className="text-primary w-5 h-5 animate-pulse" />
                    <span className="text-[10px] font-mono text-primary font-bold tracking-widest">
                      {item.code}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black uppercase italic text-white mb-4">
                    {item.title}
                  </h2>
                </div>
                <div className="flex-1">
                  <p className="text-white/60 font-light leading-relaxed mb-6 italic">
                    «{item.desc}»
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[11px] text-white/80 uppercase font-bold tracking-tighter"
                      >
                        <Zap className="w-3 h-3 text-primary" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
