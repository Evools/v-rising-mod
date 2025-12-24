"use client";

import { useState } from "react";
import { Activity, Heart, ShieldAlert, Sword, Zap } from "lucide-react";
import Image from "next/image";

const prestigeBonuses = [
  { lvl: 1, title: "Лесной саван", desc: "Иммунитет к Проклятью леса." },
  {
    lvl: 2,
    title: "Звериная грация",
    desc: "2-е свойство крови животного. 8% скорости бега и 8% бонус скорости при изменении формы.",
  },
  {
    lvl: 3,
    title: "Мастер ресурсов",
    desc: "4-е свойство крови рабочего. 3% шанс моментального уничтожения ноды ресурсов.",
  },
  {
    lvl: 4,
    title: "Укрепленная кожа",
    desc: "Уменьшение входящего урона на 10%.",
  },
  {
    lvl: 5,
    title: "Завеса мутанта",
    desc: "4-е свойство крови мутанта. 7% КД завесы, -7с КД ульты при атаке после завесы.",
  },
  {
    lvl: 6,
    title: "Звериное здоровье",
    desc: "1-е свойство крови животного. 16% повышение макс ХП, 40% исцеления.",
  },
  {
    lvl: 7,
    title: "Порченая кровь",
    desc: "Урон от атак оскверненных -25/50%, Life Steal 5%, +10% урон из др. источников.",
  },
  {
    lvl: 8,
    title: "Апогей мощи",
    desc: "+ Физ. сила и + Маг. сила. Значительное усиление всех атак.",
  },
  {
    lvl: 9,
    title: "Чистая эссенция",
    desc: "20% эффективность крови (5-е свойство 100% крови).",
  },
  {
    lvl: 10,
    title: "Высший Хищник",
    desc: "Абсолютный иммунитет к солнечному излучению.",
  },
];

const stats = [
  {
    id: "ATTR-01",
    name: "Сила (STR)",
    icon: <Sword className="w-5 h-5 text-primary" />,
    desc: "Увеличивает физический урон и общую мощь заклинаний крови.",
    attr: "ATK_BOOST: +2.5%",
  },
  {
    id: "ATTR-02",
    name: "Живучесть (VIT)",
    icon: <Heart className="w-5 h-5 text-primary" />,
    desc: "Увеличивает максимальный запас ОЗ и общую сопротивляемость.",
    attr: "HP_POOL: +40",
  },
  {
    id: "ATTR-03",
    name: "Интеллект (INT)",
    icon: <Zap className="w-5 h-5 text-primary" />,
    desc: "Ускоряет перезарядку способностей и увеличивает запас маны.",
    attr: "CDR_RATE: +1.2%",
  },
];

