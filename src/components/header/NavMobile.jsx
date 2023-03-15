import React, { useState } from "react";

const NavMobile = ({ link, href, toggle, setToggle }) => {
  return (
    <li className="p-4 mx-auto">
      <a
        onClick={() => setToggle(!toggle)}
        className="link text-xl text-white font-medium"
        href={href}
      >
        {link}
      </a>
    </li>
  );
};

export default NavMobile;
