"use client";

import { Box, ChevronRight, Rocket, ShieldAlert, Zap } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";

// Безопасная проверка клиента для Next.js (устраняет ошибку cascading renders)
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
      "Найдите NPC Профессий для получения первой специализации.",
    ],
  },
  {
    slug: "logistics-master",
    title: "Мастер Логистики",
    icon: <Box className="w-6 h-6" />,
    description:
      "Как настроить автоматизацию замка, чтобы ресурсы сами летели в сундуки.",
    steps: [
      "Используйте .stash, находясь в замке, для мгновенной выгрузки ресурсов.",
      "Настройте авто-кормление жаровен командой .l us.",
      "Используйте .fi [название], если потеряли предмет в горе сундуков.",
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
      "Ваш уровень сбросится, но вы получите постоянные бонусы к характеристикам.",
      "На 5 и 10 уровне престижа открываются ультимативные способности класса.",
    ],
  },
  {
    slug: "newbie-safety",
    title: "Безопасность новичка",
    icon: <ShieldAlert className="w-6 h-6" />,
    description: "Как выжить в Brutal+ мире, пока у вас нет своего замка.",
    steps: [
      "Арендуйте комнату в Гостинице (.inn join) — это ваша зона безопасности.",
      "Складывайте ценные вещи в сундуки гостиницы, они защищены от воровства.",
      "Прокачивайте мастерство оружия (.wm s) на слабых мобах, чтобы увеличить урон.",
    ],
  },
];

export default function GuidesPage() {
  const isClient = useIsClient();

  // Предотвращение мерцания гидратации
  if (!isClient) return <div className="min-h-screen bg-background" />;

  return (
    <div className="relative min-h-screen bg-background pt-32 pb-20 transition-colors duration-500 font-sans selection:bg-primary/30">
      {/* ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ ФОНА */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/5 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* ЗАГОЛОВОК (Strict Style) */}
        <div className="max-w-3xl mb-20 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-8 duration-1000">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">
            Archive of Wisdom
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-foreground mb-6 uppercase tracking-tighter italic">
            РУКОВОДСТВА <span className="not-italic text-primary">СИСТЕМЫ</span>
          </h1>
          <p className="text-muted-foreground font-light text-xl leading-relaxed italic max-w-2xl">
            Центральный узел знаний Blood and Wine. От настройки автоматических
            складов до освоения темных искусств престижа.
          </p>
        </div>

        {/* СЕТКА ГАЙДОВ (Sharp Border Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border shadow-[30px_30px_0px_rgba(0,0,0,0.2)]">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-background p-10 md:p-16 hover:bg-primary/[0.02] transition-all group relative overflow-hidden"
            >
              {/* Декоративный уголок при наведении */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-primary/10 border-l-transparent transition-all group-hover:border-t-primary/30" />

              <div className="flex items-start justify-between mb-10">
                <div className="p-4 bg-primary/5 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                  {guide.icon}
                </div>
                <div className="text-[10px] font-black tracking-[0.3em] text-muted-foreground/20 group-hover:text-primary transition-colors uppercase">
                  Log_{guide.slug.replace("-", "_")}
                </div>
              </div>

              <h2 className="font-serif text-3xl text-foreground mb-6 uppercase italic tracking-tight group-hover:text-primary transition-colors">
                {guide.title}
              </h2>
              <p className="text-muted-foreground text-sm font-light mb-10 leading-relaxed italic border-l border-white/5 pl-6">
                {guide.description}
              </p>

              <div className="space-y-6 mb-12">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5 group/step">
                    <span className="text-[9px] font-black text-primary bg-primary/10 w-6 h-6 flex items-center justify-center border border-primary/20">
                      {i + 1}
                    </span>
                    <p className="text-xs text-foreground/70 font-medium leading-relaxed uppercase tracking-wider group-hover/step:text-foreground transition-colors">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={`/guides/${guide.slug}`}
                className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-black text-primary hover:text-foreground transition-all group/link"
              >
                РАСКРЫТЬ ДАННЫЕ
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* СЕКЦИЯ ПОМОЩИ (Brutalist Banner) */}
        <div className="mt-24 p-1 bg-gradient-to-r from-primary/50 via-border to-primary/50">
          <div className="bg-background p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <h3 className="font-serif text-3xl text-foreground mb-6 uppercase italic tracking-widest">
              ТРЕБУЕТСЯ <span className="text-primary">ПОДДЕРЖКА</span>?
            </h3>
            <p className="text-muted-foreground text-sm font-light mb-10 max-w-xl mx-auto uppercase tracking-widest leading-loose">
              Если архивы не дали ответа, обратитесь к совету старейшин в нашем
              терминале Discord.
            </p>
            <button className="px-12 py-5 bg-primary text-white text-[11px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-black transition-all shadow-[10px_10px_0px_rgba(220,38,38,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none">
              ВСТУПИТЬ В СООБЩЕСТВО
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");

        .font-serif {
          font-family: "Cinzel", serif;
        }

        /* Полный отказ от скруглений */
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
