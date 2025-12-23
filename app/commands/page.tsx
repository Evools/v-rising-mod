"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// Импорт данных из вашего JSON
import commandsDataRaw from "@/data/commands.json";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronRight,
  Crown,
  Droplets,
  Globe,
  Hash,
  Package,
  Search,
  Sword,
  Terminal,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

// Типизация для команд
interface Command {
  cmd: string;
  desc: string;
  group: string;
  danger?: boolean;
}

const commandsData = commandsDataRaw as Command[];

const getGroupStyle = (group: string) => {
  const styles: Record<
    string,
    { color: string; border: string; icon: React.ReactNode }
  > = {
    Престиж: {
      color: "text-amber-400",
      border: "border-amber-400/20",
      icon: <Crown className="w-4 h-4" />,
    },
    RPG: {
      color: "text-blue-400",
      border: "border-blue-400/20",
      icon: <Sword className="w-4 h-4" />,
    },
    Логистика: {
      color: "text-emerald-400",
      border: "border-emerald-400/20",
      icon: <Package className="w-4 h-4" />,
    },
    Наследие: {
      color: "text-red-500",
      border: "border-red-500/20",
      icon: <Droplets className="w-4 h-4" />,
    },
    Фамильяры: {
      color: "text-orange-500",
      border: "border-orange-500/20",
      icon: <Zap className="w-4 h-4" />,
    },
    Мир: {
      color: "text-purple-400",
      border: "border-purple-400/20",
      icon: <Globe className="w-4 h-4" />,
    },
  };
  return (
    styles[group] || {
      color: "text-slate-400",
      border: "border-white/10",
      icon: <Hash className="w-4 h-4" />,
    }
  );
};

// Основной контент страницы
function CommandsContent() {
  const [search, setSearch] = useState("");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Все");

  const categories = [
    "Все",
    "Основные",
    "RPG",
    "Престиж",
    "Наследие",
    "Фамильяры",
    "Логистика",
    "Мир",
  ];

  const filtered = useMemo(() => {
    return commandsData.filter((c) => {
      const matchesSearch =
        c.cmd.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase());
      const matchesTab = activeTab === "Все" || c.group === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  const handleCopy = (cmd: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(cmd);
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd(null), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-primary/30">
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-24">
        {/* HEADER */}
        <header className="max-w-3xl mb-16 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">
              Vampire Terminal v.2.1
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter text-white mb-8 italic italic-accent">
            АРХИВ <span className="text-primary not-italic">КОМАНД</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed border-l border-primary/40 pl-8 italic">
            Реестр магических директив Blood and Wine.
            <span className="text-white block mt-3 font-bold not-italic uppercase text-[10px] tracking-[0.3em]">
              Кликните на строку для копирования
            </span>
          </p>
        </header>

        {/* SEARCH BOX */}
        <div className="sticky top-24 z-50 mb-12">
          <div className="bg-[#121215]/95 backdrop-blur-md border border-white/10 p-1 shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="relative flex-1 border-r border-white/5">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                <Input
                  placeholder="ПОИСК ДИРЕКТИВЫ..."
                  className="rounded-none pl-16 border-none bg-transparent text-white focus-visible:ring-0 h-16 text-[10px] font-black uppercase tracking-[0.2em] placeholder:text-white/20"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap bg-white/[0.02]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={cn(
                      "px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all border-r border-white/5",
                      activeTab === cat
                        ? "bg-primary text-white"
                        : "text-slate-500 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COMMAND LIST */}
        <div className="grid gap-px bg-white/5 border border-white/5 shadow-2xl overflow-hidden">
          {filtered.length > 0 ? (
            filtered.map((item, index) => {
              const style = getGroupStyle(item.group);
              const isCopied = copiedCmd === item.cmd;

              return (
                <div
                  key={`${item.cmd}-${index}`}
                  onClick={() => handleCopy(item.cmd)}
                  className={cn(
                    "group relative flex flex-col md:flex-row md:items-center py-8 px-10 transition-all cursor-pointer",
                    isCopied
                      ? "bg-primary/10"
                      : "bg-[#0c0c0e] hover:bg-[#121215]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 transition-transform origin-top duration-300",
                      isCopied
                        ? "bg-primary scale-y-100 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                        : "bg-white/10 scale-y-0 group-hover:scale-y-100"
                    )}
                  />

                  <div className="flex items-center gap-10 md:w-1/3 mb-6 md:mb-0">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border transition-all",
                        isCopied
                          ? "bg-primary border-primary text-white"
                          : cn(
                              style.border,
                              style.color,
                              "group-hover:border-primary"
                            )
                      )}
                    >
                      {isCopied ? <Check className="w-5 h-5" /> : style.icon}
                    </div>
                    <div>
                      <div
                        className={cn(
                          "text-[8px] font-black uppercase tracking-[0.4em] mb-2 opacity-40",
                          isCopied ? "text-primary" : style.color
                        )}
                      >
                        {item.group}
                      </div>
                      <code
                        className={cn(
                          "font-mono text-lg font-bold tracking-tight",
                          item.danger
                            ? "text-red-500 underline decoration-red-500/30"
                            : "text-white group-hover:text-primary"
                        )}
                      >
                        {item.cmd}
                      </code>
                    </div>
                  </div>

                  <div className="flex-1 border-l border-white/5 pl-10 md:mr-10">
                    <p className="text-slate-400 text-base font-light italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-end md:w-32 mt-6 md:mt-0 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-black uppercase tracking-widest mr-4">
                      {isCopied ? "COPIED" : "SELECT"}
                    </span>
                    <ChevronRight
                      className={cn(
                        "w-5 h-5 transition-transform",
                        isCopied && "translate-x-1 text-primary"
                      )}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-40 text-center bg-[#0c0c0e]">
              <BookOpen className="w-12 h-12 text-white/5 mx-auto mb-6" />
              <p className="text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">
                Архив пуст
              </p>
            </div>
          )}
        </div>

        {/* INFO FOOTER */}
        <footer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          <div className="p-12 bg-[#0c0c0e] flex gap-8 items-start hover:bg-[#121215] transition-colors">
            <div className="p-5 border border-primary/20 bg-primary/5 text-primary">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-widest italic">
                Инструкция
              </h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] leading-loose font-bold">
                Нажмите{" "}
                <span className="text-primary underline underline-offset-4 tracking-normal">
                  ENTER
                </span>{" "}
                для чата, затем <span className="text-primary">CTRL+V</span>.
              </p>
            </div>
          </div>

          <div className="p-12 bg-[#0c0c0e] flex gap-8 items-start hover:bg-[#121215] transition-colors">
            <div className="p-5 border border-red-500/20 bg-red-500/5 text-red-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-serif text-red-500 mb-4 uppercase tracking-widest italic">
                Внимание
              </h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] leading-loose font-bold">
                Директивы с пометкой{" "}
                <span className="text-red-500">DANGER</span> могут привести к
                сбросу прогресса.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");
        .font-serif {
          font-family: "Cinzel", serif;
        }
        * {
          border-radius: 0 !important;
        }
        .italic-accent {
          text-shadow: 0 0 40px rgba(220, 38, 38, 0.2);
        }
      `}</style>
    </div>
  );
}

// ЭКСПОРТ ЧЕРЕЗ DYNAMIC БЕЗ SSR
export default dynamic(() => Promise.resolve(CommandsContent), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">
      <div className="w-12 h-px bg-primary animate-pulse" />
    </div>
  ),
});
