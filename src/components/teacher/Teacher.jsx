import React from "react";
import { teacher } from "../../Data";
import { motion } from "framer-motion";

const Teacher = () => {
  return (
    <section id="teacher">
      <div className="wrapper mt-20">
        {teacher.map((item, id) => {
          const { img, title, desc, btn } = item;
          return (
            <div
              className={`${
                item.id === 2 ? "md:flex-row-reverse" : ""
              } mt-20 flex-col flex md:flex-row md:justify-between gap-10 items-center`}
              key={id}
            >
              {/* image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-1 overflow-hidden rounded-md group"
              >
                <img
                  className="img-cover group-hover:scale-110 transition-all duration-500"
                  src={img}
                  alt="teacher-img"
                />
              </motion.div>

              {/* content */}
              <div className="flex flex-1 flex-col gap-5">
                <h1 className="text-2xl md:text-4xl max-w-md text-Teal font-bold">
                  {title}
                </h1>
                <p className="text-sm md:text-base">{desc}</p>
                <button className="btn w-fit rounded-md text-white bg-Teal btnStyle">
                  {btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Teacher;
