"use client";

import {
  ChevronLeft,
  Crosshair,
  Gauge,
  Hammer,
  Sword,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

const weaponExpertise = [
  {
    name: "Physical Power",
    code: "PH_PWR",
    desc: "Прямое увеличение физического урона. Влияет на базовые атаки и способности оружия.",
    bonus: "+1.5% за ед. уровня",
    icon: <Sword className="w-5 h-5" />,
  },
  {
    name: "Attack Speed",
    code: "ATK_SPD",
    desc: "Снижает время восстановления между атаками и ускоряет анимации умений оружия.",
    bonus: "+2.0% за ед. уровня",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Critical Chance",
    code: "CRIT_CH",
    desc: "Шанс нанести критический удар. Критический урон по умолчанию составляет 150%.",
    bonus: "+0.8% за ед. уровня",
    icon: <Target className="w-5 h-5" />,
  },
  {
    name: "Weapon Leech",
    code: "W_LEECH",
    desc: "Преобразует часть нанесенного урона в ваше здоровье при атаках ближнего боя.",
    bonus: "+1.0% за ед. уровня",
    icon: <Crosshair className="w-5 h-5" />,
  },
];

const masteries = [
  {
    type: "Swords",
    level: "Lvl 1-20",
    benefit: "Увеличивает мобильность и шанс уклонения.",
  },
  {
    type: "Axes",
    level: "Lvl 1-20",
    benefit: "Повышает чистый урон и шанс оглушения.",
  },
  {
    type: "Crossbows",
    level: "Lvl 1-20",
    benefit: "Дальность стрельбы и пробивание брони.",
  },
];

export default function WeaponsWiki() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4 font-sans">
      <div className="container mx-auto">
        {/* Назад */}
        <Link
          href="/wiki"
          className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-10 group uppercase text-[10px] font-black tracking-widest"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Вернуться в архив
        </Link>

        {/* Заголовок */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="relative">
            <div className="absolute -top-6 left-0 text-primary font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">
              Weaponry_Systems
            </div>
            <h1 className="text-6xl font-serif font-black uppercase italic text-white leading-none">
              Arsenal <span className="text-primary">/</span> Stats
            </h1>
          </div>
          <div className="bg-primary/5 border border-primary/20 p-4 flex items-center gap-4">
            <Gauge className="text-primary w-6 h-6" />
            <div>
              <p className="text-[10px] text-white/40 uppercase font-black">
                Current_Mod
              </p>
              <p className="text-sm text-white font-bold uppercase tracking-wider">
                Expertise_v4.2
              </p>
            </div>
          </div>
        </div>

        {/* Сетка характеристик Expertise */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {weaponExpertise.map((stat) => (
            <div
              key={stat.code}
              className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 text-primary group-hover:border-primary/50 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono text-primary/40 font-bold tracking-widest">
                  {stat.code}
                </span>
              </div>
              <h3 className="text-xl font-black uppercase italic text-white mb-3 tracking-widest">
                {stat.name}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                {stat.desc}
              </p>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] text-white/20 uppercase font-black">
                  Bonus_per_point:
                </span>
                <span className="text-primary font-mono font-bold">
                  {stat.bonus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Таблица мастерства типов оружия */}
        <div className="border border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center gap-3">
            <Hammer className="text-primary w-5 h-5" />
            <h2 className="text-lg font-black uppercase italic tracking-widest text-white">
              Weapon_Mastery_Table
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                  <th className="p-6 italic">Тип оружия</th>
                  <th className="p-6">Прогрессия</th>
                  <th className="p-6 italic">Ключевой бонус</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {masteries.map((m) => (
                  <tr
                    key={m.type}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-6 text-white font-black uppercase italic tracking-wider">
                      {m.type}
                    </td>
                    <td className="p-6 text-white/40 font-mono">{m.level}</td>
                    <td className="p-6 text-white/60 font-light italic">
                      {m.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Команды управления (Reminder) */}
        <div className="mt-12 p-8 border-2 border-dashed border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs uppercase font-bold tracking-widest text-center md:text-left">
            Используйте команду{" "}
            <span className="text-primary">.wep cst [Weapon] [Stat]</span> для
            настройки характеристик.
          </p>
          <Link
            href="/commands"
            className="text-primary font-black uppercase text-[10px] tracking-widest hover:underline decoration-2 underline-offset-8"
          >
            Все команды оружия →
          </Link>
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
