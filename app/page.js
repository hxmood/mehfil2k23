import React from "react";

const page = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="mt-16 flex flex-1 flex-col gap-5">
        <div className="w-full bg-white max-sm:w-full p-4 flex flex-col gap-2 items-center justify-center rounded-lg drop-shadow-md">
          <h1 className="text-3xl font-bold">150</h1>
          <p className="font-medium text-base">Muhammad</p>
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
    </section>
  );
};

export default page;
