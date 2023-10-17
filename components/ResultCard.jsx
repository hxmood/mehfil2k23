import React, { useState } from "react";

const ResultCard = ({ post }) => {
  const [arrays, setArrays] = useState(post.anotherGrades);
  const firstletter = (str) => {
    const getfirst = str
      ?.split(" ")
      ?.map((word) => word.charAt(0))
      ?.join(".");
    return getfirst;
  };

  return (
    <div className="flex flex-col bg-[#fdfdfd] shadow-md rounded-lg p-3 capitalize">
      <div className="flex w-full justify-between">
        <h1 className="font-semibold text-lg">{post.res}</h1>
        <h2 className="">{post.category}</h2>
      </div>
      <hr className="mt-2 " />

      {/*--------------------------  */}

      <div className="flex flex-col">
        <div className="flex mt-2 flex-col px-2">
          <div className="flex w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-4 font-lobster font-normal text-2xl">
                1<span className="font-sans text-xs font-extralight">st</span>
              </h1>
              <h1>{post.first.name}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end">
                <h2>{post.first.grade}</h2>
                <h2>{post.first.marks}</h2>
                <p className="text-gray-500">{firstletter(post.first.team)}</p>
              </div>
            </div>
          </div>
          {post.anotherFirst && (
            <div className="flex w-full">
              <div className="flex basis-1/2 items-end">
                {post.anotherFirst.afName && (
                  <h1 className="mr-3 font-lobster font-normal text-2xl">
                    1<span className="font-sans text-xs">st</span>
                  </h1>
                )}

                <h1>{post.anotherFirst.afName}</h1>
              </div>
              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.anotherFirst.afGrade}</h2>
                  <h2>{post.anotherFirst.afMarks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.anotherFirst.afTeam)}
                  </p>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>

        <div className="flex mt-2 flex-col px-2 items-center">
          <div className="flex w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-2 font-lobster text-2xl font-normal">
                2<span className="font-sans text-xs font-extralight">nd</span>
              </h1>
              <h1>{post.second.secName}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end">
                <h2>{post.second.secGrade}</h2>
                <h2>{post.second.secMarks}</h2>
                <p className="text-gray-500">
                  {firstletter(post.second.secTeam)}
                </p>
              </div>
            </div>
          </div>

          {post.anotherSecond && (
            <div className="flex w-full">
              <div className="flex basis-1/2 items-end">
                {post.anotherSecond.asName && (
                  <h1 className="mr-2 font-lobster font-normal text-2xl">
                    2
                    <span className="font-sans text-xs font-extralight">
                      nd
                    </span>
                  </h1>
                )}
                <h1>{post.anotherSecond.asName}</h1>
              </div>
              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.anotherSecond.asGrade}</h2>
                  <h2>{post.anotherSecond.asMarks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.anotherSecond.asTeam)}
                  </p>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>

        <div className="flex mt-2 flex-col px-2 items-end">
          <div className="flex w-full">
            <div className="flex basis-1/2 items-end">
              <h1 className="mr-2 font-lobster font-normal text-2xl">
                3<span className="font-sans text-xs font-extralight">rd</span>
              </h1>
              <h1>{post.third.thrName}</h1>
            </div>

            <div className="flex basis-1/2 ">
              <div className="grid w-full grid-cols-3 place-items-end">
                <h2>{post.third.thrGrade}</h2>
                <h2>{post.third.thrMarks}</h2>
                <p className="text-gray-500">
                  {firstletter(post.third.thrTeam)}
                </p>
              </div>
            </div>
          </div>

          {post.anotherThird && (
            <div className="flex w-full">
              <div className="flex basis-1/2 items-end">
                {post.anotherThird.atName && (
                  <h1 className="mr-2 font-semibold text-2xl">
                    3<span className="font-sans text-xs">rd</span>
                  </h1>
                )}
                <h1>{post.anotherThird.atName}</h1>
              </div>
              <div className="flex basis-1/2 ">
                <div className="grid w-full grid-cols-3 place-items-end">
                  <h2>{post.anotherThird.atGrade}</h2>
                  <h2>{post.anotherThird.atMarks}</h2>
                  <p className="text-gray-500">
                    {firstletter(post.anotherThird.atTeam)}
                  </p>
                </div>
                <hr />
              </div>
            </div>
          )}

          {arrays &&
            arrays.map((data, index) => (
              <div className="flex w-full mt-2 text-gray-600" key={index}>
                <div className="flex basis-1/2">
                  {arrays && <h1 className="ml-3 font-bold">--</h1>}
                  <h1 className="ml-2">{arrays[index].addName}</h1>
                </div>

                <div className="flex basis-1/2" key={index}>
                  <div className="grid w-full grid-cols-3 place-items-end">
                    <h2>{arrays[index].addGrade}</h2>
                    <h2>{arrays[index].addMarks}</h2>
                    <p className="text-gray-500">
                      {firstletter(post.anotherGrades[index].addTeam)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
