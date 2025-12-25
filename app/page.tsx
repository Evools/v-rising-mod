"use client";

import FeatureBlock from "@/components/FeatureBlock";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const classes = [
  {
    name: "Blood Knight",
    desc: "Мастер ближнего боя, использующий силу крови для защиты и мощных ударов.",
    id: "01",
  },
  {
    name: "Shadow Blade",
    desc: "Неуловимый убийца, полагающийся на критические удары и скрытность.",
    id: "02",
  },
  {
    name: "Chaos Weaver",
    desc: "Разрушительный маг, повелевающий хаосом и массовым уроном.",
    id: "03",
  },
  {
    name: "Paladin",
    desc: "Святой воин, дарующий исцеление и баффы своим союзникам.",
    id: "04",
  },
  {
    name: "Necromancer",
    desc: "Повелитель мертвых, призывающий армию слуг на свою сторону.",
    id: "05",
  },
  {
    name: "Ranger",
    desc: "Мастер дальнего боя, поражающий цели с невероятной точностью.",
    id: "06",
  },
];

export default function Page() {
  return (
    <main className="bg-background transition-colors duration-500 font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />

      {/* СЕКЦИЯ КЛАССОВ (BRUTAL GRID) */}
      <section
        id="classes"
        className="py-32 bg-background relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px]">
                Legacy of Blood
              </span>
              <div className="h-[2px] w-12 bg-primary" />
            </div>
            <h2 className="font-serif text-6xl md:text-7xl text-foreground mb-8 uppercase italic tracking-tighter">
              ВЫБЕРИТЕ СВОЮ{" "}
              <span className="text-primary not-italic">СУДЬБУ</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground font-light text-lg leading-relaxed italic border-x border-white/5 px-12">
              Шесть путей развития. Уникальный геймплей и бесконечное
              совершенствование через циклы Престижа.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-[40px_40px_0px_rgba(0,0,0,0.3)]">
            {classes.map((cls) => (
              <Link
                href="/classes"
                key={cls.name}
                className="bg-background p-12 hover:bg-white/[0.02] transition-all duration-300 group relative overflow-hidden border-border"
              >
                <span className="absolute -top-4 -right-2 text-8xl font-serif font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors italic">
                  {cls.id}
                </span>

                <div className="relative z-10">
                  <div className="w-8 h-[2px] bg-primary mb-6 transition-all group-hover:w-16" />
                  <h3 className="font-serif text-3xl text-foreground mb-4 group-hover:text-primary transition-colors uppercase italic tracking-tighter">
                    {cls.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-10 italic">
                    {cls.desc}
                  </p>
                  <div className="flex items-center gap-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">
                      Изучить архив
                    </span>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ФУНКЦИОНАЛЬНЫЕ БЛОКИ (Жесткое разделение) */}
      <div className="divide-y-2 divide-primary/10 border-t-2 border-primary/10 bg-muted/5">
        <FeatureBlock
          tag="Progression"
          title="Система Престижа"
          description="Ваш прогресс не ограничен уровнем. Проходите через горнило Престижа до 10 раз, открывая ультимативные заклинания и постоянные бонусы к характеристикам."
          image="/images/prestige.jpg"
        />

        <FeatureBlock
          reverse
          tag="Familiars"
          title="Верные спутники хаоса"
          description="Побеждайте великих боссов V-Blood и превращайте их в своих фамильяров. Они станут вашей тенью в бою, даруя уникальную ауру восстановления и защиты."
          image="/images/familiars.jpg"
        />

        <FeatureBlock
          tag="Automation"
          title="Kindred Logistics"
          description="Искусство управления замком. Автоматические жаровни, интеллектуальные хранилища и мгновенный поиск предметов — фокус на битве, а не на рутине."
          image="/images/base.webp"
        />
      </div>

      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;900&display=swap");

        .font-serif {
          font-family: "Cinzel", serif;
        }

        /* Полный отказ от скруглений во всем проекте */
        * {
          border-radius: 0 !important;
        }
      `}</style>
    </main>
  );
}
