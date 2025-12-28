"use client";

import ClassSelection from "@/components/ClassRegistry";
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
    name: "Demon Hunter",
    desc: "Стремительный охотник, использующий огнестрельное оружие и взрывчатку для зачистки оскверненных земель.",
    id: "02",
  },
  {
    name: "Vampire Lord",
    desc: "Древний аристократ, повелевающий стаями летучих мышей и чистой магической мощью своего рода.",
    id: "03",
  },
  {
    name: "Shadow Blade",
    desc: "Мастер скрытности и быстрых клинков. Появляется из ниоткуда, чтобы нанести фатальный удар.",
    id: "04",
  },
  {
    name: "Arcane Sorcerer",
    desc: "Манипулятор чистой энергией Арканы, способный искажать реальность и обрушивать мощь стихий.",
    id: "05",
  },
  {
    name: "Death Mage",
    desc: "Повелитель смерти, использующий трупы врагов как ресурс для создания своей нежити.",
    id: "06",
  },
];

export default function Page() {
  return (
    <main className="bg-background transition-colors duration-500 font-sans selection:bg-primary/30">
      <Navbar />
      <Hero />

      <ClassSelection />

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
