"use client";
import React, { useState } from "react";
import { names } from "@/names/page";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const page = () => {
  const allNames = [].concat(...Object.values(names));

  const [selectedForm, setSelectedForm] = useState("individual");

  const [resultItem, setResultItem] = useState({
    item: "",
    category: "",
  });
  const categorized = names[resultItem.category] || [];

  const [firstResult, setFirstResult] = useState({
    name: "",
    team: "",
    grade: "",
    marks: "",
  });
  console.log(firstResult.name);

  const [secondResult, setSecondResult] = useState({
    secName: "",
    secTeam: "",
    secGrade: "",
    secMarks: "",
  });

  const [thirdResult, setThirdResult] = useState({
    thrName: "",
    thrTeam: "",
    thrGrade: "",
    thrMarks: "",
  });

  const [anotherFirst, setAnotherFirst] = useState([]);
  const [anotherFirstResult, setAnotherFirstResult] = useState({
    afName: "",
    afTeam: "",
    afGrade: "",
    afMarks: "",
  });

  const [anotherSecond, setAnotherSecond] = useState([]);
  const [anotherSecondResult, setAnotherSecondResult] = useState({
    asName: "",
    asTeam: "",
    asGrade: "",
    asMarks: "",
  });

  const [anotherThird, setAnotherThird] = useState([]);
  const [anotherThirdResult, setAnotherThirdResult] = useState({
    atName: "",
    atTeam: "",
    atGrade: "",
    atMarks: "",
  });

  const [addItems, setAddItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    setAddItems([
      ...addItems,
      { addName: "", addTeam: "", addGrade: "", addMarks: "" },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFormData = [...addItems];
    updatedFormData[index][name] = value;
    setAddItems(updatedFormData);
  };

  const handleAnotherFirst = (e) => {
    e.preventDefault();
    setAnotherFirst([...anotherFirst, {}]);
  };
  const handleAnotherSecond = () => {
    setAnotherSecond([...anotherSecond, {}]);
  };
  const handleAnotherThird = () => {
    setAnotherThird([...anotherThird, {}]);
  };

  const deleteItem = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/resUpload/new", {
        method: "POST",
        body: JSON.stringify({
          res: resultItem.item,
          category: resultItem.category,
          name: firstResult.name,
          team: firstResult.team,
          grade: firstResult.grade,
          marks: firstResult.marks,
          secName: secondResult.secName,
          secTeam: secondResult.secTeam,
          secGrade: secondResult.secGrade,
          secMarks: secondResult.secMarks,
          thrName: thirdResult.thrName,
          thrTeam: thirdResult.thrTeam,
          thrGrade: thirdResult.thrGrade,
          thrMarks: thirdResult.thrMarks,
          afName: anotherFirstResult.afName,
          afTeam: anotherFirstResult.afTeam,
          afGrade: anotherFirstResult.afGrade,
          afMarks: anotherFirstResult.afMarks,
          asName: anotherSecondResult.asName,
          asTeam: anotherSecondResult.asTeam,
          asGrade: anotherSecondResult.asGrade,
          asMarks: anotherSecondResult.asMarks,
          atName: anotherThirdResult.atName,
          atTeam: anotherThirdResult.atTeam,
          atGrade: anotherThirdResult.atGrade,
          atMarks: anotherThirdResult.atMarks,
          anotherGrades: addItems,
        }),
      });

      alert("results posted successfully");
      setResultItem({
        item: "",
        category: "",
      });
      setFirstResult({
        name: "",
        team: "",
        grade: "",
        marks: "",
      });
      setSecondResult({
        secName: "",
        secTeam: "",
        secGrade: "",
        secMarks: "",
      });
      setThirdResult({
        thrName: "",
        thrTeam: "",
        thrGrade: "",
        thrMarks: "",
      });

      setAnotherFirstResult({
        afName: "",
        afTeam: "",
        afGrade: "",
        afMarks: "",
      });

      setAnotherSecondResult({
        asName: "",
        asTeam: "",
        asGrade: "",
        asMarks: "",
      });

      setAnotherThirdResult({
        atName: "",
        atTeam: "",
        atGrade: "",
        atMarks: "",
      });

      setAddItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedForm("individual")}
          className={`p-3 ${
            selectedForm == "individual" ? "bg-blue-600 text-white" : "bg-none"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setSelectedForm("general")}
          className={`p-3 ${
            selectedForm == "general" ? "bg-blue-600 text-white" : "bg-none"
          }`}
        >
          General
        </button>
      </div>
      <main className="flex flex-col w-full p-5 shadow-xl bg-gray-200 relative mt-4">
        {selectedForm == "individual" && (
          <>
            <h1 className="font-semibold text-red-600 text-center text-xl">
              Individual results
            </h1>
            <div className=" flex flex-1 mt-4 p-6 relative">
              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col"
              >
                <div className="flex gap-3 items-center mb-6">
                  <div className="flex-1 flex gap-3 items-center">
                    <label>result:</label>
                    <input
                      required
                      value={resultItem.item}
                      onChange={(e) =>
                        setResultItem({ ...resultItem, item: e.target.value })
                      }
                      type="text"
                      className="p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex-1 flex justify-end items-center gap-3">
                    <label>Category:</label>
                    <select
                      required
                      value={resultItem.category}
                      onChange={(e) =>
                        setResultItem({
                          ...resultItem,
                          category: e.target.value,
                        })
                      }
                      className="p-2 border border-gray-400 rounded"
                    >
                      <option>Zone</option>
                      <option value="B zone">B zone</option>
                      <option value="C zone">C zone</option>
                      <option value="Y zone">Y zone</option>
                      <option value="H zone">H zone</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>

                {/* --------------------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">First:</h2>
                  <div className="col-span-2">
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={firstResult.name}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, name: e.target.value })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={firstResult.team}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, team: e.target.value })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={firstResult.grade}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          grade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={firstResult.marks}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          marks: e.target.value,
                        })
                      }
                      type="number"
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
                {/* ------------------------------------------- */}

                {anotherFirst.map(() => (
                  <div className="grid grid-cols-6 gap-5 ">
                    <h2 className="col-span-5 font-semibold text-lg">
                      Another First:
                    </h2>
                    <div className="col-span-2">
                      <select
                        className="w-full border border-gray-300 p-2 rounded"
                        value={anotherFirstResult.afMarks}
                        onChange={(e) =>
                          setAnotherFirstResult({
                            ...anotherFirst,
                            afName: e.target.value,
                          })
                        }
                      >
                        <option>Select Name</option>
                        {categorized.length !== 0
                          ? categorized.map((item) => (
                              <option value={item}>{item}</option>
                            ))
                          : allNames.map((item) => (
                              <option value={item}>{item}</option>
                            ))}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <select
                        className="w-full p-2 rounded border border-gray-300"
                        value={anotherFirstResult.afTeam}
                        onChange={(e) =>
                          setAnotherFirstResult({
                            ...anotherFirstResult,
                            afTeam: e.target.value,
                          })
                        }
                      >
                        <option>Select Team</option>
                        <option value="Traditional Trackers">
                          Traditional Trackers
                        </option>
                        <option value="Legacy Legends">Legacy Legends</option>
                        <option value="Ancient Alliance">
                          Ancient Alliance
                        </option>
                        <option value="-">-</option>
                      </select>
                    </div>

                    <div className="col-span-1 relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={anotherFirstResult.afGrade}
                        onChange={(e) =>
                          setAnotherFirstResult({
                            ...anotherFirstResult,
                            afGrade: e.target.value,
                          })
                        }
                      >
                        <option>Grade</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="-">-</option>
                      </select>
                    </div>

                    <div className="col-span-1 flex items-center">
                      <input
                        value={anotherFirstResult.afMarks}
                        onChange={(e) =>
                          setAnotherFirstResult({
                            ...anotherFirstResult,
                            afMarks: e.target.value,
                          })
                        }
                        type="number"
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
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={secondResult.secName}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secName: e.target.value,
                        })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={secondResult.secTeam}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={secondResult.secGrade}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={secondResult.secMarks}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />

                    <h1
                      className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                      onClick={handleAnotherSecond}
                    >
                      +
                    </h1>
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}

                {anotherSecond.map(() => (
                  <div className="grid grid-cols-6 pt-3 gap-5">
                    <h2 className="col-span-5 font-semibold text-lg">
                      Another Second:
                    </h2>
                    <div className="col-span-2">
                      <select
                        className="w-full border border-gray-300 p-2 rounded"
                        value={anotherSecondResult.asName}
                        onChange={(e) =>
                          setAnotherSecondResult({
                            ...anotherSecondResult,
                            asName: e.target.value,
                          })
                        }
                      >
                        <option>Select Name</option>
                        {categorized.length !== 0
                          ? categorized.map((item) => (
                              <option value={item}>{item}</option>
                            ))
                          : allNames.map((item) => (
                              <option value={item}>{item}</option>
                            ))}
                      </select>
                    </div>

                    {/* ----------------------------------------------------------- */}

                    <div className="col-span-2">
                      <select
                        className="w-full p-2 rounded border border-gray-300"
                        value={anotherSecondResult.asTeam}
                        onChange={(e) =>
                          setAnotherSecondResult({
                            ...anotherSecondResult,
                            asTeam: e.target.value,
                          })
                        }
                      >
                        <option>Select Team</option>
                        <option value="Traditional Trackers">
                          Traditional Trackers
                        </option>
                        <option value="Legacy Legends">Legacy Legends</option>
                        <option value="Ancient Alliance">
                          Ancient Alliance
                        </option>
                        <option value="-">-</option>
                      </select>
                    </div>
                    <div className="col-span-1 relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={anotherSecondResult.asGrade}
                        onChange={(e) =>
                          setAnotherSecondResult({
                            ...anotherSecondResult,
                            asGrade: e.target.value,
                          })
                        }
                      >
                        <option>Grade</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="-">-</option>
                      </select>
                    </div>
                    <div className="col-span-1 flex items-center">
                      <input
                        value={anotherSecondResult.asMarks}
                        onChange={(e) =>
                          setAnotherSecondResult({
                            ...anotherSecondResult,
                            asMarks: e.target.value,
                          })
                        }
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Enter Marks"
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

                {/* ------------------------------------------- */}

                <div className="grid grid-cols-6 pt-3 gap-5">
                  <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
                  <div className="col-span-2">
                    <select
                      className="w-full border border-gray-300 p-2 rounded"
                      value={thirdResult.thrName}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrName: e.target.value,
                        })
                      }
                    >
                      <option>Select Name</option>
                      {categorized.length !== 0
                        ? categorized.map((item) => (
                            <option value={item}>{item}</option>
                          ))
                        : allNames.map((item) => (
                            <option value={item}>{item}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={thirdResult.thrTeam}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={thirdResult.thrGrade}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={thirdResult.thrMarks}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter Mark"
                    />
                    <h1
                      className="ml-4 cursor-pointer text-green-700 font-extrabold text-lg"
                      onClick={handleAnotherThird}
                    >
                      +
                    </h1>
                  </div>
                </div>

                {/* -------------------------------------------------------------------- */}

                {anotherThird.map(() => (
                  <div className="grid grid-cols-6 pt-3 gap-5">
                    <h2 className="col-span-5 font-semibold text-lg">
                      Another Third:
                    </h2>
                    <div className="col-span-2">
                      <select
                        className="w-full border border-gray-300 p-2 rounded"
                        value={anotherThirdResult.atName}
                        onChange={(e) =>
                          setAnotherThirdResult({
                            ...anotherThirdResult,
                            atName: e.target.value,
                          })
                        }
                      >
                        <option>Select Name</option>
                        {categorized.length !== 0
                          ? categorized.map((item) => (
                              <option value={item}>{item}</option>
                            ))
                          : allNames.map((item) => (
                              <option value={item}>{item}</option>
                            ))}
                      </select>
                    </div>

                    <div className="col-span-2">
                      <select
                        className="w-full p-2 rounded border border-gray-300"
                        value={anotherThirdResult.atTeam}
                        onChange={(e) =>
                          setAnotherThirdResult({
                            ...anotherThirdResult,
                            atTeam: e.target.value,
                          })
                        }
                      >
                        <option>Select Team</option>
                        <option value="Traditional Trackers">
                          Traditional Trackers
                        </option>
                        <option value="Legacy Legends">Legacy Legends</option>
                        <option value="Ancient Alliance">
                          Ancient Alliance
                        </option>
                        <option value="-">-</option>
                      </select>
                    </div>

                    <div className="col-span-1 relative">
                      <select
                        className="w-full p-2 border border-gray-300 rounded"
                        value={anotherThirdResult.atGrade}
                        onChange={(e) =>
                          setAnotherThirdResult({
                            ...anotherThirdResult,
                            atGrade: e.target.value,
                          })
                        }
                      >
                        <option>Grade</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="-">-</option>
                      </select>
                    </div>

                    <div className="col-span-1 flex items-center">
                      <input
                        value={anotherThirdResult.atMarks}
                        onChange={(e) =>
                          setAnotherThirdResult({
                            ...anotherThirdResult,
                            atMarks: e.target.value,
                          })
                        }
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded"
                        placeholder="Enter Marks"
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

                {addItems.map((data, index) => (
                  <>
                    <h1 className="pt-3 font-semibold ">Another grades:</h1>
                    <div className="grid grid-cols-6 pt-6 gap-5">
                      <div className="col-span-2">
                        <select
                          className="w-full border border-gray-300 p-2 rounded"
                          name="addName"
                          value={data.addName}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Name</option>
                          {categorized.length !== 0
                            ? categorized.map((item) => (
                                <option value={item}>{item}</option>
                              ))
                            : allNames.map((item) => (
                                <option value={item}>{item}</option>
                              ))}
                        </select>
                      </div>

                      <div className="col-span-2">
                        <select
                          className="w-full p-2 rounded border border-gray-300"
                          name="addTeam"
                          value={data.addTeam}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Team</option>
                          <option value="Traditional Trackers">
                            Traditional Trackers
                          </option>
                          <option value="Legacy Legends">Legacy Legends</option>
                          <option value="Ancient Alliance">
                            Ancient Alliance
                          </option>
                        </select>
                      </div>
                      <div className="col-span-1 relative">
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          name="addGrade"
                          value={data.addGrade}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Grade</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <input
                          name="addMarks"
                          value={data.addMarks}
                          onChange={(e) => handleChange(index, e)}
                          type="number"
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter Mark"
                        />
                      </div>
                    </div>
                  </>
                ))}

                <div className="">
                  <button
                    type="button"
                    className="px-4 py-1 bg-green-900 text-white"
                    onClick={handleAddItem}
                  >
                    <span className="font-bold text-lg">+</span>Add item
                  </button>
                </div>
                <div className="flex justify-between pt-6">
                  <Link href="/imagesUpload">
                    <button className="bg-red-800 px-4 py-3 text-white font-semibold w-fit">
                      Upload Images
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-3  rounded bg-[#2372fa] font-semibold text-lg text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {selectedForm == "general" && (
          <>
            <h1 className="text-center font-semibold text-xl text-red-600">
              General group results
            </h1>
            <div className=" flex flex-1 mt-4 p-6 relative">
              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col space-y-2"
              >
                <div className="flex gap-3 items-center mb-6">
                  <div className="flex-1 flex gap-3 items-center">
                    <label>result:</label>
                    <input
                      required
                      value={resultItem.item}
                      onChange={(e) =>
                        setResultItem({ ...resultItem, item: e.target.value })
                      }
                      type="text"
                      className="p-2 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex-1 flex justify-end items-center gap-3">
                    <label>Category:</label>
                    <select
                      required
                      value={resultItem.category}
                      onChange={(e) =>
                        setResultItem({
                          ...resultItem,
                          category: e.target.value,
                        })
                      }
                      className="p-2 border border-gray-400 rounded"
                    >
                      <option>Zone</option>
                      <option value="B zone">B zone</option>
                      <option value="C zone">C zone</option>
                      <option value="Y zone">Y zone</option>
                      <option value="H zone">H zone</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                </div>

                {/* --------------------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">First:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={firstResult.name}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, name: e.target.value })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={firstResult.team}
                      onChange={(e) =>
                        setFirstResult({ ...firstResult, team: e.target.value })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={firstResult.grade}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          grade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={firstResult.marks}
                      onChange={(e) =>
                        setFirstResult({
                          ...firstResult,
                          marks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* ------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">Second:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={secondResult.secName}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secName: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={secondResult.secTeam}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={secondResult.secGrade}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={secondResult.secMarks}
                      onChange={(e) =>
                        setSecondResult({
                          ...secondResult,
                          secMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* --------------------------------------------- */}

                <div className="grid grid-cols-6 gap-5 ">
                  <h2 className="col-span-5 font-semibold text-lg">Third:</h2>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={thirdResult.thrName}
                      placeholder="Enter a name"
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrName: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>

                  <div className="col-span-2">
                    <select
                      required
                      value={thirdResult.thrTeam}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrTeam: e.target.value,
                        })
                      }
                      className="w-full p-2 rounded border border-gray-300"
                    >
                      <option>Select team</option>
                      <option value="Traditional Trackers">
                        Traditional Trackers
                      </option>
                      <option value="Legacy Legends">Legacy Legends</option>
                      <option value="Ancient Alliance">Ancient Alliance</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      required
                      value={thirdResult.thrGrade}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrGrade: e.target.value,
                        })
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option>Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="-">-</option>
                    </select>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <input
                      required
                      value={thirdResult.thrMarks}
                      onChange={(e) =>
                        setThirdResult({
                          ...thirdResult,
                          thrMarks: e.target.value,
                        })
                      }
                      type="number"
                      className="w-full border border-gray-300 p-2 rounded"
                      placeholder="Enter mark"
                    />
                  </div>
                </div>

                {/* ----------------------------------------------------------- */}

                {addItems.map((data, index) => (
                  <>
                    <h1 className="pt-3 font-semibold ">Another grades:</h1>
                    <div className="grid grid-cols-6 pt-6 gap-5">
                      <div className="col-span-2">
                        <input
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter a name"
                          name="addName"
                          value={data.addName}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>

                      <div className="col-span-2">
                        <select
                          className="w-full p-2 rounded border border-gray-300"
                          name="addTeam"
                          value={data.addTeam}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Team</option>
                          <option value="Traditional Trackers">
                            Traditional Trackers
                          </option>
                          <option value="Legacy Legends">Legacy Legends</option>
                          <option value="Ancient Alliance">
                            Ancient Alliance
                          </option>
                        </select>
                      </div>
                      <div className="col-span-1 relative">
                        <select
                          className="w-full p-2 border border-gray-300 rounded"
                          name="addGrade"
                          value={data.addGrade}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Grade</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                      <div className="col-span-1">
                        <input
                          name="addMarks"
                          value={data.addMarks}
                          onChange={(e) => handleChange(index, e)}
                          type="number"
                          className="w-full border border-gray-300 p-2 rounded"
                          placeholder="Enter Mark"
                        />
                      </div>
                    </div>
                  </>
                ))}

                {/* --------------------------------------------- */}

                <div className="">
                  <button
                    type="button"
                    className="px-4 py-1 bg-green-900 text-white"
                    onClick={handleAddItem}
                  >
                    <span className="font-bold text-lg">+</span>Add item
                  </button>
                </div>
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="px-4 py-3  rounded bg-[#2372fa] font-semibold text-lg text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default page;
