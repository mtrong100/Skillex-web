import React from "react";

const Contact = () => {
  return (
    <section className="bg-contact mt-20" id="contact">
      <div className="wrapper absolute py-10 contact-content shadow-md ">
        <h1 className="text-center text-3xl md:text-6xl text-white font-bold">
          Contact us
        </h1>
        <div className="flex flex-col md:flex-row px-5 items-center justify-center gap-3 mt-10 max-w-xl w-full mx-auto">
          <input
            className="bg-white p-3 rounded-md w-full shadow-lg"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="md:w-fit rounded-md font-semibold text-white bg-Teal py-3 px-10">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
