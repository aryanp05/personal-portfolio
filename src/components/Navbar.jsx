import logo from "../assets/signature.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center cursor-pointer">
            <img className="mx-2 w-20" src={logo} alt="logo" />        
        </div>
        <div className="m-8 flex items-center justify-center gap-6 text-3xl duration-500">
          <a href="https://www.linkedin.com/in/aryanpatel05/">
            <FaLinkedin className="hover:text-yellow-400 hover:scale-110"/>  
          </a> 
          <a href="https://github.com/aryanp05">
            <FaGithub className="hover:text-yellow-400 hover:scale-110"/>
          </a> 
        </div>
    </nav>
  )
}

export default Navbar