export default function ProgressionPage() {
  const [activePrestige, setActivePrestige] = useState(prestigeBonuses[0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden selection:bg-primary/30">
      {/* BACKGROUND - CLEAN HUD STYLE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-2.jpg"
          alt="Progression"
          fill
          priority
          className="object-cover opacity-10 grayscale"
        />
        {/* Чистые сканирующие линии без красного оттенка */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,255,255,0.01),rgba(0,0,0,0),rgba(255,255,255,0.01))] bg-[size:100%_4px,3px_100%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 pt-44 pb-32">
        {/* HEADER SECTION */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Vardoran Evolution Protocol
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            ПУТЬ <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              ВАМПИРА
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-[0.15em] font-light uppercase italic leading-relaxed">
              «Ваша эволюция не имеет предела. Анализируйте <br />
              атрибуты и активируйте циклы престижа для <br />
              достижения формы{" "}
              <span className="text-white font-bold not-italic font-sans">
                Высшего Хищника
              </span>
              .»
            </p>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-24">
          {stats.map((s) => (
            <div
              key={s.id}
              className="group relative p-10 bg-[#080808] hover:bg-[#0c0c0c] transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-primary">{s.icon}</div>
                <span className="font-mono text-[9px] text-white/20 tracking-widest">
                  [ {s.id} ]
                </span>
              </div>
              <h3 className="font-serif text-3xl text-white mb-4 uppercase italic font-black tracking-tight group-hover:text-primary transition-colors">
                {s.name}
              </h3>
              <p className="text-white/40 text-[11px] leading-relaxed mb-10 h-16 font-bold uppercase tracking-[0.1em] italic">
                {s.desc}
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-black text-primary tracking-[0.2em] bg-primary/10 py-3 px-4 border-l-2 border-primary">
                  {s.attr}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRESTIGE BLOCK */}
        <div className="relative border border-white/10 bg-[#080808] p-8 md:p-16">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-50" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-50" />

          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8 text-white/40 font-black uppercase text-[10px] tracking-[0.6em]">
                <ShieldAlert className="w-5 h-5 text-primary" />
                Blood_Prestige_System
              </div>

              <h2 className="font-serif text-5xl md:text-7xl mb-12 uppercase italic font-black tracking-tighter leading-none">
                ЦИКЛ <br />
                <span className="text-primary not-italic drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  ПРЕСТИЖА
                </span>
              </h2>

              <div
                className="min-h-[200px] border-l-2 border-primary bg-white/[0.02] p-10 relative"
                key={activePrestige.lvl}
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black italic text-white/5 pointer-events-none">
                  #{activePrestige.lvl}
                </div>
                <div className="flex items-center gap-3 mb-6 font-mono text-xl font-black italic text-primary">
                  LVL_{activePrestige.lvl}{" "}
                  <div className="h-px flex-1 bg-primary/20" />
                </div>
                <h4 className="text-3xl font-serif uppercase italic font-black text-white mb-4 tracking-tight">
                  {activePrestige.title}
                </h4>
                <p className="text-white/40 text-sm md:text-base italic leading-relaxed uppercase tracking-widest max-w-md">
                  {activePrestige.desc}
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-5 gap-px bg-white/10 border border-white/10">
                {prestigeBonuses.map((item, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setActivePrestige(item)}
                    className={`aspect-square transition-all flex flex-col items-center justify-center 
                  ${
                    activePrestige.lvl === item.lvl
                      ? "bg-primary text-white"
                      : "bg-[#050505] text-white hover:bg-white/[0.08]"
                  }`}
                  >
                    <span
                      className={`text-[8px] font-black mb-1 uppercase tracking-widest ${
                        activePrestige.lvl === item.lvl
                          ? "opacity-60"
                          : "opacity-40"
                      }`}
                    >
                      LVL
                    </span>
                    <span className="font-serif text-2xl font-black italic leading-none">
                      {item.lvl}
                    </span>
                  </button>
                ))}
              </div>

              {/* STATUS BLOCK */}
              <div className="border border-white/10 bg-[#050505]">
                <div className="flex divide-x divide-white/10 border-b border-white/10">
                  <div className="p-6 flex-1 text-left">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 block mb-2 italic">
                      Статус
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-black text-primary italic uppercase tracking-tighter">
                      Доступно для разблокировки
                    </span>
                  </div>
                  <div className="p-6 bg-white/[0.01] flex flex-col justify-center items-end">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 block mb-2 italic">
                      Требование
                    </span>
                    <span className="font-serif text-2xl font-black text-white italic">
                      LVL 100
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-8 text-left">
                  <div className="relative">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-3">
                      <span>Evolution_Sync</span>
                      <span className="text-primary">100% Ready</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-full bg-primary" />
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-white/[0.02] border border-white/5 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <ShieldAlert className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary italic underline underline-offset-8">
                        Critical System Warning
                      </p>
                      <p className="text-xs md:text-[13px] font-bold text-white/60 italic uppercase leading-relaxed tracking-widest">
                        Инициация цикла приведет к{" "}
                        <span className="text-white">
                          сбросу текущего снаряжения
                        </span>{" "}
                        и уровня. Протокол необратим. Подтвердите готовность к
                        перерождению.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
