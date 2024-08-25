import React from "react";
import logo from "../assets/signature.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Endbar = () => {
  return (
    <nav
      id="navBar"
      className="mb-20 flex justify-center items-center  transition-colors duration-500"
    >
      <AnchorLink className="anchor-link" offset={50} href="#home">
        <div className="flex flex-shrink-0 mr-29 item-center cursor-pointer">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
      </AnchorLink>
      <div className="m-8 flex items-center justify-center gap-6 text-3xl duration-500">
        <a href="https://www.linkedin.com/in/aryanpatel05/">
          <FaLinkedin className="hover:text-yellow-400 hover:scale-110" />
        </a>
        <a href="https://github.com/aryanp05">
          <FaGithub className="hover:text-yellow-400 hover:scale-110" />
        </a>
      </div>
    </nav>
  );
};

export default Endbar;
