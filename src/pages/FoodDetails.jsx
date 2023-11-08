import React, { useContext } from "react";

// useParams
import { useParams } from "react-router-dom";

// Context
import { menuContext } from "../context/MenuContext";

const FoodDetails = () => {
  const { menu } = useContext(menuContext);

  const {id} = useParams();

  const food = menu.find((food) => {
    return food.id === parseInt(id)
  })

  // console.log("FOOD", food);

  const {name} = food;

  return (
     <section>
      <div className="bg-restaurant bg-contain bg-center h-[600px] relative flex justify-center items-center">
        <div className="bg-black/60 w-full h-full absolute"></div>
        <h1 className="text-white text-center uppercase font-primary text-6xl z-20">{name}</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          
          {/* left */}
          <div className="w-full h-full lg:w-[60%] text-justify px-6 bg-blue-700">LEFT</div>
          
          {/* rigth */}
          <div className="w-full h-full lg:w-[40%] text-justify bg-yellow-300">RIGTH</div>
        </div>
      </div>
      </section>
    )
};

export default FoodDetails;
