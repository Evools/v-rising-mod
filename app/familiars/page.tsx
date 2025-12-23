"use client";

import {
  Crosshair,
  Dna,
  Flame,
  Ghost,
  Info,
  ShieldAlert,
  Skull,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useSyncExternalStore } from "react";

// Безопасная проверка клиента для Next.js
const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

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

  // Пока компонент не на клиенте, рендерим пустой фон для стабильности гидратации
  if (!isClient) return <div className="min-h-screen bg-[#0a0a0c]" />;

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden font-sans selection:bg-primary/30 selection:text-white">
      {/* ФОН (БЕЗ СКРУГЛЕНИЙ) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-1.jpg"
          alt="Familiars"
          fill
          priority
          className="object-cover object-center opacity-[0.05] dark:opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-40 pb-20">
        {/* ХЕДЕР (Sharp & Gothic) */}
        <div className="max-w-4xl mb-24 animate-in fade-in slide-in-from-left-6 duration-1000">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px]">
              Bloodcraft Familiars Registry
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-8 tracking-tighter uppercase leading-none italic">
            Бестиарий <span className="not-italic text-primary">Душ</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground font-light text-xl leading-relaxed italic border-l-2 border-primary pl-8 bg-primary/5 py-4">
            «Подчините себе эссенцию павших врагов. Боссы Вардорана теперь могут
            служить вам, даруя свою силу и преданность.»
          </p>
        </div>

        {/* ИНФО-КАРТОЧКИ (BRUTAL HUD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border mb-24 shadow-[20px_20px_0px_rgba(0,0,0,0.2)]">
          <div className="p-10 bg-card/40 flex gap-6 items-start hover:bg-card/60 transition-colors">
            <Crosshair className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Механика поимки
              </p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Снизьте здоровье босса до{" "}
                <span className="text-foreground font-bold underline decoration-primary underline-offset-4">
                  25%
                </span>{" "}
                и используйте Призму для захвата.
              </p>
            </div>
          </div>

          <div className="p-10 bg-card/40 flex gap-6 items-start hover:bg-card/60 transition-colors">
            <Dna className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Престиж питомца
              </p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Каждый уровень престижа открывает скрытые пассивные навыки и
                усиливает ауру.
              </p>
            </div>
          </div>

          <div className="p-10 bg-card/40 flex gap-6 items-start hover:bg-card/60 transition-colors">
            <ShieldAlert className="text-primary w-6 h-6 shrink-0" />
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">
                Лимит контроля
              </p>
              <p className="text-sm text-muted-foreground italic leading-relaxed uppercase tracking-tighter text-[11px]">
                Один активный спутник. Призыв:{" "}
                <code className="text-primary font-bold">.fam summon</code>
              </p>
            </div>
          </div>
        </div>

        {/* ТАБЛИЦА БОССОВ (СТРОГАЯ ГЕОМЕТРИЯ) */}
        <div className="space-y-8">
          <div className="flex items-end justify-between border-b-2 border-primary/20 pb-6">
            <h2 className="font-serif text-3xl uppercase tracking-tighter italic">
              Реестр <span className="text-primary">Сущностей</span>
            </h2>
            <div className="flex items-center gap-4">
              <Star className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">
                Archives Updated: 2024
              </span>
            </div>
          </div>

          <div className="border border-border bg-card/5 backdrop-blur-md overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-white/[0.02]">
                  <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground border-r border-border">
                    Существо
                  </th>
                  <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground border-r border-border">
                    Классификация
                  </th>
                  <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground border-r border-border">
                    Даруемый Эффект
                  </th>
                  <th className="p-8 text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground text-right">
                    Шанс
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bosses.map((b) => (
                  <tr
                    key={b.name}
                    className="group hover:bg-primary/[0.03] transition-all duration-300"
                  >
                    <td className="p-8 border-r border-border">
                      <div className="flex items-center gap-6">
                        <div className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all">
                          {b.icon}
                        </div>
                        <span className="font-serif text-2xl tracking-tighter text-foreground group-hover:translate-x-2 transition-transform italic">
                          {b.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-8 border-r border-border">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-black text-muted-foreground border border-border px-3 py-1.5 group-hover:border-primary/40 group-hover:text-foreground transition-colors">
                        {b.type}
                      </span>
                    </td>
                    <td className="p-8 text-sm italic text-muted-foreground font-light border-r border-border group-hover:text-foreground">
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

        {/* ФУТЕР БЛОК (Sharp Edge) */}
        <div className="mt-16 p-1 bg-border shadow-2xl">
          <div className="p-12 bg-background flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 border border-primary/20">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-black leading-relaxed">
                Полная техническая справка: <br />
                <code className="text-primary text-sm">.fam help_terminal</code>
              </p>
            </div>
            <div className="flex gap-12 border-l border-white/5 pl-12">
              <div className="text-right">
                <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mb-2 opacity-30">
                  Maximum Rank
                </p>
                <p className="font-serif text-3xl text-primary uppercase italic tracking-tighter">
                  10 Prestige
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] uppercase font-black text-muted-foreground tracking-widest mb-2 opacity-30">
                  Capture System
                </p>
                <p className="font-serif text-3xl text-white uppercase italic tracking-tighter">
                  Online
                </p>
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

        /* Принудительный сброс всех скруглений в проекте */
        * {
          border-radius: 0 !important;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0c;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1e;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}
