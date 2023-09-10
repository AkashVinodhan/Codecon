import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import Logo from "../assets/aklogo.png";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setdarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-4 bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary">
      <div className="font-bold text-accent">
        <img src={Logo} alt="AK" style={{ width: "50px", color: "#ac9ced" }} />
      </div>
      <div className="hidden md:flex">
        <ul className="flex items-center font-bold">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li onClick={() => setdarkMode((prev) => !prev)}>
            {darkMode ? <BsSun /> : <BsMoonStars />}
          </li>
        </ul>
      </div>

      {/* Mobile hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!openMenu ? <GiHamburgerMenu /> : <FaTimes />}
      </div>
      <ul
        className={
          openMenu
            ? "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-primaryLight text-secondaryLight dark:bg-primary dark:text-secondary"
            : "hidden"
        }
      >
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl">
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li onClick={() => setdarkMode((prev) => !prev)}>
          {darkMode ? <BsSun /> : <BsMoonStars />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
