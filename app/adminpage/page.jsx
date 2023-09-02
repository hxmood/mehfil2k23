"use client";

import React, { useState, useEffect } from "react";

const page = () => {
  // const [dropdown, setDropdown] = useState(false)
  const [addItems, setAddItems] = useState([]);
  const [anotherFirst, setAnotherFirst] = useState([]);
  const [anotherSecond, setAnotherSecond] = useState([]);
  const [anotherThird, setAnotherThird] = useState([]);
  const handleAddItem = (e) => {
    e.preventDefault();
    setAddItems([...addItems, {}]);
  };

  const handleAnotherFirst = (e) => {
    e.preventDefault();
    setAnotherFirst([...anotherFirst, {}]);
  };

  const handleAnotherSecond = () => {
    setAnotherSecond([...anotherSecond, {}])
  }

  const handleAnotherThird = () => {
    setAnotherThird([...anotherThird, {}])

  }

  const deleteItem = () => {};

  return (
    <main className="flex w-full p-5 shadow-xl bg-gray-200 relative">
      <div className=" flex flex-1 mt-6 p-6 relative">
        <form className="flex flex-1 flex-col space-y-2">
          <div className="flex gap-3 items-center mb-6">
            <div className="flex-1 flex gap-3 items-center">
              <label>result:</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex-1 flex justify-end items-center gap-3">
              <label htmlFor="">Category:</label>
              <select
                name=""
                id=""
                className="p-2 border border-gray-400 rounded"
              >
                <option value="">B zone</option>
                <option value="">C zone</option>
                <option value="">Y zone</option>
                <option value="">H zone</option>
                <option value="">General</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5 ">
            <h2 className="col-span-5 font-semibold text-lg">First:</h2>
            <div className="col-span-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                name=""
                id=""
                className="w-full p-2 rounded border border-gray-300"
              >
                <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Grade</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter mark"
              />
              <h1
                className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                onClick={handleAnotherFirst}
              >
                +
              </h1>
            </div>
          </div>

          {anotherFirst.map(() => (
            <div className="grid grid-cols-6 gap-5 ">
              <h2 className="col-span-5 font-semibold text-lg">First:</h2>
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter name"
                />
              </div>

              <div className="col-span-2">
                <select
                  name=""
                  id=""
                  className="w-full p-2 rounded border border-gray-300"
                >
                  <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
                </select>
              </div>
              <div className="col-span-1 relative">
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Grade</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                  <option value="">D</option>
                </select>
              </div>
              <div className="col-span-1 flex items-center">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter mark"
                />
                <h1
                  className="ml-4 text-red-700 cursor-pointer font-extrabold text-lg"
                  onClick={deleteItem}
                >
                  x
                </h1>
              </div>
            </div>
          ))}

          {/* ------------------------------ */}

          <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Second:</h2>
            <div className="col-span-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                name=""
                id=""
                className="w-full p-2 rounded border border-gray-300"
              >
                <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Grade</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />

              <h1
                className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                onClick={handleAnotherSecond}
              >
                +
              </h1>
            </div>
          </div>

          {anotherSecond.map(() => (
            <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Second:</h2>
            <div className="col-span-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                name=""
                id=""
                className="w-full p-2 rounded border border-gray-300"
              >
                <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Grade</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />

              <h1
                className="ml-4 cursor-pointer text-red-700 font-extrabold text-lg"
                onClick={deleteItem}
              >
                x
              </h1>
            </div>
          </div>
          ))}

          <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
            <div className="col-span-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                name=""
                id=""
                className="w-full p-2 rounded border border-gray-300"
              >
                <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Grade</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
              <h1
                className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                onClick={handleAnotherThird}
              >
                +
              </h1>
            </div>
          </div>

          {anotherThird.map(() => (
            <div className="grid grid-cols-6 pt-3 gap-5">
            <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
            <div className="col-span-2">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>

            <div className="col-span-2">
              <select
                name=""
                id=""
                className="w-full p-2 rounded border border-gray-300"
              >
                <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
              </select>
            </div>
            <div className="col-span-1 relative">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Grade</option>
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
                <option value="">D</option>
              </select>
            </div>
            <div className="col-span-1 flex items-center">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
              <h1
                className="ml-4 cursor-pointer text-red-700 font-extrabold text-lg"
                onClick={deleteItem}
              >
                x
              </h1>
            </div>
          </div>
          ))}

          {/* ---------------------------- */}


          {addItems.map(() => (
            <>
              <h1 className="pt-3 font-semibold ">Another grades:</h1>
              <div className="grid grid-cols-6 pt-6 gap-5">
                <div className="col-span-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter name"
                  />
                </div>

                <div className="col-span-2">
                  <select
                    name=""
                    id=""
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="">Traditional Trackers</option>
                <option value="">Legacy Legends</option>
                <option value="">Historic Heros</option>
                  </select>
                </div>
                <div className="col-span-1 relative">
                  <select className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Grade</option>
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter name"
                  />
                </div>
              </div>
            </>
          ))}

          <div className="">
            <button
              className="px-4 py-1 bg-green-900 text-white"
              onClick={handleAddItem}
            >
              <span className="font-bold text-lg">+</span>Add item
            </button>
          </div>
          <div className="flex justify-end pt-6">
            <button className="px-4 py-3  rounded bg-[#2372fa] font-semibold text-lg text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <form></form>
    </main>
  );
};

export default page;
