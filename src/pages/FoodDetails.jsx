import React, { useContext } from "react";

// useParams
import { useParams } from "react-router-dom";

// Context
import { menuContext } from "../context/MenuContext";

// Icon
import { TbChefHat } from "react-icons/tb";

const FoodDetails = () => {
  const { menu } = useContext(menuContext);

  const { id } = useParams();

  const food = menu.find((food) => {
    return food.id === parseInt(id);
  });

  // console.log("FOOD", food);

  const { name, description, img, ingredients } = food;

  return (
    <section>
      <div className="bg-restaurant bg-contain bg-center h-[600px] relative flex justify-center items-center gap-x-2">
        <div className="bg-black/60 w-full h-full absolute"></div>
        <h1 className="text-white text-center uppercase font-primary text-8xl z-20">
          {name}
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24 gap-x-4 items-center">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] flex-1 text-justify px-6 shadow-lg bg-primary rounded-lg">
            <h2 className="h2">{name}</h2>
            <p className="mb-8 font-primary text-[22px]">{description}</p>
            <img className="mb-8 rounded-lg" src={img} alt="" />
          </div>

          {/* rigth */}
          <div className={`${ingredients.length < 1 ? "hidden" : "w-full h-full lg:w-[40%] text-justify bg-secondary p-4 rounded-lg flex-1"}`}>
            <div>
              <h3 className="h3">Ingredientes</h3>
              <p className="font-primary mb-12 text-[25px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus soluta est sequi totam.
              </p>
              <div className="flex flex-col">
                {ingredients.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div key={index} className="flex gap-4 font-primary text-[25px] justify-start items-center">
                      <div>
                        <TbChefHat />
                      </div>
                      <div>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
