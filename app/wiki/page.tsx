"use client";

import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  ChevronRight,
  Zap,
  Sword,
  Droplets,
  Globe,
  Layers,
  Shield,
  Skull,
  Hammer,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- ТИПИЗАЦИЯ ДАННЫХ ---
interface WikiCategory {
  id: string;
  title: string;
  slug: string;
  icon: React.ReactNode; // Поддержка Lucide иконок
  count: string;
  description: string;
  tags: string[];
}

// --- МАССИВ ДАННЫХ (На основе V Rising Wiki) ---
const wikiCategories: WikiCategory[] = [
  {
    id: "V-Кровь",
    title: "Носители V-крови",
    slug: "v-blood",
    icon: <Skull className="w-6 h-6" />,
    count: "50+ целей",
    description:
      "Полное досье на боссов Вардорана: способности, тактики и открываемые технологии.",
    tags: ["Боссы", "Способности", "Прогрессия", "Охота"],
  },
  {
    id: "Ресурсы",
    title: "Ресурсы и Добыча",
    slug: "resources",
    icon: <Layers className="w-6 h-6" />,
    count: "100+ предметов",
    description:
      "Гайды по сбору материалов: от хлопка и железа до темного серебра и драгоценных камней.",
    tags: ["Фарм", "Локации", "Руда", "Рецепты"],
  },
  {
    id: "Строительство",
    title: "Архитектура Замка",
    slug: "castle",
    icon: <Shield className="w-6 h-6" />,
    count: "30 гайдов",
    description:
      "Строительство цитадели: защита сердца замка, планировка этажей и декор.",
    tags: ["База", "Защита", "Слуги", "Дизайн"],
  },
  {
    id: "Сняряжение",
    title: "Снаряжение",
    slug: "gear",
    icon: <Sword className="w-6 h-6" />,
    count: "40 сетов",
    description:
      "Обзор оружия, брони и аксессуаров. Сравнение характеристик и бонусов наборов.",
    tags: ["Броня", "Оружие", "Артефакты", "Крафт"],
  },
  {
    id: "Магия",
    title: "Магия и Кровь",
    slug: "magic",
    icon: <Zap className="w-6 h-6" />,
    count: "15 типов",
    description:
      "Система заклинаний, типы резонанса крови и магические расходники.",
    tags: ["Школы магии", "Ульта", "Баффы"],
  },
];

export default function WikiPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Фильтрация с типизацией
  const filteredArticles = useMemo(() => {
    return wikiCategories.filter((cat) => {
      const searchStr = searchQuery.toLowerCase();
      const matchesSearch =
        cat.title.toLowerCase().includes(searchStr) ||
        cat.tags.some((t) => t.toLowerCase().includes(searchStr));

      const matchesCategory =
        activeCategory === "ALL" || cat.id === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-primary/30 font-sans overflow-hidden text-white">
      {/* ФОНОВЫЙ СЛОЙ */}
      <div className="absolute top-0 left-0 w-full h-[70vh] z-0 overflow-hidden">
        <Image
          src="/bg-3.jpg" // Убедись, что файл есть в public/
          alt="Wiki Background"
          fill
          className="object-cover object-center grayscale opacity-30 animate-[pulse_15s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10 opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-20" />
      </div>

      <div className="container relative z-30 mx-auto px-6 pt-40 pb-32">
        {/* ШАПКА В ТВОЕМ СТИЛЕ */}
        <div className="max-w-5xl mb-24 border-l-[3px] border-primary pl-10 animate-in fade-in slide-in-from-left-10 duration-1000">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary font-black tracking-[0.8em] uppercase text-[10px]">
              Vampire Terminal // Wiki Unit
            </span>
            <div className="h-px w-24 bg-primary/20" />
          </div>

          <h1 className="font-serif text-[7vw] md:text-[80px] text-white font-black tracking-tighter leading-[0.85] uppercase italic mb-10">
            ВАЖНОЕ И <br />
            <span className="not-italic text-primary drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">
              ПОЛЕЗНОЕ
            </span>
          </h1>

          <div className="relative inline-block py-6 px-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
            <p className="max-w-xl text-white/50 text-base md:text-lg tracking-widest font-light uppercase italic leading-relaxed">
              Центральный реестр знаний Вардорана. <br />
              <span className="text-white font-bold not-italic underline decoration-primary decoration-2 underline-offset-8 uppercase text-xs tracking-[0.2em]">
                Выберите сектор данных для анализа
              </span>
            </p>
          </div>

          {/* ПОИСК */}
          <div className="relative max-w-2xl mt-12 group">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary z-20" />
            <div className="relative overflow-hidden border border-white/10 bg-[#080808]/60 backdrop-blur-md">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary z-30" />
              <input
                type="text"
                placeholder="ПОИСК ПО БАЗЕ ДАННЫХ..."
                className="w-full bg-transparent py-6 pl-16 pr-8 text-white text-xs uppercase tracking-[0.3em] focus:outline-none focus:bg-white/[0.05] transition-all relative z-20"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <div className="grid lg:grid-cols-4 gap-12 items-start">
          {/* НАВИГАЦИЯ (САЙДБАР) */}
          <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-32">
            <div className="flex flex-col gap-px bg-white/5 border border-white/5 shadow-2xl">
              {["ALL", ...wikiCategories.map((c) => c.id)].map((id) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={cn(
                    "p-6 text-left transition-all uppercase text-[10px] font-bold tracking-[0.2em] border-l-2 flex justify-between items-center",
                    activeCategory === id
                      ? "bg-primary/10 border-primary text-white"
                      : "bg-[#080808] border-transparent text-white/30 hover:text-white hover:bg-white/[0.02]"
                  )}
                >
                  {id === "ALL" ? "Полный доступ" : id}
                  {activeCategory === id && (
                    <div className="w-1.5 h-1.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* СЕТКА КАТЕГОРИЙ */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            {filteredArticles.map((cat, i) => (
              <Link
                href={`/wiki/${cat.slug}`}
                key={cat.id}
                className="group relative bg-[#080808]/40 border border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-primary/40 flex flex-col md:flex-row gap-10 items-center slide-in-from-bottom-5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-all" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-all" />

                {/* Текстовый блок */}
                <div className="flex-grow space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                      Node::{cat.id}
                    </span>
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                      {cat.count}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-white/40 text-sm italic font-light leading-relaxed max-w-xl group-hover:text-white/70 transition-colors">
                    {cat.description}
                  </p>

                  {/* Теги */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/[0.03] border border-white/5 text-white/20 group-hover:text-primary/80 group-hover:border-primary/20 transition-all"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
    </div>
  );
}
