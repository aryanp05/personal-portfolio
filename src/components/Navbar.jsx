import { useEffect, useState } from "react";
import logo from "../assets/signature.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground("bg-transparent");
      } else {
        setNavBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navBar"
      className={`flex items-center justify-between  transition-colors duration-500 ${navBackground}`}
    >
      <AnchorLink className="anchor-link" offset={50} href="#home">
        <div className="flex flex-shrink-0 mr-29 item-center cursor-pointer">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
      </AnchorLink>
      {/* <div className="flex flex-row gap-2 lg:gap-6 lg:mx-80 text-xs lg:text-xl tracking-tught lg:text-xl">
        <AnchorLink className="anchor-link" offset={50} href="#hero">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            About
          </h3>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#projects">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            Projects
          </h3>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#experience">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            Experience
          </h3>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#education">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            Education
          </h3>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#tech">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            Technologies
          </h3>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#credentials">
          <h3 className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:tracking-tight hover:text-transparent hover:text-2xl duration-500">
            Credentials
          </h3>
        </AnchorLink>
        
        
      </div> */}
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

export default Navbar;
