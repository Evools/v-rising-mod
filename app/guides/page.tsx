"use client";

import { Box, ChevronRight, Rocket, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

const guides = [
  {
    slug: "quick-start",
    title: "Быстрый старт",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Первые шаги: как выбрать класс, получить стартовый набор и начать прокачку.",
    steps: [
      "Введите в чате .misc starterkit для получения базовых вещей.",
      "Выберите свой путь командой .class s [1-6].",
      "Найдите NPC Профессий для специализации.",
    ],
  },
  {
    slug: "logistics-master",
    title: "Мастер Логистики",
    icon: <Box className="w-6 h-6" />,
    description:
      "Как настроить автоматизацию замка, чтобы ресурсы сами летели в сундуки.",
    steps: [
      "Используйте .stash для мгновенной выгрузки ресурсов.",
      "Настройте авто-кормление жаровен командой .l us.",
      "Используйте .fi [название] для поиска предметов.",
    ],
  },
  {
    slug: "prestige-system",
    title: "Система Престижа",
    icon: <Zap className="w-6 h-6" />,
    description:
      "Подробный разбор того, что вы теряете и что приобретаете при перерождении.",
    steps: [
      "По достижении 100 уровня используйте .prestige.",
      "Ваш уровень сбросится, но вы получите бонусы.",
      "На 5 и 10 уровне открываются ультимейты.",
    ],
  },
  {
    slug: "newbie-safety",
    title: "Безопасность новичка",
    icon: <ShieldAlert className="w-6 h-6" />,
    description: "Как выжить в Brutal+ мире, пока у вас нет своего замка.",
    steps: [
      "Арендуйте комнату в Гостинице (.inn join).",
      "Складывайте ценные вещи в защищенные сундуки.",
      "Прокачивайте мастерство оружия (.wm s).",
    ],
  },
];

export default function GuidesPage() {
  const isClient = useIsClient();

  if (!isClient) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-primary/30 font-sans">
      {/* STATIC HEADER BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden">
        <Image
          src="/bg-1.jpg" // Статичное изображение
          alt="Guides Background"
          fill
          className="object-cover object-center grayscale opacity-40"
          priority
        />

        {/* HUD OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />

        {/* FADE TO BLACK */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-32">
        {/* HEADER */}
        <div className="max-w-5xl mb-32 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Archive of Wisdom // Protocols
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            РУКОВОДСТВА <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              СИСТЕМЫ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              Центральный узел знаний Blood and Wine. <br />
              Инструкции по выживанию в мире Brutal+.
            </p>
          </div>
        </div>

        {/* GUIDES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {guides.map((guide, index) => (
            <div
              key={guide.title}
              className="group relative bg-[#080808]/60 p-8 md:p-14 transition-all duration-300 hover:bg-white/[0.05] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-30 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-30 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-6 mb-12 relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/20 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  {guide.icon}
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">
                    System_Access_ID: 00{index + 1}
                  </span>
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest group-hover:text-white transition-colors">
                    Log_{guide.slug.replace("-", "_")}
                  </span>
                </div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase italic tracking-tighter transition-colors group-hover:text-primary">
                {guide.title}
              </h2>

              <p className="text-white/40 text-sm font-light mb-10 leading-relaxed italic border-l border-primary/40 pl-6 group-hover:text-white/60 transition-colors">
                {guide.description}
              </p>

              <div className="space-y-4 mb-14 relative z-10">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1 h-1 bg-primary transition-all group-hover:scale-150" />
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-wider group-hover:text-white/90 transition-colors">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={`/guides/${guide.slug}`}
                className="flex items-center justify-between py-5 border-t border-white/5 text-[11px] font-black uppercase tracking-[0.4em] text-primary hover:text-white transition-all group/link"
              >
                <span>Установить соединение</span>
                <div className="flex items-center bg-primary/10 px-2 py-1 group-hover/link:bg-primary transition-colors">
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover/link:translate-x-1 transition-transform group-hover/link:text-white" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* BANNER */}
        <div className="mt-40 border border-white/10 relative overflow-hidden group">
          <div className="bg-black/40 p-12 md:p-24 text-center relative z-10 backdrop-blur-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-primary" />
            <h3 className="font-serif text-4xl md:text-6xl text-white mb-8 uppercase italic tracking-tighter">
              ТРЕБУЕТСЯ <span className="text-primary">ПОДДЕРЖКА</span>?
            </h3>
            <button className="h-20 px-16 bg-primary text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-300 border border-primary active:translate-y-1 shadow-[10px_10px_0px_rgba(220,38,38,0.2)]">
              ВСТУПИТЬ В СООБЩЕСТВО
            </button>
          </div>
        </div>
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
