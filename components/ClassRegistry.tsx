"use client";

import { ChevronRight, Target, Terminal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const classes = [
  {
    id: "01",
    name: "Blood Knight",
    desc: "Мастер ближнего боя, использующий силу крови для защиты и мощных ударов.",
  },
  {
    id: "02",
    name: "Demon Hunter",
    desc: "Стремительный охотник, использующий огнестрельное оружие и взрывчатку.",
  },
  {
    id: "03",
    name: "Vampire Lord",
    desc: "Древний аристократ, повелевающий стаями летучих мышей и мощью своего рода.",
  },
  {
    id: "04",
    name: "Shadow Blade",
    desc: "Мастер скрытности и быстрых клинков. Появляется из ниоткуда для удара.",
  },
  {
    id: "05",
    name: "Arcane Sorcerer",
    desc: "Манипулятор энергией Арканы, способный искажать реальность и стихии.",
  },
  {
    id: "06",
    name: "Death Mage",
    desc: "Повелитель смерти, использующий трупы врагов как ресурс для создания нежити.",
  },
];

export default function ClassSelection() {
  return (
    <section
      id="classes"
      className="py-32 bg-background relative overflow-hidden font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-black tracking-[0.6em] uppercase text-[10px]">
              Class_Identification
            </span>
            <div className="h-[2px] w-12 bg-primary" />
          </div>

          <h2 className="font-serif text-6xl md:text-8xl text-foreground mb-8 uppercase italic tracking-tighter leading-none">
            ВЫБЕРИТЕ СВОЮ <br />
            <span className="text-primary not-italic">СУДЬБУ</span>
          </h2>

          <div className="relative inline-block py-4 px-12 border-x border-white/10">
            <p className="max-w-2xl text-muted-foreground font-light text-lg italic uppercase tracking-tight">
              Шесть путей развития. Уникальный геймплей и циклы Престижа.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 shadow-[40px_40px_0px_rgba(0,0,0,0.4)]">
          {classes.map((cls) => (
            <Link
              href="/classes"
              key={cls.name}
              className="group bg-background p-12 transition-all duration-500 relative overflow-hidden"
            >
              <span className="absolute -top-4 -right-2 text-9xl font-serif font-black text-white/[0.02] group-hover:text-primary/5 transition-colors italic pointer-events-none">
                {cls.id}
              </span>

              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 group-hover:border-primary/50 transition-colors" />

              <div className="relative z-10">
                <div className="w-12 h-px bg-primary mb-6 transition-all group-hover:w-20" />

                <h3 className="font-serif text-4xl text-foreground mb-6 group-hover:text-primary transition-colors uppercase italic tracking-tighter leading-none">
                  {cls.name}
                </h3>

                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-12 italic border-l border-white/5 pl-4 group-hover:border-primary/30 transition-all">
                  {cls.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">
                      Изучить архив
                    </span>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>

                  <Target className="w-4 h-4 text-white/5 group-hover:text-primary/20 transition-colors" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent h-1/2 -translate-y-full group-hover:animate-scan pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
