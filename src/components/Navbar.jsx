import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/AK(1).png";
import style from "../main.module.css";

const Navbar = () => {
  const styles = {
    logo: {
      width: "100px",
    },
    menu: {
      display: "flex",
      color: "white",
    },
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] m-0 p-0 text-white">
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo Image" style={styles.logo} />
      </div>

      {/* Menu*/}

      <div className="hidden md:flex">
        <ul className={style.menu}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="md:hidden z-10" onClick={handleClick}>
        <FaBars color="white" size="25px" />
      </div>

      <ul
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[165px] h-[60px] flex justify-between ml-[-100px] hover:ml-[00px] duration-300 bg-[#0a66c2]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300 text-[20px]"
            >
              LinkedIn <FaLinkedin size={"35px"} />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between ml-[-100px] hover:ml-[00px] duration-300 bg-[#1f883d]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300 text-[20px]"
            >
              Github <FaGithub size={"35px"} />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between ml-[-100px] hover:ml-[00px] duration-300 bg-[#ea4335]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300 text-[20px]"
            >
              EMail <HiOutlineMail size={"35px"} />
            </a>
          </li>
          <li className="w-[165px] h-[60px] flex justify-between ml-[-100px] hover:ml-[00px] duration-300 bg-[#0a66c2]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300 text-[20px]"
            >
              Resume <BsFillPersonLinesFill size={"35px"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
