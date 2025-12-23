"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  tag?: string;
}

export default function FeatureBlock({
  title,
  description,
  image,
  reverse,
  tag,
}: FeatureProps) {
  return (
    <div className="w-full py-32 lg:py-48 bg-background overflow-hidden relative transition-colors duration-500 font-sans">
      {/* Фоновый текст (Watermark Style) */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 text-[18vw] font-serif font-black text-foreground/[0.01] select-none pointer-events-none transition-all uppercase italic tracking-tighter",
          reverse ? "-left-20" : "-right-20"
        )}
      >
        {tag}
      </div>

      <div
        className={cn(
          "container mx-auto px-4 flex flex-col gap-20 lg:gap-32 items-center relative z-10",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}
      >
        {/* Текстовый блок */}
        <div className="flex-1 space-y-10">
          {tag && (
            <div className="flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px]">
                {tag}
              </span>
            </div>
          )}

          <h2 className="font-serif text-5xl lg:text-7xl text-foreground leading-none tracking-tighter italic uppercase">
            {title.split(" ")[0]}{" "}
            <span className="text-primary not-italic font-black">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="space-y-8 border-l border-white/5 pl-10 py-2">
            <p className="text-muted-foreground leading-relaxed text-xl font-light max-w-xl italic">
              {description}
            </p>

            <div className="pt-6">
              <div className="h-[1px] w-24 bg-primary/60" />
            </div>
          </div>
        </div>

        {/* Блок изображения (Sharp HUD Frame) */}
        <div className="flex-1 w-full relative group">
          {/* Внешняя техническая рамка */}
          <div className="absolute -inset-8 border border-white/[0.03] z-0 transition-all duration-700 group-hover:border-primary/20" />

          {/* L-образные уголки (Абсолютно острые) */}
          <div className="absolute -top-8 -left-8 w-12 h-12 border-t-2 border-l-2 border-primary/40 z-20 group-hover:border-primary group-hover:-top-6 group-hover:-left-6 transition-all duration-500" />
          <div className="absolute -bottom-8 -right-8 w-12 h-12 border-b-2 border-r-2 border-primary/40 z-20 group-hover:border-primary group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500" />

          {/* Контейнер изображения */}
          <div className="relative z-10 aspect-[16/10] bg-muted overflow-hidden shadow-[30px_30px_60px_rgba(0,0,0,0.5)] border border-white/5">
            <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
            />

            {/* Виньетка для глубины */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />

            {/* Световой сканер при наведении */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-y-full group-hover:animate-[shimmer_2.5s_infinite] transition-all" />
          </div>

          {/* Индикатор статуса (Декор) */}
          <div className="absolute -bottom-4 left-10 z-30 bg-primary px-4 py-1 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-white animate-pulse" />
            <span className="text-[8px] font-black uppercase text-white tracking-[0.3em]">
              System_Active
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        /* Глобальный принудительный сброс скруглений */
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  );
}
