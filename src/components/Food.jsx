import React from "react";

// Link
import { Link } from "react-router-dom";

const Food = ({ menu }) => {
  const { id, name, description, img, ingredients, category } = menu;

  return (
    <Link to={`/menu/${menu.id}`}>
      <div className="bg-white shadow-2xl min-h-[350px] group">
        {/* img */}
        <div className=" h-56 overflow-hidden">
          <img
            src={img}
            className="group-hover:scale-110 transition-all duration-300 w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Food;
