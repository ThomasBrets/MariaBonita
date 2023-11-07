import React, { useContext } from "react";

// Context
import { menuContext } from "../context/MenuContext";

// Components
import Food from "./Food.jsx";
import { Link } from "react-router-dom";

const Menu = () => {
  const { menu } = useContext(menuContext);

  return (
    <section id="#menu" className="py-24">
      <div className="container mx-auto">
        <div className="font-primary text-primary text-center uppercase text-[45px] tracking-[6px]">
          Nuestro Menu
        </div>
        {/* grid */}
        <div className=" grid grid-col-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-4 lg:max-w-none lg:mx-0">
          {menu.map((menu) => {
            return (
                <Food menu={menu} key={menu.id} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
