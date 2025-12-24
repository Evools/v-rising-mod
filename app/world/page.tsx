"use client";

import {
  Axe,
  Coins,
  Fish,
  FlaskConical,
  Gem,
  Hammer,
  Home,
  Info,
  Pickaxe,
  Shirt,
  Shovel,
  Store,
} from "lucide-react";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const professions = [
  {
    name: "Шахтерство",
    code: "MN-01",
    icon: <Pickaxe className="w-5 h-5" />,
    bonus:
      "Повышает кол-во лута собираемого с камней, руды и так же повышает шанс выпадения самоцветов и глины.",
    stats: "Loot: +X% / Gems: +X%",
  },
  {
    name: "Дровосек",
    code: "WC-02",
    icon: <Axe className="w-5 h-5" />,
    bonus:
      "Повышает кол-во лута собираемого с Деревьев и так же повышает шанс на выпадение саженцев.",
    stats: "Yield: +X% / Saplings: +X%",
  },
  {
    name: "Травничество",
    code: "HR-03",
    icon: <Shovel className="w-5 h-5" />,
    bonus:
      "Повышает кол-во лута которое собирается с грядок и травы а так же повышает шанс выпадения семян.",
    stats: "Flora: +X% / Seeds: +X%",
  },
  {
    name: "Рыбалка",
    code: "FS-04",
    icon: <Fish className="w-5 h-5" />,
    bonus: "Дает (+1) рыбу при рыбалке за каждые [20] уровней прокачки.",
    stats: "Scale: 1:20 Lvl",
  },
  {
    name: "Алхимия",
    code: "AL-05",
    icon: <FlaskConical className="w-5 h-5" />,
    bonus:
      "Повышает время действия до (2 часов). Усиливает эффекты Силы Магии и Физ.Силы.",
    stats: "Time: 120m / Potency: +X%",
  },
  {
    name: "Кузнечное дело",
    code: "BS-06",
    icon: <Hammer className="w-5 h-5" />,
    bonus:
      "Прочность оружия (Лег. [7600]). Повышает физ.урон, когда оружие находится в руках.",
    stats: "Dura: 7600 / Phys DMG",
  },
  {
    name: "Ювелирное дело",
    code: "JW-07",
    icon: <Gem className="w-5 h-5" />,
    bonus:
      "Прочность Амулетов (До [2895]). Повышает силу магии надеваемых амулетов.",
    stats: "Dura: 2895 / Spell PWR",
  },
  {
    name: "Портняжное Дело",
    code: "TL-08",
    icon: <Shirt className="w-5 h-5" />,
    bonus: "Прочность Брони (До [3273]). Повышает максимальное ХП.",
    stats: "Dura: 3273 / Max HP",
  },
];

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

export default function WorldPage() {
  const isClient = useIsClient();
  if (!isClient) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <main className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-primary">
      {/* BACKGROUND & HUD (Тот же стиль, что в Hero) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-1.jpg"
          alt="World Background"
          fill
          className="object-cover object-center opacity-10 grayscale"
        />
        {/* HUD Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
        </div>
      </div>

      {/* SIDE DATA (Вертикальный декор из Hero) */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 z-40 [writing-mode:vertical-lr] rotate-180 opacity-20">
        <p className="text-[9px] font-black tracking-[1em] uppercase">
          Economy_Module_v2.04
        </p>
      </div>
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 z-40 [writing-mode:vertical-lr] opacity-20">
        <p className="text-[9px] font-black tracking-[1em] uppercase text-primary">
          Data_Synchronized
        </p>
      </div>

      <div className="container relative z-20 mx-auto px-4 pt-44 pb-32">
        {/* HEADER SECTION */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Infrastructure Hub
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            МИР <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              &
            </span>{" "}
            ЭКОНОМИКА
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5">
            {/* Декоративные уголки для рамки цитаты */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              «Ремесло — это фундамент, на котором <br />
              зиждется твое{" "}
              <span className="text-white font-bold not-italic">величие</span>»
            </p>
          </div>
        </div>

        {/* PROFESSIONS GRID (Brutalist Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-20 shadow-2xl">
          {professions.map((p) => (
            <div
              key={p.code}
              className="group relative p-8 bg-[#050505] hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
                </div>
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">
                  [ {p.code} ]
                </span>
              </div>

              <h3 className="font-serif text-2xl text-white mb-4 uppercase italic font-black tracking-tight group-hover:text-primary transition-colors">
                {p.name}
              </h3>

              <p className="text-white/40 text-[11px] leading-relaxed mb-8 h-20 overflow-hidden font-bold uppercase tracking-wider italic">
                {p.bonus}
              </p>

              <div className="pt-4 border-t border-white/5 flex flex-col gap-1">
                <span className="text-[8px] font-black text-primary/60 uppercase tracking-widest">
                  Mastery_Stats:
                </span>
                <span className="text-[10px] font-mono text-white/60">
                  {p.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BLOCKS (Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {/* Economy */}
          <div className="bg-[#050505] p-12 md:p-16 relative">
            <div className="flex items-center gap-6 mb-12">
              <div className="h-12 w-1 bg-primary" />
              <h2 className="font-serif text-4xl text-white uppercase italic font-black tracking-tighter">
                Экономика
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Copper Coins / Tier I",
                "Iron Coins / Tier II",
                "Gold Coins / Tier III",
              ].map((coin, i) => (
                <div
                  key={i}
                  className="flex justify-between p-5 bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Coins className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      {coin.split(" / ")[0]}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase">
                    {coin.split(" / ")[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Innkeeper */}
          <div className="bg-[#050505] p-12 md:p-16 flex flex-col justify-between border-l border-white/10">
            <div>
              <div className="flex items-center gap-6 mb-12">
                <div className="h-12 w-1 bg-primary" />
                <h2 className="font-serif text-4xl text-white uppercase italic font-black tracking-tighter">
                  Innkeeper
                </h2>
              </div>
              <ul className="space-y-4 mb-12">
                {[
                  "Аренда защищенных хранилищ",
                  "Безопасная зона (Anti-Raid)",
                  "Узел возрождения душ",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]"
                  >
                    <div className="w-1.5 h-1.5 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-primary bg-primary/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-1">
                  Terminal_Cmd
                </span>
                <code className="text-2xl font-mono text-white font-bold tracking-tighter">
                  .inn join
                </code>
              </div>
              <div className="h-10 w-px bg-primary/30" />
              <div className="text-[10px] text-white/40 font-black uppercase tracking-widest italic">
                Auth_Req
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM ALERT (Как в Hero стиле) */}
        <div className="mt-12 p-8 border border-primary/20 bg-primary/5 relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
          <div className="flex items-center gap-6">
            <Info className="w-6 h-6 text-primary" />
            <p className="text-[11px] font-black text-white/60 uppercase tracking-[0.2em] leading-relaxed">
              <span className="text-primary">System_Warning:</span> Смена
              специализации уровня [100] требует подтверждения совета и влечет
              за собой полный сброс текущего прогресса.
            </p>
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
    </main>
  );
}
