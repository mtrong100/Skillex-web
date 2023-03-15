import React from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="transition-all duration-200 hover:scale-105 lg:hover:scale-110 flex flex-col btn gap-5 py-10 justify-center items-center shadow-md bg-white rounded-md"
    >
      <span className="text-4xl text-Teal">{icon}</span>
      <h1 className="font-semibold text-lg">{category}</h1>
      <p className="text-Teal mt-5">View More</p>
    </motion.div>
  );
};

export default Categories;
