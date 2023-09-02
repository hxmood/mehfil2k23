import React from "react";
import "@/styles/global.css"
const page = () => {
  return (
    <>
    <iframe src="https://www.youtube.com/embed/JmLX0qARq5g?si=96Nds2Nv69El8ATX"autoplay className="rounded-lg shadow-md" width={450} height={300}>
      
    </iframe>
    <section className="w-full flex justify-center items-center">

      <div className="mt-10 flex flex-1 flex-col gap-5">
        <h1 className="text-center font-bold text-4xl text-blue-800">Team status</h1>
        <div className="w-full bg-white max-sm:w-full p-4 mt-6 flex flex-col gap-2 items-center justify-center rounded-lg drop-shadow-md">
          <h1 className="text-3xl font-bold">150</h1>
          <p className="font-medium text-base ">Muhammad</p>
        </div>
        <div className="w-full bg-white max-sm:w-full p-4 flex flex-col gap-2 items-center justify-center rounded-lg drop-shadow-md">
          <h1 className="text-3xl font-bold">200</h1>
          <p className="font-medium  text-base">Hameed</p>
        </div>
        <div className="w-full bg-white max-sm:w-full p-4 flex flex-col gap-2 items-center justify-center rounded-lg drop-shadow-md">
          <h1 className="text-3xl font-bold text-gra">250</h1>
          <p className="font-medium  text-base">hamoood</p>
        </div>
      </div>
    </section></>
  );
};

export default page;
