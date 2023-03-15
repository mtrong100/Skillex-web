import React from "react";

const Categories = ({ icon, category }) => {
  return (
    <div className="transition-all duration-200 hover:scale-105 lg:hover:scale-110 flex flex-col btn gap-5 py-10 justify-center items-center shadow-md bg-white rounded-md">
      <span className="text-4xl text-Teal">{icon}</span>
      <h1 className="font-semibold text-lg">{category}</h1>
      <p className="text-Teal mt-5">View More</p>
    </div>
  );
};

export default Categories;
