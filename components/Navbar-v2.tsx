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

  // ИСПРАВЛЕНИЕ ОШИБКИ: Разделяем эффекты
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Массив всегда пустой

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]); // Массив всегда [boolean]

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 transition-all duration-500">
      <div
        className={cn(
          "container mx-auto px-6 h-20 flex items-center justify-between transition-all duration-500 relative",
          isScrolled || isMobileMenuOpen
            ? "bg-[#050505]/90 backdrop-blur-md border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent border border-transparent"
        )}
      >
        {isScrolled && (
          <>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
          </>
        )}

        <Link
          href="/"
          className="flex items-center gap-3 outline-none group z-[110]"
        >
          <div className="flex flex-col border-l-2 border-primary pl-3">
            <span className="text-xl font-black tracking-[0.2em] leading-none text-white uppercase italic">
              Court
            </span>
            <span className="text-[10px] font-black tracking-[0.55em] leading-none text-primary uppercase mt-1">
              of Darkness
            </span>
          </div>
        </Link>

        {/* ДЕСКТОП */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink href="/">Главная</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={cn(
                "px-5 py-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black transition-all outline-none relative group",
                isDropdownOpen
                  ? "text-primary"
                  : "text-white/50 hover:text-white"
              )}
            >
              База Знаний
              <ChevronDown
                className={cn(
                  "w-3 h-3 transition-transform",
                  isDropdownOpen && "rotate-180"
                )}
              />
              <div
                className={cn(
                  "absolute bottom-0 left-5 right-5 h-px bg-primary scale-x-0 transition-transform",
                  isDropdownOpen && "scale-x-100"
                )}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 pt-4 w-72 animate-in fade-in slide-in-from-top-2">
                <div className="bg-[#0a0a0a] border border-white/10 p-1 shadow-2xl relative">
                  {knowledgeLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex items-center justify-between p-4 transition-all hover:bg-primary"
                    >
                      <div className="flex items-center gap-4 text-white">
                        <span className="text-primary group-hover:text-white transition-colors">
                          {link.icon}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest font-black">
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink href="/guides">Гайды</NavLink>
          <NavLink href="/commands">Команды</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {isClient && (
            <div className="flex items-center gap-6">
              <Button
                asChild
                className="bg-primary text-white hover:bg-white hover:text-black transition-all px-8 text-[10px] uppercase tracking-[0.4em] font-black h-11 shadow-[4px_4px_0px_rgba(220,38,38,0.3)]"
              >
                <Link href="https://discord.gg/your-link">Discord</Link>
              </Button>
            </div>
          )}
        </div>

        {/* ИСПРАВЛЕНИЕ: z-[120], чтобы кнопка была выше черного меню */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-[120] text-primary p-2 bg-white/[0.05] border border-white/10 active:scale-95 transition-all"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-[115] flex flex-col p-10 pt-36 animate-in fade-in duration-300">
          <div className="flex flex-col gap-8">
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
              href="/commands"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Команды
            </MobileNavLink>

            <div className="h-px bg-white/5 my-4 relative">
              <span className="absolute left-0 -top-2 bg-[#050505] pr-4 text-[8px] font-mono text-primary uppercase tracking-[0.5em]">
                Data_Nodes
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {knowledgeLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-white/40 hover:text-primary transition-colors uppercase text-[10px] font-black tracking-widest"
                >
                  <span className="p-2 border border-white/5 bg-white/[0.02] text-primary">
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>

            <Button className="mt-10 w-full h-16 bg-primary text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-[4px_4px_0px_rgba(220,38,38,0.2)]">
              Discord
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
      className="text-2xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors italic"
    >
      {children}
    </Link>
  );
}
