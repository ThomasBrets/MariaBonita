import React from "react";

// Link
import { Link } from "react-router-dom";

// Icons
import { BiDollar } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

const Food = ({ menu }) => {
  const { id, name, description, img, ingredients, category, price, persons } =
    menu;

  return (
    <div className="bg-white shadow-2xl min-h-[350px] p-2 group rounded-lg">
      {/* img */}
      <div className=" h-56 overflow-hidden rounded-lg">
        <img
          src={img}
          className="group-hover:scale-110 transition-all duration-300 h-full object-cover"
          alt=""
        />
      </div>

      {/* Details */}
      <div className="bg-primary shadow-lg max-w-[300px] mx-[15px] h-[60px] -translate-y-5 uppercase flex justify-center items-center font-primary tracking-[1px] font-semibold rounded-lg">
        <div className="flex justify-between w-[80%] text-white">
          {/* Price */}
          <div className="flex items-center text-[22px] gap-x-1">
            <div>
              <BiDollar className="" />
            </div>
            {price}
          </div>
          {/* People */}
          <div className="flex items-center text-[22px] gap-x-1">
            <div>
              <BsPeople />
            </div>
            {persons}
          </div>
        </div>
      </div>

      {/* Name & description */}
      <div className="text-center">
        <div className="h3 uppercase">{name}</div>
        <Link to={`/menu/${menu.id}`}>
          <div className="h-[46px] hover:text-[20px]">
            <button className="my-2 btn-secondary font-primary transition-all p-2 w-[160px] hover:shadow-lg rounded-lg uppercase font-semibold text-white">
              Descripción
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Food;
