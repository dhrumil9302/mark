import React from "react";
import laptop1 from "../assets/p1.jpg";
import laptop2 from "../assets/p2.jpg";
import laptop3 from "../assets/p3.jpg";
import laptop4 from "../assets/p4.jpg";
import laptop5 from "../assets/p5.jpg";

const plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={laptop1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={laptop2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={laptop3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={laptop4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={laptop5}
          alt="/"
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias,nam?
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black  hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default plan;
