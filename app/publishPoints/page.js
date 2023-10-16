"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);
  const handlePublish = async () => {
    try {
      for (const [team, points] of sortedTeams) {
        await fetch("/api/publishPoints", {
          method: "POST",
          body: JSON.stringify({
            team,
            points,
          }),
        });
      }

      // Fetch and update the total points after publishing or updating
      const response = await fetch("/api/getPoints");
      const data = await response.json();
      setUpdate(data);

      alert("Results published successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error publishing results. Please try again.");
    }
  };

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const response = await fetch("/api/teamPoints");
        const datas = await response.json();
        setTotalPoints(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRes();
  }, []);

  const sortedTeams = totalPoints
    ? Object.entries(totalPoints).sort(([, a], [, b]) => b - a)
    : [];
  const teamColors = {
    "Legacy Legends": "text-blue-700",
    "Ancient Alliance": "text-green-700",
    "Traditional Trackers": "text-red-700",
  };

  return (
    <div className="flex flex-col space-y-4 justify-center">
      {sortedTeams.map(([team, points]) => (
        <div className="flex text-4xl font-bold mt-12">
          <h1 className="mr-4">{team}:</h1>
          <h1 className={`${teamColors[team]}`}>{points}</h1>
        </div>
      ))}
      <button
        onClick={handlePublish}
        className="bg-green-900 text-white px-4 py-3 w-fit font-semibold"
      >
        Publish
      </button>
    </div>
  );
};

export default page;
