"use client";

import React, { useEffect, useState } from "react";

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

  const sortedTeams = totalPoints
    ? Object.entries(totalPoints).sort(([, a], [, b]) => b - a)
    : [];
  const teamColors = {
    "Legacy Legends": "text-blue-700",
    "Ancient Alliance": "text-green-700",
    "Traditional Trackers": "text-red-700",
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        for(const [team, points] of sortedTeams) {
            await fetch("/api/updatePoints", {
                method: "PUT",
                body: JSON.stringify({
                    team: team,
                    points: points
                })
            })
        }
        alert("points updated successfully")

        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="flex flex-col space-y-4 justify-center">
      {sortedTeams.map(([team, points]) => (
        <div className="flex text-4xl font-bold mt-12">
          <h1 className="mr-4">{team}:</h1>
          <h1 className={`${teamColors[team]}`}>{points}</h1>
        </div>
      ))}

      <button className="bg-green-800 font-semibold px-3 py-2 text-white" onClick={handleUpdate}>Update points</button>
    </div>
  );
};

export default page;