"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import commandsDataRaw from "@/data/commands.json";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronDown,
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
import Image from "next/image";
import { useMemo, useState, useSyncExternalStore } from "react";

interface Command {
  cmd: string;
  desc: string;
  group: string;
  danger?: boolean;
}

const commandsData = commandsDataRaw as Command[];

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

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
    Классы: {
      color: "text-purple-400",
      border: "border-purple-400/20",
      icon: <Zap className="w-4 h-4" />,
    },
    Оружие: {
      color: "text-blue-500",
      border: "border-blue-500/20",
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

function CommandsContent() {
  const isClient = useIsClient();
  const [search, setSearch] = useState("");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Все");
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Все",
    "Основные",
    "Классы",
    "Оружие",
    "Престиж",
    "Наследие",
    "Фамильяры",
    "Логистика",
    "Мир",
    "Телепортация",
    "Информация",
    "Уведомления",
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

  if (!isClient) return <div className="min-h-screen bg-[#050505]" />;

  return (
    // УБРАН overflow-x-hidden, так как он ломает sticky
    <div className="relative min-h-screen bg-[#050505] selection:bg-primary/30 font-sans">
      {/* STATIC BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/bg-2.jpg"
          alt="Terminal Background"
          fill
          className="object-cover object-center grayscale opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-24">
        {/* HEADER SECTION */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Vampire Terminal // Logic Unit
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>
          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            АРХИВ <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              КОМАНД
            </span>
          </h1>
          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              Реестр магических директив Blood and Wine. <br />
              <span className="text-white font-bold not-italic underline decoration-primary decoration-2 underline-offset-8 uppercase text-xs tracking-[0.2em]">
                Кликните на код для копирования
              </span>
            </p>
          </div>
        </div>

        {/* STICKY SEARCH BOX */}
        <div className="sticky top-20 z-[100] mb-12 -mx-2 px-2 py-4 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
          <div className="bg-[#080808] border border-white/10 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col lg:flex-row h-16 relative">
              {/* ЛЕВАЯ ЧАСТЬ: ПОИСК */}
              <div className="relative flex-1 border-r border-white/5">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                <input
                  placeholder="ПОИСК ДИРЕКТИВЫ..."
                  className="w-full h-full rounded-none pl-16 bg-transparent text-white focus:outline-none text-[10px] font-black uppercase tracking-[0.2em] placeholder:text-white/20"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* ПРАВАЯ ЧАСТЬ: CUSTOM DROPDOWN */}
              <div className="relative lg:w-72 bg-white/[0.02]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full h-14 lg:h-full flex items-center justify-between px-6 lg:px-8 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/5 group border-t lg:border-t-0 border-white/5"
                >
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[6px] lg:text-[7px] text-primary leading-none mb-1 lg:mb-1.5 opacity-70 tracking-widest">
                      ФИЛЬТР_ГРУППЫ
                    </span>
                    <span className="truncate max-w-[160px] sm:max-w-none">
                      {activeTab || "ВСЕ КАТЕГОРИИ"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Дополнительный индикатор для мобайла, что это выбор */}
                    <span className="lg:hidden text-[8px] text-white/20 uppercase">
                      ИЗМЕНИТЬ
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-primary transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                </button>

                {/* ВЫПАДАЮЩЕЕ МЕНЮ (Плавающее поверх) */}
                {isOpen && (
                  <>
                    {/* Оверлей для закрытия кликом по любой области */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute top-[calc(100%+8px)] right-0 w-full bg-[#080808] border border-white/10 p-1 shadow-[0_30px_60px_rgba(0,0,0,1)] z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="max-h-64 overflow-y-auto no-scrollbar">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setActiveTab(cat);
                              setIsOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all border-b border-white/[0.03] last:border-none",
                              activeTab === cat
                                ? "bg-primary text-white"
                                : "text-slate-400 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            {cat}
                            {activeTab === cat && (
                              <div className="w-1.5 h-1.5 bg-white rotate-45" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Декоративная полоска (всегда внизу кнопки) */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30" />
              </div>
            </div>
          </div>
        </div>

        {/* COMMAND LIST */}
        <div className="grid gap-px bg-white/5 border border-white/5 shadow-2xl">
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
                      : "bg-[#080808]/80 hover:bg-white/[0.05]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 transition-transform origin-top duration-300",
                      isCopied
                        ? "bg-primary scale-y-100"
                        : "bg-white/10 scale-y-0 group-hover:scale-y-100"
                    )}
                  />
                  <div className="flex items-center gap-10 md:w-1/3 mb-6 md:mb-0 relative z-10">
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
                  <div className="flex-1 border-l border-white/5 pl-10 md:mr-10 relative z-10">
                    <p className="text-white/40 group-hover:text-white/60 transition-colors text-base font-light italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-end md:w-32 mt-6 md:mt-0 opacity-20 group-hover:opacity-100 transition-opacity relative z-10">
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
            <div className="py-40 text-center bg-[#080808]">
              <BookOpen className="w-12 h-12 text-white/5 mx-auto mb-6" />
              <p className="text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">
                Архив пуст
              </p>
            </div>
          )}
        </div>

        {/* INFO FOOTER */}
        <footer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          <div className="p-12 bg-[#080808]/80 backdrop-blur-sm flex gap-8 items-start hover:bg-white/[0.05] transition-colors">
            <div className="p-5 border border-primary/20 bg-primary/5 text-primary">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-serif text-white mb-4 uppercase tracking-widest italic">
                Инструкция
              </h4>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] leading-loose font-bold">
                Нажмите <span className="text-primary">ENTER</span> для чата,
                затем <span className="text-primary">CTRL+V</span>.
              </p>
            </div>
          </div>
          <div className="p-12 bg-[#080808]/80 backdrop-blur-sm flex gap-8 items-start hover:bg-white/[0.05] transition-colors">
            <div className="p-5 border border-red-500/20 bg-red-500/5 text-red-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-serif text-red-500 mb-4 uppercase tracking-widest italic">
                Внимание
              </h4>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] leading-loose font-bold">
                Директивы{" "}
                <span className="text-red-500 font-black">DANGER</span> могут
                привести к сбросу прогресса.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
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

export default dynamic(() => Promise.resolve(CommandsContent), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="w-12 h-px bg-primary animate-pulse" />
    </div>
  ),
});
