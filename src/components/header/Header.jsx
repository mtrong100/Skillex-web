import React, { useState } from "react";
import { navLinks } from "../../Data";
import Nav from "./Nav";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import NavMobile from "./NavMobile";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 z-20 left-0 right-0 py-5 bg-slate-200">
      <div className="wrapper">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a className="text-Teal text-2xl font-bold" href="#home">
            SKILLEX
          </a>

          {/* menu */}
          <ul className="md:flex items-center hidden md:gap-5 lg:gap-8">
            {navLinks.map((item, id) => {
              return <Nav key={id} {...item}></Nav>;
            })}
          </ul>

          {/* button */}
          <div className="flex items-center gap-5">
            <button className="btn-shinny buttons px-4 md:px-5 py-2">
              Sign Up
            </button>
            <HiMenuAlt3
              onClick={() => setToggle(!toggle)}
              className="text-3xl font-bold md:hidden"
            ></HiMenuAlt3>
          </div>

          {/* NavMobile */}
          <ul
            className={`${
              toggle ? "translate-x-0" : "translate-x-full"
            } md:hidden fixed top-0 right-0 bottom-0 pt-5 px-2 left-0 bg-Teal flex flex-col z-20 transition-all duration-500`}
          >
            {/* logo */}
            <div className="flex items-center justify-between px-5 mb-3 pb-5 border-b-2 border-solid border-white">
              <a className="text-white text-2xl font-bold" href="#home">
                SKILLEX
              </a>
              <HiX
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl"
              ></HiX>
            </div>
            {navLinks.map((item, id) => {
              return (
                <NavMobile
                  key={id}
                  {...item}
                  toggle={toggle}
                  setToggle={setToggle}
                ></NavMobile>
              );
            })}
            <button
              className="btnStyle border-2 border-solid font-medium border-white rounded-full text-white inline-flex justify-center  text-lg

            "
            >
              Sign In
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
