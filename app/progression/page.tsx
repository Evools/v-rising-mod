"use client";

import { Activity, Binary, Heart, ShieldAlert, Sword, Zap } from "lucide-react";

export default function ProgressionPage() {
  const stats = [
    {
      name: "Сила (STR)",
      icon: <Sword className="w-5 h-5 text-primary" />,
      desc: "Увеличивает физический урон и общую мощь заклинаний крови.",
      attr: "ATK_BOOST: +2.5%",
    },
    {
      name: "Живучесть (VIT)",
      icon: <Heart className="w-5 h-5 text-primary" />,
      desc: "Увеличивает максимальный запас ОЗ и общую сопротивляемость.",
      attr: "HP_POOL: +40",
    },
    {
      name: "Интеллект (INT)",
      icon: <Zap className="w-5 h-5 text-primary" />,
      desc: "Ускоряет перезарядку способностей и увеличивает запас маны.",
      attr: "CDR_RATE: +1.2%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-40 pb-20 font-sans relative overflow-hidden">
      {/* ФОНОВЫЕ ЭЛЕМЕНТЫ */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* ЗАГОЛОВОК СЕКЦИИ */}
        <div className="flex flex-col items-center text-center mb-24 border-y border-white/5 py-12 bg-white/[0.01]">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px]">
              Протокол Совершенствования
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 uppercase italic tracking-tighter">
            ПУТЬ{" "}
            <span className="text-primary not-italic font-black">ВАМПИРА</span>
          </h1>
          <p className="max-w-2xl text-white/50 text-xl font-light italic leading-relaxed">
            Ваша эволюция не имеет предела. Анализируйте ключевые атрибуты и
            активируйте циклы престижа для достижения формы Высшего Хищника.
          </p>
        </div>

        {/* СЕТКА ХАРАКТЕРИСТИК */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {stats.map((s) => (
            <div
              key={s.name}
              className="p-10 bg-[#0a0a0c] group hover:bg-primary/[0.02] transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Binary className="w-12 h-12" />
              </div>
              <div className="mb-8 border-b border-primary/20 pb-4 inline-block">
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl uppercase italic mb-4 text-white group-hover:text-primary transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6 italic">
                {s.desc}
              </p>
              <div className="text-[10px] font-black text-primary tracking-widest bg-primary/5 py-2 px-3 border-l-2 border-primary">
                {s.attr}
              </div>
            </div>
          ))}
        </div>

        {/* БЛОК ПРЕСТИЖА */}
        <div className="relative border-2 border-primary/20 bg-black/40 p-12 md:p-20 overflow-hidden">
          {/* Декор углов */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary" />

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-4 mb-6">
                <ShieldAlert className="w-6 h-6 text-primary" />
                <h4 className="text-[10px] uppercase tracking-[0.6em] font-black text-white/40">
                  Цикл Перерождения
                </h4>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 uppercase italic tracking-tighter leading-none">
                СИСТЕМА{" "}
                <span className="text-primary not-italic">ПРЕСТИЖА</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 font-light italic leading-relaxed border-l border-white/10 pl-8">
                Достигнув предела, вы можете инициировать сброс. Каждый этап
                (1-10) навсегда усиливает ваш генетический код, добавляя{" "}
                <span className="text-white font-bold">
                  +5% ко всем характеристикам
                </span>
                .
              </p>
            </div>

            <div className="flex-1 w-full lg:w-auto">
              <div className="grid grid-cols-5 md:grid-cols-5 gap-3">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border border-white/10 flex flex-col items-center justify-center group hover:border-primary transition-all relative bg-white/[0.02]"
                  >
                    <span className="text-[8px] font-black text-white/20 mb-1 group-hover:text-primary transition-colors">
                      LVL
                    </span>
                    <span className="font-serif text-3xl font-black text-white/80 group-hover:text-primary transition-all group-hover:scale-110 italic">
                      {i + 1}
                    </span>
                    {/* Линия заполнения снизу */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 group-hover:bg-primary transition-all" />
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary/10 border border-primary/20 text-center">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                  Требуется: 80 Уровень Каждого Этапа
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");
        .font-serif {
          font-family: "Cinzel", serif;
        }
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
