import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ title, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-sm font-semibold md:text-lg">{title}</h1>
        <FiChevronDown
          className={`text-2xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></FiChevronDown>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm ">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
