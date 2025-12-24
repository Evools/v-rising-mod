"use client";

import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Flame,
  ScrollText,
  Shield,
  Skull,
  Sword,
  Target,
  Zap,
  Activity,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const classesData = [
  {
    id: "bloodknight",
    name: "Blood Knight",
    role: "Frontline Tank",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Танк и мастер выживания. Использует силу крови для укрепления своей защиты и сокрушения врагов в ближнем бою.",
    starter: "Бонус к физической силе и объему здоровья.",
    unlocks: [
      {
        lvl: 1,
        skill: "Поглощение Крови",
        effect: "Похищение жизни при каждом ударе.",
      },
      {
        lvl: 5,
        skill: "Багровая Эгида",
        effect: "Щит, поглощающий урон и лечащий союзников.",
      },
      {
        lvl: 10,
        skill: "Удар Сердца",
        effect: "Мощный взрыв, наносящий урон от макс. здоровья.",
      },
    ],
  },
  {
    id: "shadowblade",
    name: "Shadow Blade",
    role: "Stealth Assassin",
    icon: <Sword className="w-6 h-6" />,
    description:
      "Быстрый убийца. Специализируется на критических ударах, скрытности и использовании смертельных ядов.",
    starter: "Бонус к скорости атаки и шансу критического удара.",
    unlocks: [
      { lvl: 1, skill: "Шаг Тени", effect: "Кратковременная невидимость." },
      {
        lvl: 5,
        skill: "Токсичный Выброс",
        effect: "Массовое отравление ближайших целей.",
      },
      {
        lvl: 10,
        skill: "Ликвидация",
        effect: "Огромный урон по целям с низким здоровьем.",
      },
    ],
  },
  {
    id: "chaosweaver",
    name: "Chaos Weaver",
    role: "AoE Spellcaster",
    icon: <Zap className="w-6 h-6" />,
    description:
      "Разрушительный маг. Повелевает стихиями хаоса, нанося сокрушительный урон по площади.",
    starter: "Увеличение силы заклинаний и регенерации маны.",
    unlocks: [
      {
        lvl: 1,
        skill: "Стрела Хаоса",
        effect: "Снаряд хаоса с непредсказуемым эффектом.",
      },
      {
        lvl: 5,
        skill: "Разлом Реальности",
        effect: "Зона, замедляющая и сжигающая врагов.",
      },
      {
        lvl: 10,
        skill: "Катаклизм",
        effect: "Метеоритный дождь, оглушающий выживших.",
      },
    ],
  },
  {
    id: "necromancer",
    name: "Necromancer",
    role: "Undead Commander",
    icon: <Skull className="w-6 h-6" />,
    description:
      "Повелитель смерти. Призывает легионы нежити и использует темную энергию для ослабления противников.",
    starter: "Бонус к силе заклинаний и интеллекту.",
    unlocks: [
      {
        lvl: 1,
        skill: "Поднятие Мертвых",
        effect: "Призыв верного скелета-воина.",
      },
      { lvl: 5, skill: "Жатва Душ", effect: "Взрыв жизненной энергии цели." },
      {
        lvl: 10,
        skill: "Армия Тьмы",
        effect: "Призыв группы элитных воинов нежити.",
      },
    ],
  },
];

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState(classesData[0]);

  return (
    <div className="relative min-h-screen bg-[#050507] text-foreground font-sans selection:bg-primary/30">
      {/* ФОН (Глобальный) */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg-1.jpg"
          alt="Фон"
          fill
          className="object-cover object-center opacity-[0.05] grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(220,38,38,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_4px,3px_100%]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-20">
        {/* --- ВАША ШАПКА (БЕЗ ИЗМЕНЕНИЙ) --- */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Кодекс Вардорана // Классы
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            ПУТЬ{" "}
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              СИЛЫ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              Ваш класс — это фундамент могущества. <br />
              Каждая ветка открывает доступ к уникальным <br />
              <span className="text-white font-bold not-italic underline decoration-primary decoration-2 underline-offset-8">
                Протоколам Боя
              </span>
              .
            </p>
          </div>
        </div>
        {/* --- КОНЕЦ ШАПКИ --- */}

        {/* ОСНОВНОЙ КОНТЕНТ С СЕТКОЙ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] items-start">
          {/* ЛЕВАЯ ПАНЕЛЬ: ВЫБОР (STICKY) */}
          <div className="lg:col-span-4 sticky top-6 z-20 bg-[#08080a] border-r border-white/5 h-fit self-start overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <span className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase flex items-center gap-2">
                <Activity className="w-3 h-3 text-primary animate-pulse" />
                Select_Unit.sys
              </span>
              <Cpu className="w-3 h-3 text-white/10" />
            </div>

            <nav className="flex flex-col">
              {classesData.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(cls)}
                  className={cn(
                    "w-full flex items-center justify-between p-8 transition-all duration-300 relative group border-b border-white/5 last:border-0",
                    selectedClass.id === cls.id
                      ? "bg-primary/10"
                      : "bg-transparent hover:bg-white/[0.03]"
                  )}
                >
                  <div
                    className={cn(
                      "absolute left-0 top-0 h-full w-1 transition-all",
                      selectedClass.id === cls.id
                        ? "bg-primary shadow-[0_0_15px_rgba(220,38,38,0.8)]"
                        : "bg-transparent group-hover:bg-primary/30"
                    )}
                  />

                  <div className="flex items-center gap-6">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center border transition-all duration-500",
                        selectedClass.id === cls.id
                          ? "border-primary bg-primary/20 text-primary rotate-45"
                          : "border-white/5 text-white/20 rotate-0"
                      )}
                    >
                      <div
                        className={cn(
                          selectedClass.id === cls.id
                            ? "-rotate-45"
                            : "rotate-0 transition-transform"
                        )}
                      >
                        {cls.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <span
                        className={cn(
                          "font-serif text-2xl tracking-tight uppercase italic block transition-colors",
                          selectedClass.id === cls.id
                            ? "text-white"
                            : "text-white/40"
                        )}
                      >
                        {cls.name}
                      </span>
                      <span className="text-[8px] font-black tracking-[0.4em] uppercase opacity-40 text-primary">
                        {cls.role}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-5 h-5 transition-all duration-500",
                      selectedClass.id === cls.id
                        ? "opacity-100 translate-x-0 text-primary"
                        : "opacity-0 -translate-x-4 text-white/20"
                    )}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* ПРАВАЯ ПАНЕЛЬ: ДЕТАЛИ (SCROLLABLE) */}
          <div className="lg:col-span-8 p-10 md:p-20 relative bg-[#0a0a0c]/80 backdrop-blur-sm min-h-screen">
            {/* Фоновая литера */}
            <div className="absolute top-10 right-10 text-[20vw] font-serif font-black text-white/[0.02] pointer-events-none select-none italic leading-none">
              {selectedClass.name.charAt(0)}
            </div>

            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-12">
                <div>
                  <h2 className="font-serif text-6xl md:text-7xl text-white mb-6 italic uppercase tracking-tighter leading-none">
                    {selectedClass.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 border border-primary/20">
                      <ScrollText className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                      Статус: <span className="text-primary">Активен</span> //{" "}
                      {selectedClass.role}
                    </span>
                  </div>
                </div>

                <div className="bg-primary p-6 px-10 min-w-[280px] shadow-[20px_20px_0px_rgba(0,0,0,0.5)] border border-white/10">
                  <span className="block text-[8px] uppercase tracking-[0.5em] text-white/60 mb-3 font-black">
                    Протокол инициализации
                  </span>
                  <code className="text-white font-black text-xl tracking-tighter uppercase font-mono">
                    {selectedClass.id}_init.cmd
                  </code>
                </div>
              </div>

              <p className="text-white/70 font-light text-2xl mb-24 leading-relaxed italic border-l-2 border-primary pl-10">
                {selectedClass.description}
              </p>

              {/* ХАРАКТЕРИСТИКИ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-32">
                <div className="bg-[#050507] p-10 group hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/40">
                      Начальный бонус
                    </h4>
                  </div>
                  <p className="text-white text-lg italic tracking-wide font-light">
                    {selectedClass.starter}
                  </p>
                </div>
                <div className="bg-[#050507] p-10 group hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <Flame className="w-5 h-5 text-primary" />
                    <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/40">
                      Тип энергии
                    </h4>
                  </div>
                  <p className="text-white text-lg italic tracking-wide font-light">
                    Масштабирование по Крови v2.0
                  </p>
                </div>
              </div>

              {/* ПРОГРЕССИЯ */}
              <div className="space-y-16">
                <div className="flex items-center gap-8">
                  <h4 className="font-serif text-3xl text-white italic uppercase tracking-widest">
                    Древо <span className="text-primary">Навыков</span>
                  </h4>
                  <div className="h-px flex-1 bg-white/5" />
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    Core_OS
                  </span>
                </div>

                <div className="space-y-6">
                  {selectedClass.unlocks.map((u) => (
                    <div
                      key={u.lvl}
                      className="flex items-center gap-10 p-10 bg-white/[0.02] border border-white/5 group hover:bg-primary/[0.07] hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-2 text-[40px] font-black text-white/[0.03] italic leading-none pointer-events-none">
                        0{u.lvl}
                      </div>

                      <div className="flex flex-col items-center min-w-[80px]">
                        <span className="font-serif text-6xl text-white/10 group-hover:text-primary transition-all duration-500 italic scale-90 group-hover:scale-100">
                          {u.lvl}
                        </span>
                        <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.3em] mt-[-10px]">
                          УРОВЕНЬ
                        </span>
                      </div>
                      <div className="w-px h-20 bg-white/5 group-hover:bg-primary/20 transition-colors" />
                      <div className="flex-1">
                        <h5 className="font-black text-white text-lg uppercase tracking-[0.3em] mb-3 group-hover:text-primary transition-colors">
                          {u.skill}
                        </h5>
                        <p className="text-white/50 text-base font-light italic leading-relaxed max-w-2xl">
                          {u.effect}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
        /* Тонкий скроллбар в стиле терминала */
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-track {
          background: #050507;
        }
        ::-webkit-scrollbar-thumb {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}
