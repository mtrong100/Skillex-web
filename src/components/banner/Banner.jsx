import React from "react";
import { banner } from "../../Data";
import { logos } from "../../Data";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const { smallText, title, subTitle, btn1, btn2, img } = banner;

  /* framer-motion */

  return (
    <section id="home">
      <div className="wrapper pt-[120px]">
        <div className="grid md:grid-cols-2 gap-3 place-items-center">
          {/* content */}
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-Teal text-sm font-semibold">{smallText}</span>

            {/* type animation */}
            <TypeAnimation
              sequence={[`${title}`, 1000, ""]}
              speed={50}
              className="text-3xl lg:text-5xl font-bold w-full min-h-[80px] md:max-w-[280px] md:min-h-[120px] lg:min-h-[180px] lg:max-w-sm text-Teal"
              wrapper="h1"
              style={{
                lineHeight: 1.25,
              }}
              repeat={Infinity}
            />

            <p className="text-sm md:text-base">{subTitle}</p>
            <div className="flex items-center gap-3">
              <button className="buttons btn btnStyle bg-Teal text-white">
                {btn1}
              </button>
              <button className="buttons btn-shinny z-[1] btnStyle">
                {btn2}
              </button>
            </div>
          </div>

          {/* banner image */}
          <div>
            <img
              className="w-full h-full object-cover"
              src={img}
              alt="banner-img"
            />
          </div>
        </div>

        {/* brand */}
        <div className="mt-20 text-center">
          <h2 className="font-medium md:text-xl">
            We collaborate with{" "}
            <span className="text-Teal">
              100+ leading university and companies
            </span>
          </h2>
          <div className="grid mt-5 grid-cols-3 lg:grid-cols-6 gap-5 place-items-center">
            {logos.map((item, id) => (
              <div key={id}>
                <img src={item} alt="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
