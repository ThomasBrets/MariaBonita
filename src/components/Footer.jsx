import React from "react";

// Logo
import Logo from "../assets/img/logo.png";

// Bitech
import Bitech from "../assets/bitech/bitech.jpg";

// Link
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 mt-6">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="" className="rounded-full w-[125px] h-[125px]" />
        </a>
        <div className="text-white">
          Copyright &copy; 2023 Bitech. All rights reserved.
        </div>
        <Link to="https://www.instagram.com/bitech01/" target="_blank">
          <img
            src={Bitech}
            alt=""
            className="w-[125px] h-[125px] rounded-full"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
