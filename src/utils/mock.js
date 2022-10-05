import abk from "../assets/img/ABK_RJD_Adler.jpg";
import alpi from "../assets/img/Alpi.jpg";

import grandTheatre from "../assets/img/Большой_театр2.jpg";
import grandTheatre2 from "../assets/img/Большой_театр.jpg";

import privateHotel from "../assets/img/Частная_гостиница4.jpg";
import privateHotel2 from "../assets/img/Частная_гостиница2.jpg";
import privateHotel3 from "../assets/img/Частная_гостиница3.jpg";
import privateHotelPool from "../assets/img/Бассеин_частная_гостиница.jpg";

import redStar from "../assets/img/Красная_звезда.jpg";
import redStar2 from "../assets/img/Красная_звезда2.jpeg";

import mediaMarkt from "../assets/img/Медия_маркт.jpg";

import carDealershipWV from "../assets/img/Автосалон_WV.jpg";
import hotelComplexWV from "../assets/img/Гостиничный_комплекс_WV.jpg";

import arena1 from "../assets/img/arena-1.jpeg";
import arena2 from "../assets/img/arena-2.jpg";
import termalUnitArena from "../assets/img/тепловой_узел_Арена.jpg";
import termalUnit from "../assets/img/Тепловой_узел2.JPG";

import festival from "../assets/img/Festival_Omsk.jpg";
import korston from "../assets/img/Korston.jpg";

import kosmos from "../assets/img/Kosmos-1.jpeg";
import kosmos2 from "../assets/img/Kosmos-2.jpeg";

import leruaMerlen1 from "../assets/img/lerua-merlen-1.jpg";
import obi1 from "../assets/img/OBI-1.jpg";

import zhkDmitrovskaya from "../assets/img/ЖК_Дмитровская.jpg";
import zhkDmitrovskaya2 from "../assets/img/ЖК_Дмитровская2.jpg";

import rostelekom from "../assets/img/серверная_ростелеком.jpg";
import rostelekom2 from "../assets/img/серверная_ростелеком2.jpg";

import pipeKosmos from "../assets/img/Воздуховод_гостиница_космос.jpeg";
import pipeKosmos2 from "../assets/img/Воздуховод_гостиница_космос1.jpeg";

import pipe from "../assets/img/Воздуховод1.jpg";
import pipe2 from "../assets/img/Воздуховод2.jpg";
import pipe3 from "../assets/img/Воздуховод3.jpg";

import networkEngineering from "../assets/img/Инженерные_сети.jpg";
import installationExample from "../assets/img/Пример монтажа оборудования сетей.jpg";
import installationExample2 from "../assets/img/Пример монтажа оборудования.jpg";
import installationExample3 from "../assets/img/Пример монтажа оборудования2.jpg";

