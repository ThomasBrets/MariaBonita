// import food images
import Burger from "./assets/food/Burger.jpg";
import Empanada from "./assets/food/Empanada.jpg";
import Nachos from "./assets/food/Nachos.jpg";
import Quesadilla from "./assets/food/Quesadilla.jpg";
import Tacos from "./assets/food/Tacos.jpg";

// import drink images
import Corona from "./assets/drinks/Corona.jpg";
import Vino from "./assets/drinks/Vino.jpg";

// import desserts images
import Flan from "./assets/desserts/Flan.jpg";
import iceCream from "./assets/desserts/IceCream.jpg";

import historyImg from "../src/assets/img/restaurant.jpg";

export const menuData = [
  {
    id: 1,
    name: "Tacos",
    price: 5500,
    persons: 2,
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
    price: 4500,
    persons: 2,
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
    price: 1500,
    persons: 1,
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
    price: 1200,
    persons: 1,
    category: "Bebida",
    img: Corona,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [],
  },
  {
    id: 5,
    name: "Vino",
    price: 8000,
    persons: 2,
    category: "Bebida",
    img: Vino,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi, reprehenderit adipisci cumque eligendi aliquam nisi fuga optio vero at iste placeat quae a consequatur, odit exercitationem eos expedita excepturi.",
    ingredients: [],
  },
  {
    id: 6,
    name: "Nachos",
    price: 6000,
    persons: 2,
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
    price: 7000,
    persons: 1,
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
    price: 2500,
    persons: 1,
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
    price: 3000,
    persons: 1,
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
