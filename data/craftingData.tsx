import { Gem, Hammer } from "lucide-react";
import { JSX } from "react";

export interface Ingredient {
  name: string;
  count: string;
}

export interface GalleryItem {
  src: string;
  label: string;
}

export interface Recipe {
  title: string;
  info: string;
  ingredients: Ingredient[];
  gallery?: GalleryItem[]; // Знак вопроса делает поле необязательным
}

export interface CraftingCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  unlockCondition: string;
  recipes: Recipe[];
  customNotes?: {
    label: string;
    methods: string[];
  }[];
}

const craftingData: CraftingCategory[] = [
  {
    id: "jewels",
    name: "Т5 Камни (Custom)",
    icon: <Gem className="w-5 h-5" />,
    description:
      "Высшая ступень эволюции заклинаний. Т5 камни создаются на Столе Огранки с использованием Частиц Демона. Каждый крафт наделяет одно из 7 умений выбранной школы колоссальной мощью.",
    unlockCondition: "Требуется Стол Огранки и Частица Демона.",
    recipes: [
      {
        title: "Случайный Т5 Камень",
        info: "Создает случайный камень одной из 6 школ магии на рандомный скилл.",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Великая сущность крови", count: "4" },
        ],
      },
      {
        title: "Т5 Камень Бури (Статика)",
        info: "Гарантирует школу Бури. Скилл выбирается случайно (1 из 7).",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Топаз", count: "1" },
        ],
        gallery: [
          {
            src: "/images/wiki/crafting/storm-modification.webp",
            label: "Пример модификатора Бури",
          },
          {
            src: "/images/wiki/crafting/purple-modification.webp",
            label: "Пример модификатора Бури",
          },
          {
            src: "/images/wiki/crafting/example-of-crafting.webp",
            label: "Пример модификатора Бури",
          },
        ],
      },
      {
        title: "Т5 Камень Хаоса",
        info: "Гарантирует школу Хаоса. Скилл выбирается случайно (1 из 7).",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Рубин", count: "1" },
        ],
      },
      {
        title: "Т5 Камень Крови",
        info: "Гарантирует школу Крови. Скилл выбирается случайно (1 из 7).",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Аметист", count: "1" },
        ],
      },
      {
        title: "Т5 Камень Нечестивости",
        info: "Гарантирует школу Нечестивости (Призыв скелетов).",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Изумруд", count: "1" },
        ],
      },
      {
        title: "Т5 Камень Льда",
        info: "Гарантирует школу Льда (Заморозка).",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Сапфир", count: "1" },
        ],
      },
      {
        title: "Т5 Камень Иллюзии",
        info: "Гарантирует школу Иллюзии.",
        ingredients: [
          { name: "Частица Демона", count: "1" },
          { name: "Совершенный Туманный камень", count: "1" },
        ],
      },
    ],
    customNotes: [
      {
        label: "Как получить Частицу Демона",
        methods: [
          "Ежедневные квесты (Дейлики) — только по выходным дням (см. анонсы)",
          "Магазин 'stp tp Shop' — цена 2500 рыжих осколков",
          "Донат-магазин проекта",
        ],
      },
      {
        label: "Как получить Совершенные камни",
        methods: [
          "Выпадают только за выполнение Ежедневных квестов в любой день",
        ],
      },
    ],
  },
  {
    id: "metals",
    name: "Высшие Металлы",
    icon: <Hammer className="w-5 h-5" />,
    description:
      "Сверхпрочные сплавы для оружия 'Предвестник' и брони 'Дракулы'.",
    unlockCondition: "Кузня Предков / Печь",
    recipes: [
      {
        title: "Слиток Темного Серебра",
        info: "Сплав серебра и камня бича.",
        ingredients: [
          { name: "Серебряный слиток", count: "20" },
          { name: "Камень бича", count: "1" },
        ],
      },
    ],
  },
];

export default craftingData;
