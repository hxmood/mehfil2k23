"use client";

import React, { useEffect, useState } from "react";
import "@/styles/global.css";
const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);

  useEffect(() => {
    const fetchRes = async () => {
      const response = await fetch("/api/teamPoints");
      const datas = await response.json();
      setTotalPoints(datas);
    };
    fetchRes();
  }, []);

  const sortedTeams = totalPoints ? Object.entries(totalPoints).sort(([, a], [, b]) => b-a) : []
  
  const teamColors = {
    "Legacy Legends": "text-blue-700",
    "Ancient Alliance": "text-green-700",
    "Traditional Trackers": "text-red-700",
  };

  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/JmLX0qARq5g?si=96Nds2Nv69El8ATX"
        className="rounded-lg shadow-md"
        width={450}
        height={300}
      ></iframe>
      <section className="w-full flex justify-center items-center px-5 mb-8">
        <div className="mt-10 flex flex-1 flex-col gap-4">
          <h1 className="text-center font-bold text-4xl text-blue-800">
            Team status
          </h1>

          {sortedTeams.map(([team, points]) => (
            <div className={`w-full bg-white max-sm:w-full p-4 flex flex-col  items-center justify-center rounded-lg drop-shadow-md ${teamColors[team]}`}>
            <h1 className="text-3xl font-bold">{points}</h1>
            <p className="font-medium text-base text-gray-700">{team}</p>
          </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
