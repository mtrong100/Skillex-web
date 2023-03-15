import React from "react";

const Nav = ({ href, link }) => {
  return (
    <li>
      <a className="link font-medium hover:text-Teal" href={href}>
        {link}
      </a>
    </li>
  );
};

export default Nav;
