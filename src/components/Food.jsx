import React from "react";

// Link
import { Link } from "react-router-dom";

const Food = ({ menu }) => {
  const { id, name, description, img, ingredients, category } = menu;

  return (
  <div className="bg-white shadow-2xl min-h-[350px] group">
    <h1>Food</h1>
    {/* img */}
    <div className="overflow-hidden">
    <img src={img} className="group-hover:scale-110 transition-all duration-300 w-full" alt="" />
    </div>
  </div>)
};

export default Food;
