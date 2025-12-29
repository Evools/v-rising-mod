"use client";

import craftingData from "@/data/craftingData";
import { cn } from "@/lib/utils";
import { Activity, Cpu, Hammer, Zap, Gem, Atom, Target, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CraftingPage() {
  const [selectedCategory, setSelectedCategory] = useState(craftingData[0]);
  // Состояние для открытия картинки во весь экран
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-[#050507] text-foreground font-sans selection:bg-primary/30">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/bg-2.jpg"
          alt="Terminal Background"
          fill
          className="object-cover object-center grayscale opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(220,38,38,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-24">
        {/* HEADER */}
        <div className="max-w-5xl mb-24 border-l-[3px] border-primary pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Vampire Terminal // Synthesis_Logs
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>
          <h1 className="font-serif text-[7vw] md:text-[80px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            ПРОТОКОЛЫ <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              СИНТЕЗА
            </span>
          </h1>
        </div>

        {/* INTERFACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white/[0.01] border border-white/5 items-start relative shadow-2xl">
          {/* SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 z-30 bg-[#08080a] border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase flex items-center gap-2">
                <Activity className="w-3 h-3 text-primary animate-pulse" />{" "}
                Materials_DB
              </span>
              <Cpu className="w-3 h-3 text-white/10" />
            </div>

            <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden no-scrollbar bg-[#08080a]">
              {craftingData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "flex-shrink-0 lg:w-full flex items-center gap-6 p-6 lg:p-8 transition-all relative border-r lg:border-r-0 lg:border-b border-white/5 outline-none group",
                    selectedCategory.id === cat.id
                      ? "bg-primary/[0.07]"
                      : "hover:bg-white/[0.03]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 lg:top-0 h-1 lg:h-full w-full lg:w-1 transition-all duration-500",
                      selectedCategory.id === cat.id
                        ? "bg-primary shadow-[0_0_20px_#ff0000]"
                        : "bg-transparent"
                    )}
                  />
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center border transition-all duration-500",
                      selectedCategory.id === cat.id
                        ? "border-primary text-primary rotate-[135deg]"
                        : "border-white/10 text-white/20"
                    )}
                  >
                    <div
                      className={cn(
                        "transition-transform",
                        selectedCategory.id === cat.id ? "-rotate-[135deg]" : ""
                      )}
                    >
                      {cat.icon}
                    </div>
                  </div>
                  <div className="text-left flex-1">
                    <span
                      className={cn(
                        "font-serif text-lg lg:text-xl tracking-tight uppercase italic block",
                        selectedCategory.id === cat.id
                          ? "text-white"
                          : "text-white/30 group-hover:text-white/60"
                      )}
                    >
                      {cat.name}
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-8 p-8 md:p-16 bg-[#0a0a0c]/90 backdrop-blur-md min-h-screen relative overflow-hidden">
            <div className="relative z-10 space-y-16">
              {/* Category Header */}
              <div className="border-b border-white/5 pb-12">
                <div className="flex items-center gap-3 text-primary uppercase text-[10px] font-black tracking-[0.5em] mb-4">
                  <Zap className="w-4 h-4 fill-primary" /> Status: Manual_Access
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-white italic uppercase tracking-tighter mb-6">
                  {selectedCategory.name}
                </h2>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-primary pl-8 max-w-2xl">
                  {selectedCategory.description}
                </p>
                <div className="mt-8 inline-block px-4 py-2 bg-white/[0.02] border border-white/5 text-[10px] text-primary uppercase tracking-[0.2em]">
                  Условие: {selectedCategory.unlockCondition}
                </div>

                {/* --- СПЕЦИАЛЬНЫЕ ИНСТРУКЦИИ СЕРВЕРА --- */}
                {selectedCategory.id === "jewels" && (
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="relative p-6 bg-primary/5 border border-primary/20">
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                      <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Target className="w-3 h-3" /> Частица Демона
                      </h4>
                      <ul className="space-y-3">
                        <li className="text-[11px] text-white/70 leading-relaxed italic">
                          <span className="text-primary font-bold mr-2">
                            01.
                          </span>
                          Дейлики по выходным (см. канал{" "}
                          <span className="text-primary underline">
                            #announcements
                          </span>
                          )
                        </li>
                        <li className="text-[11px] text-white/70 leading-relaxed italic">
                          <span className="text-primary font-bold mr-2">
                            02.
                          </span>
                          Магазин{" "}
                          <span className="text-white font-bold">
                            "stp tp Shop"
                          </span>{" "}
                          (2500 рыжих осколков)
                        </li>
                        <li className="text-[11px] text-white/70 leading-relaxed italic">
                          <span className="text-primary font-bold mr-2">
                            03.
                          </span>
                          Донат-панель управления
                        </li>
                      </ul>
                    </div>

                    <div className="relative p-6 bg-white/[0.02] border border-white/10">
                      <h4 className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2">
                        <Activity className="w-3 h-3 text-primary" />{" "}
                        Совершенные камни
                      </h4>
                      <p className="text-[11px] text-white/50 leading-relaxed italic">
                        Выпадают только за{" "}
                        <span className="text-white italic">
                          Ежедневные квесты
                        </span>{" "}
                        в любой день. Необходимы для фиксации конкретной школы
                        магии при крафте Т5.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Recipe List */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
                    Available_Blueprints
                  </span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="grid gap-6">
                  {selectedCategory.recipes.map((recipe: any, idx) => (
                    <div
                      key={idx}
                      className="bg-[#08080a] border border-white/5 p-8 group hover:border-primary/30 transition-all relative overflow-hidden"
                    >
                      {recipe.title.includes("T5") && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />
                      )}

                      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 relative z-10">
                        <div>
                          <h3 className="text-white font-black uppercase tracking-[0.1em] text-2xl mb-2 flex items-center gap-3">
                            {recipe.title}
                            {recipe.title.includes("T5") && (
                              <Zap className="w-4 h-4 text-primary animate-pulse" />
                            )}
                          </h3>
                          <p className="text-white/40 text-sm italic">
                            {recipe.info}
                          </p>
                        </div>
                        <div className="h-fit py-2 px-4 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                          Synthesis_Ready
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        {recipe.ingredients.map((ing: any, i: number) => (
                          <div
                            key={i}
                            className="flex justify-between items-center p-3 bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04]"
                          >
                            <span className="text-[11px] text-white/50 uppercase tracking-wider">
                              {ing.name}
                            </span>
                            <span className="text-primary font-mono font-bold">
                              x{ing.count}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* --- УЛУЧШЕННАЯ ГАЛЕРЕЯ --- */}
                      {recipe.gallery && (
                        <div className="mt-10 pt-8 border-t border-white/5">
                          <div className="flex items-center gap-2 mb-6 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                            <Activity className="w-3 h-3 text-primary" />{" "}
                            Visual_Record_Archive
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {recipe.gallery.map((img: any, imgIdx: number) => (
                              <div
                                key={imgIdx}
                                onClick={() => setActiveImg(img.src)}
                                className="group/img relative bg-black border border-white/10 overflow-hidden cursor-zoom-in transition-transform hover:scale-[1.01]"
                              >
                                <div className="absolute inset-0 z-20 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                  <div className="px-4 py-2 bg-black/80 text-[10px] text-white font-bold border border-primary uppercase tracking-widest backdrop-blur-sm">
                                    Analyze_Data
                                  </div>
                                </div>

                                <img
                                  src={img.src}
                                  alt={img.label}
                                  className="w-full max-h-[200px] object-contain grayscale-[0.4] group-hover/img:grayscale-0 transition-all duration-700 opacity-90 group-hover/img:opacity-100"
                                />

                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-10">
                                  <p className="text-[10px] text-white font-bold uppercase tracking-[0.2em]">
                                    <span className="text-primary mr-2 font-mono">
                                      {imgIdx + 1}.
                                    </span>{" "}
                                    {img.label}
                                  </p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* --- FULLSCREEN MODAL --- */}
      {activeImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setActiveImg(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <button className="absolute top-0 right-0 p-8 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeImg}
              className="max-w-full max-h-[90vh] object-contain border border-white/10 shadow-2xl shadow-primary/10"
              alt="Fullscreen view"
            />
          </div>
        </div>
      )}

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
