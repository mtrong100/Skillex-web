import React from "react";
import { footer } from "../../Data";

const Footer = () => {
  return (
    <section id="footer" className="bg-Teal pt-10 pb-2 mt-20">
      <div className="wrapper">
        {/* footer top */}
        <div className="flex gap-10 justify-center md:items-start items-center flex-col md:flex-row md:justify-between ">
          <div className="text-white">
            <a className="text-5xl font-bold" href="#home">
              SKILLEX
            </a>
            <p className="mt-3 text-sm text-center">
              'Everything has beauty,
              <br /> but not everyone can see.'
            </p>
          </div>
          {footer.map((item, id) => {
            const { title, links } = item;
            return (
              <div
                className="text-white flex flex-col items-center md:items-start gap-3"
                key={id}
              >
                <h2 className="uppercase font-semibold text-lg md:mb-2">
                  {title}
                </h2>
                {links.map((item, index) => {
                  return (
                    <ul key={index}>
                      <li>
                        <a
                          className="text-sm hover:opacity-80 capitalize md:text-base font-medium"
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* footer bottoms */}
        <p className="text-sm md:text-base text-center font-medium mt-14 text-white">
          @Copyright 2023. All Right Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
