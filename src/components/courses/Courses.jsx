import React from "react";
import { categories } from "../../Data";
import { courses } from "../../Data";
import Categories from "./Categories";
import CoursesSwiper from "./CoursesSwiper";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="courses">
      <div className="wrapper my-20">
        {/* heading */}
        <div className="max-w-3xl text-center mx-auto w-full">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-Teal mb-5">
            Our Top Categories
          </h1>
          <p className="text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            accusamus repellat quibusdam velit impedit, assumenda quaerat
            perspiciatis vero recusandae at harum quo saepe nam esse, inventore
            sunt magni ex eaque!
          </p>
        </div>

        {/* categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 p-4"
        >
          {categories.map((item, id) => {
            return <Categories key={id} {...item}></Categories>;
          })}
        </motion.div>

        {/* courses */}
        <div className="mt-20">
          <h1 className="font-semibold text-2xl mb-10">
            Most Popuplar Courses
          </h1>
          <CoursesSwiper courses={courses}></CoursesSwiper>
        </div>
      </div>
    </section>
  );
};

export default Courses;
