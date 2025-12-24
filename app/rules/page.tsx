"use client";

import {
  AlertTriangle,
  ChevronRight,
  ShieldAlert,
  Terminal,
  Zap,
} from "lucide-react";

const ruleSections = [
  {
    category: "GENERAL_BEHAVIOR",
    title: "Общий регламент",
    icon: <Terminal className="w-5 h-5" />,
    rules: [
      {
        t: "Запрещен багоюз и использование стороннего ПО",
        d: "Любая попытка получить преимущество через уязвимости карается перманентным баном.",
      },
      {
        t: "Токсичность и оскорбления",
        d: "Мы поддерживаем дух соперничества, но не переход на личности. Уважайте врагов.",
      },
      {
        t: "Реклама и спам",
        d: "Запрещена любая коммерческая деятельность и ссылки на сторонние проекты.",
      },
    ],
  },
  {
    category: "WARFARE_PROTOCOLS",
    title: "Протоколы войны и рейдов",
    icon: <Zap className="w-5 h-5" />,
    rules: [
      {
        t: "Оффлайн-рейды",
        d: "Запрещено атаковать замки, если владельцы были оффлайн более 24 часов (кроме случаев истощения сердца).",
      },
      {
        t: "Блокировка контента",
        d: "Запрещено застраивать проходы к V-Blood боссам или ключевым ресурсам карты.",
      },
      {
        t: "Лимиты альянсов",
        d: "Максимальный размер группы — 4 игрока. Формальные альянсы между кланами запрещены.",
      },
    ],
  },
  {
    category: "ADMINISTRATION",
    title: "Взаимодействие с Советом",
    icon: <ShieldAlert className="w-5 h-5" />,
    rules: [
      {
        t: "Решения администрации",
        d: "Администрация оставляет за собой право принимать решения в спорных ситуациях на благо сервера.",
      },
      {
        t: "Тикет-система",
        d: "Все жалобы подаются через Discord с предоставлением видео-доказательств.",
      },
    ],
  },
];

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4 font-sans selection:bg-primary selection:text-white">
      <div className="container mx-auto">
        {/* HEADER SECTION */}
        <div className="relative mb-20 border-l-4 border-primary pl-8 py-4">
          <div className="absolute -left-[4px] top-0 h-12 w-1 bg-primary shadow-[0_0_20px_rgba(220,38,38,0.5)]" />
          <span className="text-primary font-black tracking-[0.5em] text-[10px] uppercase mb-2 block">
            Security_Protocol_v2.5
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-black uppercase italic tracking-tighter leading-none text-white">
            Server <span className="text-primary not-italic">/</span> Codex
          </h1>
          <p className="mt-6 text-white/40 max-w-xl text-sm leading-relaxed tracking-wide uppercase">
            Нарушение данных протоколов приведет к немедленной деавторизации и
            изгнанию из Совета Тьмы.
          </p>
        </div>

        {/* RULES GRID */}
        <div className="space-y-1">
          {ruleSections.map((section, sIdx) => (
            <div
              key={sIdx}
              className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all"
            >
              {/* SECTION HEADER */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 text-primary border border-primary/20">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-primary/50 block tracking-widest">
                      {section.category}
                    </span>
                    <h2 className="text-xl font-black uppercase italic text-white/90 tracking-wider">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="hidden md:block text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
                  Status: ACTIVE
                </div>
              </div>

              {/* RULES LIST */}
              <div className="divide-y divide-white/5">
                {section.rules.map((rule, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-8 hover:bg-primary/[0.02] transition-colors flex flex-col md:flex-row gap-6 md:items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 text-white/20 font-serif text-xl italic group-hover:border-primary/50 group-hover:text-primary transition-all">
                      {sIdx + 1}.{rIdx + 1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-black uppercase tracking-widest text-lg flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {rule.t}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed max-w-3xl font-light">
                        {rule.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER NOTICE */}
        <div className="mt-16 p-10 border-2 border-dashed border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-4" />
          <p className="text-white/60 text-[11px] font-black uppercase tracking-[0.4em]">
            Незнание данных правил не освобождает от ответственности
          </p>
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
