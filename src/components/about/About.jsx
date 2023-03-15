import React from "react";
import { about } from "../../Data";

const About = () => {
  const { img, title, desc } = about;
  return (
    <section id="about">
      <div className="wrapper mt-20">
        <div className="grid md:grid-cols-2 gap-5 place-items-center">
          <div className="border-4 rounded-md overflow-hidden group border-solid border-Teal">
            <img
              className="p-4 group-hover:scale-110 transition-all duration-500"
              src={img}
              alt="about-img"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-4xl md:max-w-sm leading-loose text-Teal font-semibold mb-3">
              {title}
            </h1>
            <p className="text-sm md:text-base">{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
