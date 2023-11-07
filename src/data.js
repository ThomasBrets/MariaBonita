// import food images
import Burger from "./assets/food/Burger.jpg"
import Empanada from "./assets/food/Empanada.jpg"
import Nachos  from "./assets/food/Nachos.jpg"
import Quesadilla from "./assets/food/Quesadilla.jpg"
import Tacos from "./assets/food/Nachos.jpg"

// import drink images
import Corona from "./assets/drinks/Corona.jpg"
import Vino from "./assets/drinks/Vino.jpg"

// import desserts images
import Flan from "./assets/desserts/Flan.jpg"
import iceCream from "./assets/desserts/IceCream.jpg"

import historyImg from "../src/assets/img/restaurant.jpg";

export const menuData = [
  {
    id: 1,
    name: "Taco",
    category: "Principal",
    img: Tacos,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Ajo",
        name: "Chile",
        name: "Picante",
        name: "Carne",
      },
    ],
  },
  {
    id: 2,
    name: "Quesadilla",
    category: "Principal",
    img: Quesadilla,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Ajo",
        name: "Chile",
        name: "Picante",
        name: "Carne",
      },
    ],
  },
  {
    id: 3,
    name: "Empanada",
    category: "Entrada",

    img: Empanada,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Ajo",
        name: "Chile",
        name: "Picante",
        name: "Carne",
      },
    ],
  },
  {
    id: 4,
    name: "Corona",
    category: "Bebida",

    img: Corona,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [],
  },
  {
    id: 5,
    name: "Vino",
    category: "Bebida",

    img: Vino,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [],
  },
  {
    id: 6,
    name: "Nachos",
    category: "Entrada",

    img: Nachos,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Ajo",
        name: "Chile",
        name: "Picante",
        name: "Carne",
      },
    ],
  },
  {
    id: 6,
    name: "Hamburgesa XL",
    category: "Principal",

    img: Burger,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Ajo",
        name: "Chile",
        name: "Picante",
        name: "Carne",
      },
    ],
  },
  {
    id: 7,
    name: "Helado",
    category: "Postres",

    img: iceCream,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Helado de vainilla",
        name: "Chocolate",
        name: "Dulce de leche",
      },
    ],
  },
  {
    id: 8,
    name: "Flan",
    category: "Postres",

    img: Flan,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [
      {
        name: "Chocolate",
        name: "Dulce de leche",
      },
    ],
  },
];

export const historyData = {
  pretitle: "QUIÉNES SOMOS",
  title: "Nuestra historia",
  subtitle1:
    "Nuestro compromiso es brindarle no solo una comida deliciosa, sino también una experiencia inolvidable. Desde tacos crujientes hasta enchiladas suaves, cada bocado está lleno de sabor y amor por la cocina mexicana.",
  subtitle2:
    "En Maria Bonita, no solo ofrecemos comida, sino también un ambiente acogedor que lo hará sentir como en casa. Nuestro restaurante está diseñado con un toque de autenticidad mexicana, creando un ambiente perfecto para disfrutar de una cena en familia, una comida romántica o una reunión con amigos.",
  btnText: "Ver menu",
  image: historyImg,
};
