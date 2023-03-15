import React from "react";
import { question } from "../../Data";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <section id="Faq">
      <div className="wrapper mt-20">
        <h1 className="text-center text-3xl md:text-4xl text-Teal font-bold">
          Frequently Asked Quesions
        </h1>
        {/* Accordion */}
        <div className="mt-10 max-w-2xl w-full mx-auto flex flex-col gap-4">
          {question.map((item, id) => {
            const { title, answer } = item;
            return (
              <div className="bg-Teal text-white rounded-md p-5" key={id}>
                <Accordion title={title} answer={answer}></Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
