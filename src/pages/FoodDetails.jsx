import React, { useContext } from "react";

import "../css/singlePage.css";

// useParams
import { useParams } from "react-router-dom";

// Context
import { menuContext } from "../context/MenuContext";

// Icon
import { TbChefHat } from "react-icons/tb";
import { BiDollar } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";

//Scroll top Component
import ScrollToTop from "../components/ScrollToTop";

const FoodDetails = () => {
  const { menu } = useContext(menuContext);

  const { id } = useParams();

  const food = menu.find((food) => {
    return food.id === parseInt(id);
  });

  // console.log("FOOD", food);

  const { name, description, img, ingredients, price, category, persons } = food;

  return (
    <section>
      <ScrollToTop/>
      <div className="bg-secondary h-[135px] w-full shadow-lg"></div>
      <div className="py-10">
        <div className="container mx-auto border-4 border-primary rounded-lg">
          <div className="flex flex-col lg:flex-row h-full pt-8 gap-x-4 items-center">
            {/* left */}
            <div className="w-full h-full lg:w-[60%] flex-1 text-justify px-6 rounded-lg">
              <h2 className="h1 text-center">{name}</h2>
              <p className="mb-8 font-primary text-[22px]"></p>
              <img className="mb-8 rounded-lg" src={img} alt="" />
            </div>

            {/* rigth */}
            <div
              className={`${
                ingredients.length < 1
                  ? "hidden"
                  : "w-full h-full lg:w-[40%] text-justify p-4 rounded-lg flex-1"
              }`}
            >
              <div className="pt-8">
                <h3 className="h3">Ingredientes</h3>
                <p className="font-primary mb-12 text-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus soluta est sequi totam.
                </p>
                <div className="flex flex-col">
                  {ingredients.map((item, index) => {
                    const { name, icon } = item;
                    return (
                      <div
                        key={index}
                        className="flex gap-4 font-primary text-[25px] justify-start items-center"
                      >
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
          {/* price, persons, category */}
          <div className="bg-primary uppercase font-primary my-4 mx-6 p-6 text-white text-[30px] flex justify-between items-center rounded-lg">
            <div className="flex gap-x-2 items-center">
              <div>
                <BiDollar />
              </div>
              {price}
            </div>
            <div className="flex gap-x-2 items-center">
            <div>
                <BiFoodMenu />
              </div>
              {category}
            </div>
            <div className="flex gap-x-2 items-center">
            <div>
                <BsPeople />
              </div>
              {persons}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
