"use client";

import {
  AlertTriangle,
  ChevronRight,
  Gavel,
  ShieldAlert,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

const ruleSections = [
  {
    category: "01_COMMUNICATION",
    title: "Общение и поведение",
    icon: <Terminal className="w-5 h-5" />,
    rules: [
      {
        t: "1.1. Уважение и адекватность",
        d: "Запрещены любые формы токсичности, оскорбления, переходы на личности, буллинг, разжигание ненависти (расизм, сексизм, политика и т.д.). Уважайте других участников.",
      },
      {
        t: "1.2. Языковая политика (RU/EU)",
        d: "Основной язык: Русский. Для англоговорящих игроков создан отдельный раздел. Общение в общих чатах ведется на английском для взаимопонимания, либо в соответствующих ветках.",
      },
      {
        t: "1.3. Контент 18+ и NSFW",
        d: "Наше сообщество ориентировано на взрослую аудиторию. Запрещена публикация порнографии, шок-контента и материалов NSFW. Если вы родитель — вы несете ответственность за то, что видит ваш ребенок.",
      },
      {
        t: "1.4. Реклама и Личные данные",
        d: "Запрещена несогласованная реклама, спам и доксинг (публикация чужих личных данных).",
      },
    ],
  },
  {
    category: "02_PROPERTY",
    title: "Владение замком и строительство",
    icon: <ShieldAlert className="w-5 h-5" />,
    rules: [
      {
        t: "2.1. Требования к активности (Правило 7 дней)",
        d: "Для сохранения замка необходимо наиграть минимум 4 часа за последние 7 дней. Заход только для 'заправки сердца' активностью не считается. Неактивные замки удаляются.",
      },
      {
        t: "2.2. Лимиты на владение",
        d: "Соло-игрок: Максимум 1 замок. Клан: Максимум 6 замков на весь клан. Стандартный лимит — 4 игрока (расширение до 12 через Тикет-систему).",
      },
      {
        t: "2.3. Правила застройки (Сады и Огороды)",
        d: "Запрещено отводить более одного полного этажа под «огород». Над этажом с грядками обязательно должен находиться еще один этаж, закрытый крышей. 'Твинко-замки' без жилой зоны запрещены.",
      },
    ],
  },
  {
    category: "03_GAMEPLAY",
    title: "Игровой процесс",
    icon: <Zap className="w-5 h-5" />,
    rules: [
      {
        t: "3.1. Честная игра",
        d: "Использование читов, макросов, стороннего ПО и злоупотребление багами (эксплойты) строго запрещено.",
      },
      {
        t: "3.2. Этикет ресурсов",
        d: "При добыче ресурсов разбивайте и обычные камни рядом для корректного респавна жилы. Уважайте просьбы игроков убить V-Blood босса соло.",
      },
      {
        t: "3.3. Осколочные Боссы (Shard Bosses)",
        d: "Атаковать можно только при разнице не более 15 уровней от босса. Запрещено приводить 'вагонов' и 'наблюдать' за боем рядом, создавая лаги.",
      },
    ],
  },
  {
    category: "04_RIFTS",
    title: "Разломы Мортиума (Rifts)",
    icon: <Gavel className="w-5 h-5" />,
    rules: [
      {
        t: "4.1. Обязательный голосовой чат (VOIP)",
        d: "При групповом фарме у вас ОБЯЗАН быть включен внутриигровой голос. Вы должны слышать команды лидера.",
      },
      {
        t: "4.2. Синхронизация и команда 'Go!'",
        d: "Для одновременного добивания босса используется команда «Go!». Атака до команды лидера считается нарушением этикета.",
      },
      {
        t: "4.3. Правило 66% и занятость локации",
        d: "Если разлом завершен более чем на 66% чужой группой — не вмешивайтесь. Если все споты заняты, будьте готовы договариваться и объединяться.",
      },
      {
        t: "4.4. Правило сбора",
        d: "Запрещён сбор первородных осколков с порталов 3 тира в форме волка и с использованием завесы.",
      },
    ],
  },
  {
    category: "05_PROGRESS",
    title: "Ресурсы и прогрессия",
    icon: <Terminal className="w-5 h-5" />,
    rules: [
      {
        t: "5.1. Распространение Ресурсов",
        d: "Запрещено распространять кровь бессмертного за пределы клана.",
      },
      {
        t: "5.2. Помощь в Прогрессии",
        d: "Запрещено делиться ресурсами с 4-го акта с игроками, которые еще не достигли их самостоятельно.",
      },
    ],
  },
  {
    category: "06_ADMIN",
    title: "Поддержка и Администрация",
    icon: <ShieldAlert className="w-5 h-5" />,
    rules: [
      {
        t: "6.1. Тикеты и Отпуск",
        d: "Все вопросы решаются через Тикеты. Если нужен перерыв — оформите заявку на Отпуск (заморозка на 20 дней).",
      },
      {
        t: "6.2. Решения администрации",
        d: "Решения администрации окончательны. Мы оставляем за собой право принимать решения для поддержания порядка, даже если ситуация не описана в правилах дословно.",
      },
    ],
  },
];

export default function RulesPage() {
  const isClient = useIsClient();
  if (!isClient) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-primary/30 font-sans text-white">
      {/* BACKGROUND IMAGE HEADER */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden">
        <Image
          src="/bg-1.jpg"
          alt="Codex Background"
          fill
          className="object-cover object-center grayscale opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-40 pb-32">
        {/* HEADER */}
        <div className="max-w-5xl mb-24 border-l-[3px] border-primary pl-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Security_Protocol // Codex_v3.4
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[90px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            КОДЕКС <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              СОВЕТА ТЬМЫ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
            <p className="max-w-2xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              Центральный регламент сообщества Bloodcraft+. <br />
              Несанкционированные действия ведут к немедленному изгнанию.
            </p>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="space-y-1 bg-white/5 border border-white/5">
          {ruleSections.map((section, sIdx) => (
            <div key={sIdx} className="bg-[#080808]/80 group">
              {/* SECTION HEADER */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 text-primary">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-primary uppercase tracking-[0.4em] mb-1 block">
                      Sector: {section.category}
                    </span>
                    <h2 className="text-2xl font-serif text-white uppercase italic tracking-tighter">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="hidden md:block text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">
                  Status: <span className="text-primary">Operational</span>
                </div>
              </div>

              {/* RULES LIST */}
              <div className="divide-y divide-white/5">
                {section.rules.map((rule, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-8 md:p-12 hover:bg-white/[0.02] transition-all flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 text-white/20 font-serif text-xl italic transition-all group-hover:border-primary/50 group-hover:text-primary">
                      {sIdx + 1}.{rIdx + 1}
                    </div>
                    <div className="space-y-3 relative z-10">
                      <h3 className="text-white font-black uppercase tracking-[0.2em] text-lg flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {rule.t}
                      </h3>
                      <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-4xl font-light italic">
                        {rule.d}
                      </p>
                    </div>
                    {/* Decorative element on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTICE */}
        <div className="mt-40 border border-primary/30 relative overflow-hidden bg-primary/5">
          <div className="p-12 md:p-24 text-center relative z-10 backdrop-blur-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-primary" />
            <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
            <h3 className="font-serif text-3xl md:text-6xl text-white mb-8 uppercase italic tracking-tighter">
              ВНИМАНИЕ <br />
              <span className="text-primary">
                ПРОТОКОЛ ОБЯЗАТЕЛЕН К ИСПОЛНЕНИЮ
              </span>
            </h3>
            <p className="text-white/40 text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] mb-12 max-w-2xl mx-auto leading-loose">
              Незнание данных правил не освобождает от ответственности. Приятной
              игры и удачного фарма в мире V-Rising.
            </p>
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
