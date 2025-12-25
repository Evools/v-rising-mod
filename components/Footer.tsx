import { ArrowUpRight, Disc as Discord, Github } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pt-32 pb-16 border-t-2 border-primary/20 bg-[#070708] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
          <div className="lg:col-span-2">
            <div className="font-serif text-4xl tracking-tighter text-foreground mb-8">
              <span className="font-black italic text-primary">Blood</span>
              <span className="font-light mx-1">&</span>
              <span className="font-black uppercase">Conquest</span>
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-sm mb-10 italic border-l border-white/10 pl-6">
              Премиальный V Rising проект. Мы создаем экосистему, где каждый
              вампир обретает истинное могущество через дисциплину и магию
              крови.
            </p>
            <div className="flex gap-1">
              <Link
                href="#"
                className="p-4 border border-white/5 hover:bg-primary hover:text-white transition-all"
              >
                <Discord className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="p-4 border border-white/5 hover:bg-primary hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-10">
              Навигация
            </h4>
            <ul className="space-y-5">
              {["Классы", "Мир", "Гайды", "Команды"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-white transition-colors flex items-center gap-4 group font-bold"
                  >
                    <div className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-10">
              Ресурсы
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Правила", href: "/rules" },
                { name: "Wiki", href: "/wiki" },
                { name: "Поддержка", href: "/support" },
                { name: "Донат", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-white transition-colors flex items-center gap-4 group font-bold"
                  >
                    <div className="w-0 h-px bg-primary group-hover:w-6 transition-all duration-300 ease-out" />

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>

                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-[9px] uppercase tracking-[0.4em] font-black">
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Blood & Conquest Protocol</span>.
          </p>
          <p className="text-muted-foreground text-[9px] uppercase tracking-[0.4em] font-black italic">
            Created by{" "}
            <a
              href="https://t.me/web_commander"
              target="_blank"
              className="text-primary not-italic underline underline-offset-4"
            >
              @web_commander
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
