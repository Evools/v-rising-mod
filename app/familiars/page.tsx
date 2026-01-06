"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ChevronDown,
  Crosshair,
  Dna,
  Flame,
  Ghost,
  Info,
  Search,
  ShieldAlert,
  Skull,
  Star,
  Terminal,
  Trash2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState, useSyncExternalStore } from "react";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

// --- ДАННЫЕ (Команды лучше импортировать из файла, здесь для примера) ---
const familiarCommands = [
  {
    group: "Управление",
    cmd: ".fam l",
    desc: "Список всех разблокированных фамильяров в текущей коробке",
    shortcut: ".fam list",
  },
  {
    group: "Управление",
    cmd: ".fam b [#]",
    desc: "Активировать (призвать) фамильяра из списка по его номеру",
    shortcut: ".fam bind",
  },
  {
    group: "Управление",
    cmd: ".fam t",
    desc: "Призвать или отозвать текущего активного фамильяра",
    shortcut: ".fam toggle",
  },
  {
    group: "Развитие",
    cmd: ".fam pr",
    desc: "Провести ритуал престижа для усиления базовых статов",
    shortcut: ".fam prestige",
  },
  {
    group: "Развитие",
    cmd: ".fam gl",
    desc: "Показать текущий уровень и подробные характеристики",
    shortcut: ".fam getlevel",
  },
  {
    group: "Развитие",
    cmd: ".fam shiny [School]",
    desc: "Сделать фамильяра сияющим (эффект школы магии)",
    shortcut: ".fam shinybuff",
  },
  {
    group: "Коробки",
    cmd: ".fam boxes",
    desc: "Просмотреть список всех ваших коробок для хранения",
    shortcut: ".fam listboxes",
  },
  {
    group: "Коробки",
    cmd: ".fam ab [Name]",
    desc: "Создать новую пустую коробку с указанным именем",
    shortcut: ".fam addbox",
  },
  {
    group: "Бой",
    cmd: ".fam c",
    desc: "Вкл/Выкл режим участия фамильяра в бою",
    shortcut: ".fam togglecombat",
  },
  {
    group: "Бой",
    cmd: ".fam bgs",
    desc: "Просмотреть список ваших боевых групп",
    shortcut: ".fam listbattlegroups",
  },
  {
    group: "Опасные",
    cmd: ".fam r [#]",
    desc: "Навсегда удалить фамильяра из вашего списка",
    shortcut: ".fam remove",
    danger: true,
  },
  {
    group: "Опасные",
    cmd: ".fam reset",
    desc: "Экстренный сброс данных активных сущностей",
    shortcut: ".fam reset",
    danger: true,
  },
];

const bosses = [
  {
    name: "Alpha Wolf",
    type: "Beast",
    bonus: "Скорость передвижения +10%",
    chance: "15%",
    icon: <Skull className="w-4 h-4" />,
  },
  {
    name: "Errol the Stonebreaker",
    type: "Humanoid",
    bonus: "Урон по постройкам +20%",
    chance: "8%",
    icon: <Flame className="w-4 h-4" />,
  },
  {
    name: "Keely the Frost Archer",
    type: "Humanoid",
    bonus: "Сопротивление холоду +15",
    chance: "10%",
    icon: <Ghost className="w-4 h-4" />,
  },
];

