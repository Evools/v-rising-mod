"use client";

import { classesData } from "@/data/classesData";
import { cn } from "@/lib/utils";
import { Activity, Cpu, Target, Zap, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState(classesData[0]);

  return (
    <div className="relative min-h-screen bg-[#050507] text-foreground font-sans selection:bg-primary/30">
      {/* --- STATIC BACKGROUND (Как в командах и экономике) --- */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/bg-2.jpg"
          alt="Terminal Background"
          fill
          className="object-cover object-center grayscale opacity-30"
          priority
        />
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(220,38,38,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        {/* Gradient Overlay уходящий в основной цвет фона страницы */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]" />
      </div>
      {/* ------------------------------------------------------ */}

      {/* CONTENT LAYER */}
      <div className="container relative z-10 mx-auto px-6 pt-40 pb-24">
        {/* HEADER SECTION */}
        <div className="max-w-5xl mb-24 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Vampire Terminal // Unit_Archetypes
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>
          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            АРХИВ <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              КЛАССОВ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-[0.2em] font-light uppercase italic leading-relaxed">
              База данных активных боевых единиц Вардорана. <br />
              <span className="text-white font-bold not-italic underline decoration-primary decoration-2 underline-offset-8 uppercase text-xs tracking-[0.2em]">
                Выбор протокола инициирует смену данных
              </span>
            </p>
          </div>
        </div>

        {/* INTERFACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.01] border border-white/5 items-start relative shadow-2xl">
          {/* LEFT SIDEBAR - STICKY */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 z-30 bg-[#08080a] border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase flex items-center gap-2">
                <Activity className="w-3 h-3 text-primary animate-pulse" />{" "}
                Directory
              </span>
              <Cpu className="w-3 h-3 text-white/10" />
            </div>

            <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden no-scrollbar bg-[#08080a]">
              {classesData.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(cls)}
                  className={cn(
                    "flex-shrink-0 lg:w-full flex items-center gap-6 p-6 lg:p-8 transition-all relative border-r lg:border-r-0 lg:border-b border-white/5 last:border-0 outline-none group",
                    selectedClass.id === cls.id
                      ? "bg-primary/[0.07]"
                      : "hover:bg-white/[0.03]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 lg:top-0 h-1 lg:h-full w-full lg:w-1 transition-all duration-500",
                      selectedClass.id === cls.id
                        ? "bg-primary shadow-[0_0_20px_#ff0000]"
                        : "bg-transparent"
                    )}
                  />

                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center border transition-all duration-500",
                      selectedClass.id === cls.id
                        ? "border-primary text-primary rotate-[135deg]"
                        : "border-white/10 text-white/20"
                    )}
                  >
                    <div
                      className={cn(
                        "transition-transform",
                        selectedClass.id === cls.id ? "-rotate-[135deg]" : ""
                      )}
                    >
                      {cls.icon}
                    </div>
                  </div>

                  <div className="text-left flex-1">
                    <span
                      className={cn(
                        "font-serif text-lg lg:text-2xl tracking-tight uppercase italic block",
                        selectedClass.id === cls.id
                          ? "text-white"
                          : "text-white/30 group-hover:text-white/60"
                      )}
                    >
                      {cls.name}
                    </span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "hidden lg:block w-4 h-4 transition-all",
                      selectedClass.id === cls.id
                        ? "text-primary translate-x-0"
                        : "opacity-0 -translate-x-2"
                    )}
                  />
                </button>
              ))}
            </nav>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="lg:col-span-8 p-8 md:p-20 bg-[#0a0a0c]/90 backdrop-blur-md min-h-screen relative overflow-hidden">
            {/* Фоновая буква класса */}
            <div className="absolute -top-10 -right-10 text-[30vw] font-serif font-black text-white/[0.02] pointer-events-none select-none italic leading-none uppercase">
              {selectedClass.name.charAt(0)}
            </div>

            <div className="relative z-10 space-y-16 animate-in fade-in slide-in-from-right-5 duration-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/5 pb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em]">
                    <Zap className="w-4 h-4 fill-primary animate-pulse" />{" "}
                    Status: Unit_Loaded
                  </div>
                  <h2 className="font-serif text-6xl md:text-8xl text-white italic uppercase tracking-tighter leading-none">
                    {selectedClass.name}
                  </h2>
                </div>

                <div className="relative bg-black p-6 border border-primary/40 min-w-[240px] shadow-[8px_8px_0px_rgba(220,38,38,0.1)]">
                  <div className="absolute top-0 left-0 w-1 h-1 bg-primary" />
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-primary" />
                  <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em] mb-2 block">
                    Archive_Link
                  </span>
                  <code className="text-white text-2xl font-mono font-black tracking-tighter">
                    .class {selectedClass.id}
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
                <div className="xl:col-span-2">
                  <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed italic border-l-2 border-primary pl-8">
                    {selectedClass.description}
                  </p>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/5 relative h-fit">
                  <Target className="w-4 h-4 text-primary mb-4" />
                  <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-2">
                    Weapon Synergies
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed uppercase tracking-wider">
                    {selectedClass.starter}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">
                    Abilities_Data
                  </span>
                </div>

                <div className="grid gap-px bg-white/5 border border-white/5">
                  {selectedClass.unlocks.map((u) => (
                    <div
                      key={u.lvl}
                      className="group flex flex-col md:flex-row md:items-center gap-8 p-8 bg-[#08080a] hover:bg-primary/[0.03] transition-all"
                    >
                      <div className="flex flex-col">
                        <span className="font-serif text-5xl text-white/10 group-hover:text-primary transition-colors italic">
                          0{u.lvl}
                        </span>
                        <span className="text-[8px] font-black text-white/20 uppercase">
                          Level
                        </span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-black uppercase tracking-[0.2em] text-lg mb-1">
                          {u.skill}
                        </h5>
                        <p className="text-white/40 text-sm italic font-light">
                          {u.effect}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");
        .font-serif {
          font-family: "Cinzel", serif;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
