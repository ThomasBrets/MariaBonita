import React, { useState, useEffect } from "react";

// Logo
import logo from "../assets/img/logo.png";

// Util
import { scrollToSection } from "../utils/ScrollToSection";


const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-primary py-2 shadow-lg" : "bg-transparent py-5"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto  gap-y-6 flex flex-col items-center lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          <img src={logo} alt="logo" className={`hidden lg:block w-[105px] h-[105px]`} />
        </a>
        <nav className={`text-white" font-primary font-bold flex gap-x-4 uppercase text-[21px] tracking-3px items-center lg:gap-x-8`}>
          <div href="" onClick={() => scrollToSection('#home')} className={`${header ? "text-white hover:text-secondary-hover" : "text-white hover:text-primary-hover"}  transition cursor-pointer text-shadow`} >Home</div>
          <div href="" onClick={() => scrollToSection('#history')} className={`${header ? "text-white hover:text-secondary-hover" : "text-white hover:text-primary-hover"}  transition cursor-pointer text-shadow`} >Nosotros</div>
          <div href="" onClick={() => scrollToSection('#menu')} className={`${header ? "text-white hover:text-secondary-hover" : "text-white hover:text-primary-hover"}  transition cursor-pointer text-shadow`} >Menu</div>
          <a href="/events" className={`${header ? "text-white hover:text-secondary-hover" : "text-white hover:text-primary-hover"}  transition text-shadow`}>Eventos</a>
          <div href="" onClick={() => scrollToSection('#contact')} className={`${header ? "text-white hover:text-secondary-hover" : "text-white hover:text-primary-hover"}  transition cursor-pointer text-shadow`}>Reserva</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