export default function FamiliarsPage() {
  const isClient = useIsClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("Все");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const groups = [
    "Все",
    ...Array.from(new Set(familiarCommands.map((c) => c.group))),
  ];

  const filteredCommands = useMemo(() => {
    return familiarCommands.filter((c) => {
      const matchesSearch =
        c.cmd.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGroup = activeGroup === "Все" || c.group === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, activeGroup]);

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  if (!isClient) return <div className="min-h-screen bg-[#050507]" />;

  return (
    <div className="relative min-h-screen bg-[#050507] text-white font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* --- STATIC BACKGROUND LAYER (60vh) --- */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <Image
          src="/bg-1.jpg"
          alt="Familiars Background"
          fill
          priority
          className="object-cover object-center grayscale opacity-30"
        />
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(220,38,38,0.06),rgba(0,255,0,0.01),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]" />
      </div>
      {/* -------------------------------------- */}

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-20">
        {/* HEADER SECTION */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Bloodcraft Familiars Registry // Unit_Capture
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            БЕСТИАРИЙ <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              ДУШ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-[0.15em] font-light uppercase italic leading-relaxed">
              «Подчините себе эссенцию павших врагов. <br />
              Боссы Вардорана теперь могут служить вам, <br />
              даруя свою{" "}
              <span className="text-white font-bold not-italic">
                силу и преданность
              </span>
              .»
            </p>
          </div>
        </div>

        {/* INFO CARDS (HUD STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-24 shadow-2xl">
          <div className="p-10 bg-[#08080a]/80 backdrop-blur-sm flex gap-6 items-start hover:bg-white/[0.03] transition-colors">
            <Crosshair className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Механика поимки
              </p>
              <p className="text-sm text-white/40 italic leading-relaxed">
                Снизьте здоровье босса до{" "}
                <span className="text-white font-bold underline decoration-primary underline-offset-4">
                  25%
                </span>{" "}
                и используйте Призму для захвата.
              </p>
            </div>
          </div>

          <div className="p-10 bg-[#08080a]/80 backdrop-blur-sm flex gap-6 items-start hover:bg-white/[0.03] transition-colors">
            <Dna className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Престиж питомца
              </p>
              <p className="text-sm text-white/40 italic leading-relaxed">
                Каждый уровень престижа открывает скрытые пассивные навыки и
                усиливает ауру.
              </p>
            </div>
          </div>

          <div className="p-10 bg-[#08080a]/80 backdrop-blur-sm flex gap-6 items-start hover:bg-white/[0.03] transition-colors">
            <ShieldAlert className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Лимит контроля
              </p>
              <p className="text-sm text-white/40 italic leading-relaxed uppercase tracking-tighter text-[11px]">
                Один активный спутник. Призыв:{" "}
                <code className="text-primary font-bold">.fam summon</code>
              </p>
            </div>
          </div>
        </div>

        <section className="mb-32 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-serif text-3xl uppercase italic tracking-tighter">
                Терминал <span className="text-red-500">Команд</span>
              </h2>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mt-2">
                Нажмите на команду для копирования
              </p>
            </div>

            {/* Поиск и Фильтр */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* SEARCH INPUT */}
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  placeholder="ПОИСК КОМАНДЫ..."
                  className="bg-white/5 border border-white/10 pl-10 pr-4 py-2 text-[10px] font-black tracking-widest uppercase focus:outline-none focus:border-red-500/50 w-full sm:w-64 transition-all"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* CUSTOM SELECT */}
              <div className="relative w-full sm:w-56">
                <button
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase flex items-center justify-between hover:bg-white/10 transition-all focus:border-red-500/50"
                >
                  <span className="text-white/40">Группа: </span>
                  <span className="text-white">{activeGroup}</span>
                  <div
                    className={cn(
                      "ml-2 transition-transform duration-300",
                      isSelectOpen ? "rotate-180" : ""
                    )}
                  >
                    <ChevronDown size={14} className="text-red-500" />
                  </div>
                </button>

                {/* DROPDOWN MENU */}
                {isSelectOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsSelectOpen(false)}
                    />

                    <div className="absolute top-full left-0 w-full mt-1 bg-[#0a0a0c] border border-white/10 z-50 py-1 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      {groups.map((g) => (
                        <button
                          key={g}
                          className={cn(
                            "w-full text-left px-4 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all",
                            activeGroup === g
                              ? "text-red-500 bg-white/5"
                              : "text-white/40"
                          )}
                          onClick={() => {
                            setActiveGroup(g);
                            setIsSelectOpen(false);
                          }}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {filteredCommands.map((c, i) => (
              <div
                key={i}
                onClick={() => handleCopy(c.cmd)}
                className={cn(
                  "relative p-5 bg-[#08080a] border border-white/5 hover:border-red-500/30 cursor-pointer transition-all group overflow-hidden",
                  c.danger && "hover:border-red-500"
                )}
              >
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <code
                        className={cn(
                          "text-lg font-black tracking-tighter",
                          c.danger ? "text-red-500" : "text-red-500"
                        )}
                      >
                        {c.cmd}
                      </code>
                      {copiedCmd === c.cmd && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 animate-in zoom-in" />
                      )}
                    </div>
                    <p className="text-xs text-white/40 italic font-medium group-hover:text-white/70 transition-colors">
                      {c.desc}
                    </p>
                  </div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/10 group-hover:text-red-500/40 transition-colors">
                    {c.shortcut}
                  </div>
                </div>
                {/* Декоративная вспышка при копировании */}
                {copiedCmd === c.cmd && (
                  <div className="absolute inset-0 bg-red-500/10 animate-pulse" />
                )}
                {c.danger && (
                  <div className="absolute top-0 right-0 p-1">
                    <Trash2 size={10} className="text-red-500/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOSSES TABLE */}
        <div className="space-y-8">
          <div className="flex items-end justify-between border-b-2 border-primary/20 pb-6">
            <h2 className="font-serif text-3xl uppercase tracking-tighter italic">
              Реестр <span className="text-primary">Сущностей</span>
            </h2>
            <div className="flex items-center gap-4">
              <Star className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
                Archives Updated: 2025
              </span>
            </div>
          </div>

          <div className="border border-white/10 bg-[#08080a]/60 backdrop-blur-md overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 border-r border-white/10">
                      Существо
                    </th>
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 border-r border-white/10">
                      Классификация
                    </th>
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 border-r border-white/10">
                      Даруемый Эффект
                    </th>
                    <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/40 text-right">
                      Шанс
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bosses.map((b) => (
                    <tr
                      key={b.name}
                      className="group hover:bg-primary/[0.03] transition-all duration-300"
                    >
                      <td className="p-8 border-r border-white/10">
                        <div className="flex items-center gap-6">
                          <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-primary group-hover:text-primary transition-all">
                            {b.icon}
                          </div>
                          <span className="font-serif text-2xl tracking-tighter text-white group-hover:translate-x-2 transition-transform italic">
                            {b.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-8 border-r border-white/10">
                        <span className="text-[9px] uppercase tracking-[0.2em] font-black text-white/40 border border-white/10 px-3 py-1.5 group-hover:border-primary/40 group-hover:text-white transition-colors">
                          {b.type}
                        </span>
                      </td>
                      <td className="p-8 text-sm italic text-white/40 font-light border-r border-white/10 group-hover:text-white/80">
                        {b.bonus}
                      </td>
                      <td className="p-8 text-right">
                        <span className="font-mono text-primary text-lg font-bold tracking-tighter">
                          {b.chance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
