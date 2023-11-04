import React, { useContext } from 'react'

// Context
import {menuContext} from '../context/MenuContext'

// Components
import Food from "./Food.jsx"

const Menu = () => {
  const { menu } = useContext(menuContext)
  console.log("MENU", menu);

  return (
    <section id="#menu" className="py-24">
      <div className="container mx-auto">
      <div className="font-primary text-primary text-center uppercase text-[45px] tracking-[6px]">
        Nuestro Menu
      </div>
      {/* grid */}
      <div className="grid">
        {menu.map((menu) => {
          return <Food menu={menu} key={menu.id}/>
        })}
      </div>
      </div>
    </section>
  )
}

export default Menu