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

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

const professions = [
  {
    name: "Шахтерство",
    icon: <Pickaxe className="w-6 h-6" />,
    bonus:
      "Повышает кол-во лута собираемого с камней, руды и так же повышает шанс выпадения самоцветов и глины с камней",
  },
  {
    name: "Дровосек",
    icon: <Axe className="w-6 h-6" />,
    bonus:
      "Повышает кол-во лута собираемого с Деревьев и так же повышает шанс на выпадение саженцев",
  },
  {
    name: "Травничество",
    icon: <Shovel className="w-6 h-6" />,
    bonus:
      "Повышает кол-во лута которое собирается с грядок и травы а так же повышает шанс выпадения семян",
  },
  {
    name: "Рыбалка",
    icon: <Fish className="w-6 h-6" />,
    bonus: "Дает (+1) рыбу при рыбалке за каждые [20] ур прокачки",
  },
  {
    name: "Алхимия",
    icon: <FlaskConical className="w-6 h-6" />,
    bonus:
      "Повышает время действия зелий до (2 часов) а так же усиливает эффект зелий Повышающих  Силу Магии и Физ.Силу",
  },
  {
    name: "Кузнечное дело",
    icon: <Hammer className="w-6 h-6" />,
    bonus:
      "повышает прочность Создаваемого оружия (лег.оружии это [7600] прочности) и физ.урон когда вы держите оружие в руках",
  },
  {
    name: "Ювелирное дело",
    icon: <Gem className="w-6 h-6" />,
    bonus:
      "Повышает прочность Создаваемых Амулетов (до [2895] прочности) и повышает силу магии одеваемых амулетов",
  },
  {
    name: "Портняжное Дело",
    icon: <Shirt className="w-6 h-6" />,
    bonus:
      "Повышает прочность Создаваемой Брони (До [3273] прочности) и повышает максимальное ХП",
  },
];

export default function WorldPage() {
  const isClient = useIsClient();

  // Рендерим пустой контейнер на сервере для совпадения разметки
  if (!isClient) return <div className="min-h-screen bg-[#0a0a0c]" />;

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden font-sans selection:bg-primary/30 selection:text-white">
      {/* ФОН (Строгий графичный стиль) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-1.jpg"
          alt="World"
          fill
          priority
          className="object-cover object-center opacity-[0.1] grayscale"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-40 pb-20">
        {/* ЗАГОЛОВОК (Sharp Design) */}
        <div className="max-w-4xl mb-24 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] block mb-4">
            Vardoran Infrastructure Hub
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-8 tracking-tighter uppercase italic">
            Мир и{" "}
            <span className="not-italic text-primary font-black">
              Экономика
            </span>
          </h1>
          <p className="text-muted-foreground font-light text-xl leading-relaxed max-w-2xl italic">
            Фундаментальные системы выживания Blood and Wine. От промышленной
            добычи ресурсов до глобального управления капиталом.
          </p>
        </div>

        {/* ПРОФЕССИИ (Brutalist Grid) */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="font-serif text-3xl text-foreground uppercase tracking-widest italic">
              Ремесла <span className="text-primary">Вардорана</span>
            </h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border shadow-[20px_20px_0px_rgba(0,0,0,0.3)]">
            {professions.map((p) => (
              <div
                key={p.name}
                className="group p-12 bg-background hover:bg-white/[0.02] transition-all duration-300 border-r last:border-r-0 border-border relative overflow-hidden"
              >
                {/* Акцентная полоса сверху */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="mb-8 text-primary group-hover:translate-x-2 transition-transform duration-500">
                  {p.icon}
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-6 uppercase tracking-tighter italic">
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-10 leading-relaxed italic border-l border-white/5 pl-6 group-hover:text-foreground">
                  {p.bonus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ЭКОНОМИКА И INNKEEPER (Контрастные блоки) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border shadow-2xl overflow-hidden">
          {/* Экономика */}
          <div className="bg-background p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <Store className="w-64 h-64" />
            </div>

            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 border border-primary/20 bg-primary/5">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-4xl text-foreground uppercase tracking-tighter italic">
                Экономика
              </h2>
            </div>

            <p className="text-muted-foreground font-light text-lg mb-12 leading-relaxed italic border-l-2 border-primary/20 pl-8">
              Централизованная система обмена.
              <span className="text-white font-bold not-italic">
                {" "}
                Admin Shop{" "}
              </span>
              конвертирует ваш физический труд в редкие артефакты и технологии.
            </p>

            <div className="space-y-px bg-white/5 border border-white/5 shadow-inner">
              {[
                {
                  name: "Copper Coins",
                  desc: "Базовые транзакции",
                  val: "Tier I",
                },
                { name: "Iron Coins", desc: "Средний рынок", val: "Tier II" },
                {
                  name: "Gold Coins",
                  desc: "Высшая ценность",
                  val: "Tier III",
                },
              ].map((coin) => (
                <div
                  key={coin.name}
                  className="flex items-center justify-between p-6 bg-[#0c0c0e] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-5">
                    <Coins className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
                      {coin.name}
                    </span>
                  </div>
                  <span className="text-[8px] text-muted-foreground font-black uppercase tracking-widest bg-white/5 px-3 py-1">
                    {coin.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Innkeeper (Тёмная карточка) */}
          <div className="bg-[#0c0c0e] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(153,27,27,0.05)_0%,_transparent_50%)]" />

            <div className="flex items-center gap-6 mb-12 relative z-10">
              <div className="p-4 bg-primary text-white">
                <Home className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-4xl text-foreground uppercase tracking-tighter italic">
                Innkeeper
              </h2>
            </div>

            <div className="relative z-10">
              <p className="text-slate-400 font-light text-lg mb-12 leading-relaxed italic">
                Убежище для странствующих лордов. Безопасная зона хранения
                эссенций до момента возведения великого замка.
              </p>

              <div className="space-y-6 mb-14">
                {[
                  "Аренда защищенных хранилищ",
                  "Иммунитет к рейдам в жилой зоне",
                  "Локальный узел возрождения душ",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 text-[11px] text-muted-foreground uppercase tracking-[0.2em] font-bold"
                  >
                    <div className="w-2 h-2 bg-primary transition-all group-hover:rotate-45" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col p-6 bg-background border border-white/5 shadow-2xl">
                <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3 font-black opacity-30">
                  Access Protocol
                </span>
                <code className="text-primary font-black uppercase tracking-widest text-lg">
                  .inn join
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* ПРЕДУПРЕЖДЕНИЕ (System Alert) */}
        <div className="mt-16 p-8 border border-red-500/20 bg-red-500/5 flex items-start gap-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500 animate-pulse" />
          <Info className="w-6 h-6 text-red-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 block mb-2">
              System Alert: Economic Fluctuations
            </span>
            <p className="text-[11px] text-muted-foreground uppercase leading-[2] tracking-widest font-bold">
              Внимание: Экономика Вардорана динамична. Смена профессии
              аннулирует текущий стаж и облагается процентным налогом.
              Рекомендуется планирование перед выполнением директивы.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");

        .font-serif {
          font-family: "Cinzel", serif;
        }

        /* Полный запрет на скругления */
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
