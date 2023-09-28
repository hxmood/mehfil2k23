import React from "react";

const TeamStats = ({teamName, totalPoints}) => {
  return (
    <div className="w-full bg-[#f2fff8] max-sm:w-full p-4 flex flex-col  items-center justify-center rounded-lg drop-shadow-md">
      <h1 className="text-3xl font-bold">{totalPoints}</h1>
      <p className="font-medium text-base ">{teamName}</p>
    </div>
  );
};

export default TeamStats;
