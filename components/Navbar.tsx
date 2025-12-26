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
    icon: <Sword className="w-4 h-4" />,
  },
  {
    name: "Экономика Мира",
    href: "/world",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    name: "Фамильяры",
    href: "/familiars",
    icon: <Ghost className="w-4 h-4" />,
  },
  {
    name: "Прогрессия",
    href: "/progression",
    icon: <Zap className="w-4 h-4" />,
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

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-sans",
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-primary py-4"
            : "bg-transparent border-b border-white/5 py-7"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* ЛОГОТИП */}
          <Link href="/" className="flex items-center gap-3 group z-[110]">
            <div className="flex flex-col border-l-2 border-primary pl-3">
              <span className="text-xl font-black tracking-[0.2em] leading-none text-white uppercase italic transition-colors group-hover:text-primary">
                Court
              </span>
              <span className="text-[10px] font-black tracking-[0.55em] leading-none text-primary uppercase mt-1">
                of Darkness
              </span>
            </div>
          </Link>

          {/* ДЕСКТОП НАВИГАЦИЯ */}
          <div className="hidden lg:flex items-center gap-2">
            <NavLink href="/">Главная</NavLink>

            {/* ВЫПАДАЮЩИЙ СПИСОК */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={cn(
                  "px-5 py-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black transition-all outline-none",
                  isDropdownOpen
                    ? "text-primary"
                    : "text-white/50 hover:text-white"
                )}
              >
                База Знаний
                <ChevronDown
                  className={cn(
                    "w-3 transition-transform duration-300",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-4 w-72 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#080808] border border-white/10 p-1 shadow-2xl relative">
                    {/* HUD уголки */}
                    <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-primary" />

                    {knowledgeLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group/item flex items-center justify-between p-4 transition-all hover:bg-primary"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-primary group-hover/item:text-white transition-colors">
                            {link.icon}
                          </span>
                          <span className="text-[9px] uppercase tracking-widest font-black text-white group-hover/item:text-white">
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight className="w-3 h-3 text-white opacity-0 group-hover/item:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/guides">Гайды</NavLink>
            <NavLink href="/rules">Правила</NavLink>
            <NavLink href="/commands">Команды</NavLink>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (ДИСКОРД) */}
          <div className="hidden lg:flex items-center gap-6">
            <Button
              asChild
              className="bg-primary text-white hover:bg-white hover:text-black transition-all px-8 text-[10px] uppercase tracking-[0.4em] font-black h-11 shadow-[4px_4px_0px_rgba(220,38,38,0.3)]"
            >
              <Link href="https://discord.gg/your-link">Discord</Link>
            </Button>
          </div>

          {/* МОБИЛЬНЫЙ ТРИГГЕР */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-[120] text-primary p-2 border border-white/10 bg-white/[0.03] active:scale-90 transition-all"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ПОЛНОЭКРАННОЕ МОБИЛЬНОЕ МЕНЮ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-[115] flex flex-col p-10 pt-36 animate-in fade-in slide-in-from-right-4 duration-300 lg:hidden">
          {/* Декор фона */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Главная
            </MobileNavLink>
            <MobileNavLink
              href="/guides"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Гайды
            </MobileNavLink>
            <MobileNavLink
              href="/rules"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Правила
            </MobileNavLink>

            <div className="h-px bg-white/5 my-4 relative">
              <span className="absolute left-0 -top-2 bg-[#050505] pr-4 text-[8px] font-mono text-primary uppercase tracking-[0.5em]">
                Knowledge_Data
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {knowledgeLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 text-white/40 active:text-primary active:border-primary/50 transition-all uppercase text-[10px] font-black tracking-widest"
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            <Button
              asChild
              className="mt-8 w-full h-16 bg-primary text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-[6px_6px_0px_rgba(220,38,38,0.2)]"
            >
              <Link href="https://discord.gg/your-link">Join Community</Link>
            </Button>
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </>
  );
}

// Вспомогательный компонент для десктопных ссылок
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/50 hover:text-white transition-all relative group"
    >
      {children}
      <div className="absolute bottom-0 left-5 right-5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </Link>
  );
}

// Вспомогательный компонент для мобильных ссылок
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-3xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors italic border-l-2 border-transparent hover:border-primary pl-4"
    >
      {children}
    </Link>
  );
}
