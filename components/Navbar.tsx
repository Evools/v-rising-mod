"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Ghost,
  Globe,
  Menu,
  Sword,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const knowledgeLinks = [
  {
    name: "Боевые Классы",
    href: "/classes",
    icon: <Sword className="w-3 h-3" />,
  },
  {
    name: "Экономика Мира",
    href: "/world",
    icon: <Globe className="w-3 h-3" />,
  },
  {
    name: "Фамильяры",
    href: "/familiars",
    icon: <Ghost className="w-3 h-3" />,
  },
  {
    name: "Прогрессия",
    href: "/progression",
    icon: <Zap className="w-3 h-3" />,
  },
];

const subscribe = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled
          ? "bg-background border-b border-primary/40 py-4 shadow-2xl"
          : "bg-transparent border-b border-white/10 py-8"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* НОРМАЛЬНЫЙ ЛОГОТИП */}
        <Link href="/" className="flex items-center gap-3 outline-none group">
          <div className="flex flex-col border-l-2 border-primary pl-3">
            <span className="text-xl font-black tracking-[0.2em] leading-none text-white uppercase">
              Blood
            </span>
            <span className="text-[10px] font-black tracking-[0.55em] leading-none text-primary uppercase mt-1">
              & Wine
            </span>
          </div>
        </Link>

        {/* ДЕСКТОПНАЯ НАВИГАЦИЯ */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/"
            className="px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-primary transition-all relative"
          >
            Главная
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="px-6 py-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-primary transition-all outline-none">
              База Знаний
              <ChevronDown
                className={cn(
                  "w-3 h-3 transition-transform duration-300",
                  isDropdownOpen && "rotate-180 text-primary"
                )}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-6 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0c0c0e] border border-white/10 p-1 shadow-2xl">
                  {knowledgeLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between p-4 hover:bg-primary hover:text-white group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span className="group-hover:text-white text-primary transition-colors">
                          {link.icon}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-black">
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/guides"
            className="px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-primary transition-all"
          >
            Гайды
          </Link>
          <Link
            href="/commands"
            className="px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-primary transition-all"
          >
            Команды
          </Link>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="hidden lg:flex items-center gap-10">
          {isClient && (
            <div className="flex items-center gap-8">
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">
                    Сервер Онлайн
                  </span>
                </div>
              </div>
              <Button
                asChild
                className="bg-primary text-white hover:bg-white hover:text-black transition-all px-10 text-[10px] uppercase tracking-[0.4em] font-black h-12 shadow-[4px_4px_0px_rgba(220,38,38,0.3)] active:translate-y-[2px]"
              >
                <Link href="https://discord.gg/your-link">Дискорд</Link>
              </Button>
            </div>
          )}
        </div>

        {/* МОБИЛЬНЫЙ ТРИГГЕР */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary p-3 border border-white/10"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0c0c0e] border-b border-primary animate-in slide-in-from-top-4 lg:hidden">
          <div className="flex flex-col p-8 gap-8">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[10px] uppercase font-black tracking-[0.4em] text-primary"
            >
              Главный Терминал
            </Link>

            <div className="grid grid-cols-1 gap-2">
              {knowledgeLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-5 bg-white/5 text-[9px] font-black uppercase tracking-widest"
                >
                  <div className="flex items-center gap-4">
                    {link.icon}
                    {link.name}
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary" />
                </Link>
              ))}
            </div>

            <Button className="w-full h-16 bg-primary text-white text-[10px] font-black uppercase tracking-[0.5em]">
              Discord Server
            </Button>
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </nav>
  );
}
