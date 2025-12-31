"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/bg-1.jpg",
  "/bg-2.jpg",
  "/bg-4.jpg",
  "/bg-5.png",
  "/bg-6.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] font-sans">
      {/* ФОНОВЫЕ ИЗОБРАЖЕНИЯ */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentImage
                ? "opacity-40 scale-105"
                : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              quality={100}
              className="object-cover object-center grayscale"
            />
          </div>
        ))}

        {/* HUD overlay: Эффект старого монитора / сканирования */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />
        </div>

        {/* Нижний переход */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
      </div>

      <div className="container relative z-30 mx-auto px-4 flex flex-col items-center text-center">
        {/* Надзаголовок */}
        <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="h-px w-12 bg-primary/50" />
          <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
            Established 2025
          </span>
          <div className="h-px w-12 bg-primary/50" />
        </div>

        {/* Главный заголовок */}
        <div className="animate-in fade-in zoom-in duration-1000">
          <h1 className="font-serif text-[12vw] md:text-[80px] text-white font-black tracking-tighter leading-[0.8] uppercase italic">
            BLOOD <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              &
            </span>{" "}
            <span className="text-white/30 not-italic font-light tracking-[-0.1em]">
              CONQUEST
            </span>
          </h1>
        </div>

        {/* Цитата с рамкой */}
        <div className="relative mt-10 py-4 px-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="absolute top-0 left-0 w-4 h-full border-l border-primary" />
          <div className="absolute top-0 right-0 w-4 h-full border-r border-primary" />
          <p className="max-w-xl text-white/60 text-xl italic tracking-widest font-light uppercase">
            «Твоя кровь — это ключ к{" "}
            <span className="text-white">бессмертию</span>»
          </p>
        </div>

        {/* Кнопки (Brutalist Style) */}
        <div className="mt-16 flex flex-col sm:flex-row gap-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            asChild
            className="h-20 px-16 bg-primary text-white hover:bg-white hover:text-black transition-all duration-300 border border-primary text-[11px] font-black uppercase tracking-[0.4em]"
          >
            <Link href="/guides/quick-start">Начать путь</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-20 px-16 border border-white/10 bg-transparent text-white hover:bg-white/5 transition-all duration-300 text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-md"
          >
            <a href="https://discord.gg/FbUVUChMm8" target="_blank">
              Вступить в совет
            </a>
          </Button>
        </div>
      </div>

      {/* ИНДИКАТОРЫ СЛАЙДОВ (WIDE HORIZONTAL SLOTS) */}
      <div className="absolute bottom-12 left-0 w-full z-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          {/* Техническая метка над полосками */}
          <div className="flex justify-between items-end px-1">
            <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">
              System_Status: <span className="text-white">Active_Node</span>
            </span>
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
              Buffering_Stream_0{currentImage + 1}
            </span>
          </div>

          {/* Сетка широких индикаторов */}
          <div className="grid grid-cols-5 gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="group relative h-[6px] transition-all duration-300"
              >
                {/* Фоновая подложка (пустая часть) */}
                <div className="absolute inset-0 bg-white/5 border-r border-white/10" />

                {/* Активная полоса прогресса */}
                <div
                  className={cn(
                    "absolute inset-0 bg-primary transition-all duration-[8000ms] linear origin-left",
                    i === currentImage
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  )}
                  style={{
                    transitionTimingFunction:
                      i === currentImage ? "linear" : "ease-out",
                    transitionDuration: i === currentImage ? "8000ms" : "0.5s",
                  }}
                />

                {/* Статичная подсветка для уже пройденных или выбранных слайдов */}
                <div
                  className={cn(
                    "absolute inset-0 bg-primary/20 transition-opacity",
                    i === currentImage ? "opacity-100" : "opacity-0"
                  )}
                />

                {/* Числовой индекс (появляется при наведении или активации) */}
                <div
                  className={cn(
                    "absolute -bottom-6 left-0 text-[9px] font-black tracking-tighter transition-all",
                    i === currentImage
                      ? "text-primary translate-y-0"
                      : "text-white/20 group-hover:text-white"
                  )}
                >
                  [ 0{i + 1} ]
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Боковые данные (Декор) */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 z-40 space-y-20 [writing-mode:vertical-lr] rotate-180">
        <p className="text-[8px] font-black tracking-[1em] text-white/20 uppercase">
          V-Rising / Modified / Brutal_Plus
        </p>
      </div>
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-40 space-y-20 [writing-mode:vertical-lr]">
        <p className="text-[8px] font-black tracking-[1em] text-primary uppercase">
          Authorization required _
        </p>
      </div>

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </section>
  );
}
