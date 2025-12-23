import { Box, Rocket, ShieldAlert, Zap } from "lucide-react";
import React from "react";

// Интерфейс для строгой типизации (поможет избежать ошибок в будущем)
interface GuideSection {
  header: string;
  text: string;
  cmd?: string;
}

interface FullGuide {
  title: string;
  icon: React.ReactNode;
  sections: GuideSection[];
}

export const fullGuidesContent: Record<string, FullGuide> = {
  "quick-start": {
    title: "Быстрый старт",
    icon: <Rocket className="w-8 h-8 text-primary" />,
    sections: [
      {
        header: "Первые шаги",
        text: "Мир Bloodcraft на сложности Brutal+ беспощаден. Начните с получения базового снаряжения, чтобы выжить в первые минуты.",
        cmd: ".misc starterkit",
      },
      {
        header: "Выбор пути",
        text: "На сервере представлено 6 уникальных классов. Каждый имеет свои бонусы престижа. Используйте команду выбора, когда определитесь с ролью.",
        cmd: ".class s [1-6]",
      },
    ],
  },
  "logistics-master": {
    title: "Мастер Логистики",
    icon: <Box className="w-8 h-8 text-primary" />,
    sections: [
      {
        header: "Автоматизация сундуков",
        text: "Вам больше не нужно открывать каждый ящик. Система Kindred Logistics сделает всё за вас. Команда .stash отправит всё в сундуки.",
        cmd: ".stash",
      },
      {
        header: "Поиск предметов",
        text: "Забыли, где лежит Кровь? Найдите нужный сундук мгновенно, не обыскивая весь замок.",
        cmd: ".fi Blood Essence",
      },
    ],
  },
  "prestige-system": {
    title: "Система Престижа",
    icon: <Zap className="w-8 h-8 text-primary" />,
    sections: [
      {
        header: "Перерождение",
        text: "Достигнув 100 уровня, вы можете сбросить прогресс. Вы сохраните свои умения, но получите бонусы к силе, здоровью и интеллекту.",
        cmd: ".prestige",
      },
      {
        header: "Награды",
        text: "Каждый уровень престижа открывает новые пассивные бонусы и улучшает способности вашего класса.",
      },
    ],
  },
  "newbie-safety": {
    title: "Безопасность новичка",
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    sections: [
      {
        header: "Гостиница (Inn)",
        text: "Пока у вас нет надежного замка, арендуйте комнату в Kindred Innkeeper. Это защитит вас от рейдов и случайной смерти при выходе.",
        cmd: ".inn join",
      },
    ],
  },
};
