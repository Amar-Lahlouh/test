import React, { useState } from "react";
import logo from "../assets/logo2.jpg";
import links from "../Data/NavBarLinks";
import { Link } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex relative align-middle justify-between shadow-lg px-2">
      <div className="w-[80px]">
        <img src={logo} alt="" />
      </div>
      <div className=" hidden md:flex gap-4  pt-3 text-2xl">
        {links.map((element) =>
          element.link.includes(`#`) ? (
            <a href={element.link}>{element.name}</a>
          ) : (
            <Link to={element.link}>{element.name}</Link>
          )
        )}
      </div>
      <div className="my-auto md:hidden block text-2xl">
        {isOpen ? (
          <FaXmark onClick={() => setisOpen(!isOpen)} />
        ) : (
          <FaBars onClick={() => setisOpen(!isOpen)} />
        )}
      </div>
      {isOpen && (
        <div className=" md:hidden flex flex-col p-3 absolute top-[60px] left-0 w-full bg-gray-100 gap-6  pt-3 text-2xl">
          {links.map((element) =>
            element.link.includes(`#`) ? (
              <a href={element.link} onClick={() => setisOpen(!isOpen)}>
                {element.name}
              </a>
            ) : (
              <Link to={element.link} onClick={() => setisOpen(!isOpen)}>
                {element.name}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
