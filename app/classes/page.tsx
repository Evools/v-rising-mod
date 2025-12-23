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
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const classesData = [
  {
    id: "bloodknight",
    name: "Blood Knight",
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
    <div className="relative min-h-screen bg-[#0a0a0c] text-foreground overflow-hidden font-sans">
      {/* ФОН */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-1.jpg"
          alt="Фон"
          fill
          className="object-cover object-center opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_4px,3px_100%]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-20">
        {/* ЗАГОЛОВОК */}
        <div className="flex flex-col items-start mb-24 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <span className="text-primary font-black tracking-[0.6em] uppercase text-[10px] block mb-4">
            Кодекс Вардорана // Классы
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-8 italic uppercase tracking-tighter">
            ПУТЬ <span className="text-primary not-italic">СИЛЫ</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground font-light text-xl italic leading-relaxed">
            Ваш класс — это фундамент могущества. Каждая ветка открывает доступ
            к уникальным{" "}
            <span className="text-white font-bold">Протоколам Боя</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 bg-white/[0.01] shadow-[40px_40px_0px_rgba(0,0,0,0.3)]">
          {/* ЛЕВАЯ ПАНЕЛЬ: ВЫБОР */}
          <div className="lg:col-span-4 border-r border-white/5 bg-black/20">
            {classesData.map((cls) => (
              <button
                key={cls.id}
                onClick={() => setSelectedClass(cls)}
                className={cn(
                  "w-full flex items-center justify-between p-8 transition-all duration-300 relative group",
                  selectedClass.id === cls.id
                    ? "bg-primary/10"
                    : "bg-transparent hover:bg-white/[0.02]"
                )}
              >
                {/* Индикатор активности */}
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full w-1 transition-all",
                    selectedClass.id === cls.id
                      ? "bg-primary"
                      : "bg-transparent group-hover:bg-primary/30"
                  )}
                />

                <div className="flex items-center gap-6">
                  <div
                    className={cn(
                      "transition-all duration-500",
                      selectedClass.id === cls.id
                        ? "text-primary scale-110"
                        : "text-white/20"
                    )}
                  >
                    {cls.icon}
                  </div>
                  <div className="text-left">
                    <span
                      className={cn(
                        "font-serif text-2xl tracking-tight uppercase italic block",
                        selectedClass.id === cls.id
                          ? "text-white"
                          : "text-white/40"
                      )}
                    >
                      {cls.name}
                    </span>
                    <span className="text-[8px] font-black tracking-[0.3em] uppercase opacity-40">
                      Узел_Данных: {cls.id.slice(0, 3)}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-all duration-500",
                    selectedClass.id === cls.id
                      ? "opacity-100 translate-x-0 text-primary"
                      : "opacity-0 -translate-x-4"
                  )}
                />
              </button>
            ))}
          </div>

          {/* ПРАВАЯ ПАНЕЛЬ: ДЕТАЛИ */}
          <div className="lg:col-span-8 p-10 md:p-20 relative bg-black/40">
            {/* Декор на фоне */}
            <div className="absolute top-10 right-10 text-[200px] font-serif font-black text-white/[0.02] pointer-events-none select-none italic">
              {selectedClass.id.charAt(0)}
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 border-b border-white/5 pb-12">
                <div>
                  <h2 className="font-serif text-6xl text-white mb-6 italic uppercase tracking-tighter">
                    {selectedClass.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 border border-primary/20">
                      <ScrollText className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                      Классовая роль: Штурмовой юнит
                    </span>
                  </div>
                </div>

                <div className="bg-primary p-6 px-10 min-w-[280px] shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
                  <span className="block text-[8px] uppercase tracking-[0.5em] text-white/60 mb-3 font-black">
                    Протокол активации
                  </span>
                  <code className="text-white font-black text-xl tracking-tighter uppercase">
                    .class select {selectedClass.id}
                  </code>
                </div>
              </div>

              <p className="text-white/70 font-light text-2xl mb-20 leading-relaxed italic border-l-2 border-primary pl-10">
                {selectedClass.description}
              </p>

              {/* ХАРАКТЕРИСТИКИ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-24">
                <div className="bg-[#0a0a0c] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="w-4 h-4 text-primary" />
                    <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/40">
                      Начальный бонус
                    </h4>
                  </div>
                  <p className="text-white italic tracking-wide">
                    {selectedClass.starter}
                  </p>
                </div>
                <div className="bg-[#0a0a0c] p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Flame className="w-4 h-4 text-primary" />
                    <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/40">
                      Тип энергии
                    </h4>
                  </div>
                  <p className="text-white italic tracking-wide">
                    Масштабирование характеристик Крови
                  </p>
                </div>
              </div>

              {/* ПРОГРЕССИЯ */}
              {/* ПРОГРЕССИЯ */}
              <div className="space-y-12">
                <div className="flex items-center gap-8">
                  <h4 className="font-serif text-3xl text-white italic uppercase tracking-widest">
                    Древо <span className="text-primary">Навыков</span>
                  </h4>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="space-y-4">
                  {selectedClass.unlocks.map((u) => (
                    <div
                      key={u.lvl}
                      className="flex items-center gap-10 p-8 bg-white/[0.02] border border-white/5 group hover:bg-primary/[0.05] hover:border-primary/20 transition-all"
                    >
                      <div className="flex flex-col items-center min-w-[60px]">
                        <span className="font-serif text-5xl text-white/10 group-hover:text-primary transition-colors italic">
                          {u.lvl}
                        </span>
                        <span className="text-[8px] font-black text-primary uppercase tracking-widest">
                          УРОВЕНЬ
                        </span>
                      </div>
                      <div className="w-px h-16 bg-white/5" />
                      <div>
                        {/* ИСПРАВЛЕННЫЙ ТЕГ НИЖЕ */}
                        <h5 className="font-black text-white text-xs uppercase tracking-[0.3em] mb-3 group-hover:text-primary transition-colors">
                          {u.skill}
                        </h5>
                        <p className="text-white/50 text-base font-light italic leading-relaxed">
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
      `}</style>
    </div>
  );
}