export const cards = [
  {
    id: 0,
    img: [kosmos, kosmos2, pipeKosmos, pipeKosmos2],
    title: "Гостиничный комплекс Cosmos 4*",
    description: [
      "Система общеобменной вентиляции",
      "Система дымоудаления",
      "Cистема кондиционирования",
    ],
  },
  {
    id: 1,
    img: [rostelekom, rostelekom2],
    title: "Серверная РосТелеком",
    description: [
      "Общестроительные работы.",
      "Отопление.",
      "Система вентиляции.",
      "Система кондиционирования.",
      "Газовое пожаротушение.",
      "Охранно-пожарная сигнализация.",
      "Электросиловое оборудование.",
      "Электроосвещение.",
      "Видеонаблюдение.",
      "Слаботочные сети.",
    ],
  },

  {
    id: 2,
    img: [
      zhkDmitrovskaya,
      zhkDmitrovskaya2,
      networkEngineering,
      installationExample,
      installationExample2,
      installationExample3,
    ],
    title: 'ЖК "Дмитровский парк"',
    description: [
      "Система теплоснабжения.",
      "Система вентиляции.",
      "Система дымоудаления.",
    ],
  },
  {
    id: 3,
    img: [abk, pipe, pipe2, pipe3],
    title: "АБК РЖД",
    description: ["Тепловые сети.", "Система водоснабжения."],
  },

  {
    id: 4,
    img: [alpi],
    title: "АЛПИ",
    description: ["Система вентиляции."],
  },

  {
    id: 5,
    img: [grandTheatre, grandTheatre2],
    title: "Большой театр",
    description: ["Система вентиляции.", "Система кондиционирования."],
  },

  {
    id: 6,
    img: [redStar, redStar2],
    title: 'Футбольный стадион "Красная звезда" ',
    description: ["Система вентиляции.", "Автоматизация."],
  },

  {
    id: 7,
    img: [mediaMarkt],
    title: "Медиа Маркт",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Теплоснабжение.",
      "Водоснабжение.",
      "Водоотведение.",
      "Автоматизация.",
    ],
  },

  {
    id: 8,
    img: [privateHotel2, privateHotel, privateHotel3, privateHotelPool],
    title: "VIP гостиница",
    description: ["Система  вентиляции.", "Система кондиционирования."],
  },

  {
    id: 9,
    img: [carDealershipWV],
    title: "Автосалон VW",
    description: ["Система  вентиляции.", "Система кондиционирования."],
  },

  {
    id: 10,
    img: [hotelComplexWV],
    title: "Гостиничный комплекс VW Калуга",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Теплоснабжение.",
      "Водоснабжение.",
      "Водоотведение.",
      "Автоматизация.",
    ],
  },

  {
    id: 11,
    img: [arena1, arena2, termalUnitArena, termalUnit],
    title: "Ледовый комплекс на 10 000 зрителей",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Постгарантийное обслуживание инженерных систем.",
    ],
  },

  {
    id: 12,
    img: [festival],
    title: 'Бизнес центр "Фестиваль"',
    description: [
      "Система вентиляций.",
      "Система кондиционирования.",
      "Автоматизация.",
    ],
  },

  {
    id: 13,
    img: [korston],
    title: "Гостиничный комплекс Korston Казань",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Теплоснабжение.",
      "Водоснабжение.",
      "Водоотведение.",
      "Автоматизация.",
    ],
  },

  {
    id: 14,
    img: [leruaMerlen1],
    title: "Леруа Мерлен",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Система дымоудаления.",
      "Теплоснабжение.",
    ],
  },

  {
    id: 15,
    img: [obi1],
    title: "OBI",
    description: [
      "Система вентиляции.",
      "Система кондиционирования.",
      "Теплоснабжение.",
      "Водоснабжение.",
      "Водоотведение.",
      "Автоматизация.",
    ],
  },
];

export const jobs = [
  { id: 0, text: "ВЕНТИЛЯЦИЯ И КОНДИЦИОНИРОВАНИЕ" },
  { id: 1, text: "ОТОПЛЕНИЕ" },
  { id: 2, text: "ВОДОСНАБЖЕНИЕ И ВОДООТВЕДЕНИЕ" },
  { id: 3, text: "ЭЛЕКТРИКА" },
  { id: 4, text: "ПОЖАРНО-ОХРАННАЯ СИГНАЛИЗАЦИЯ" },
  { id: 5, text: "ВИДЕОНАБЛЮДЕНИЕ" },
];

export const description = [
  {
    id: "0",
    title: "ВЕНТИЛЯЦИЯ И КОНДИЦИОНИРОВАНИЕ",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Промышленные объекты",
      "Офисные и деловые центры",
      "Жилые комплексы",
      "Отели, гостиницы",
      " Объекты специального назначения",
      "Объекты здравоохранения",
    ],
  },
  {
    id: "1",
    title: "ОТОПЛЕНИЕ",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Офисные и деловые центры",
      "Отели, гостиницы",
      "Жилые комплексы",
      " ЦОД",
    ],
  },
  {
    id: "2",
    title: "ВОДОСНАБЖЕНИЕ И ВОДООТВЕДЕНИЕ",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Промышленные объекты",
      "Офисные и деловые центры",
      "Жилые комплексы",
      "Отели, гостиницы",
      " Объекты специального назначения",
      "Объекты здравоохранения",
    ],
  },
  {
    id: "3",
    title: "ЭЛЕКТРИКА",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Промышленные объекты",
      "Офисные и деловые центры",
      "Жилые комплексы",
      "Отели, гостиницы",
      " Объекты специального назначения",
      "Объекты здравоохранения",
    ],
  },
  {
    id: "4",
    title: "ПОЖАРО-ОХРАННАЯ СИГНАЛИЗАЦИЯ",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Промышленные объекты",
      "Офисные и деловые центры",
      "Жилые комплексы",
      "Отели, гостиницы",
      " Объекты специального назначения",
      "Объекты здравоохранения",
    ],
  },
  {
    id: "5",
    title: "ВИДЕОНАБЛЮДЕНИЕ",
    item: [
      "Торгово-развлекательные и спортивно-оздоровительные комплексы",
      "Промышленные объекты",
      "Офисные и деловые центры",
      "Жилые комплексы",
      "Отели, гостиницы",
      " Объекты специального назначения",
      "Объекты здравоохранения",
    ],
  },
];
