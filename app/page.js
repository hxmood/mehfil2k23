"use client";

import React, { useEffect, useState } from "react";
import "@/styles/global.css";
import {Facebook, Instagram, Language, YouTube,} from "@mui/icons-material";

const page = () => {
  const [totalPoints, setTotalPoints] = useState(null);

  useEffect(() => {
    const fetchRes = async () => {
      const response = await fetch("/api/getPoints");
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

  return (
    <div className="container mx-auto">
      <div className="px-5 relative text-center w-full justify-start">
        <h1 className="leading-5">
          <span className="text-[#2a5ec7] font-extrabold text-6xl">
            Suffa Mehfil
          </span>
          <br />
          <span className="font-bold text-5xl">
            literary festival 10th edition
          </span>
          <br />
          <span className="text-lg font-normal italic">
            "the past speaks listen closely"
          </span>
        </h1>
      </div>

      <section className=" flex flex-col w-full justify-center items-center px-5 my-8 relative">
        <button className="bg-[#109101] flex px-4 py-3 text-white">
          <a
            className="flex items-center"
            target="_blank"
            href="https://www.youtube.com/@ahlussuffadars"
          >
            <YouTube />
            <span className="ml-1"> Watch live</span>
          </a>
        </button>
        <div className="my-8 flex w-full flex-col gap-4">
          <h1 className="text-center font-bold text-4xl text-blue-800">
            Team status
          </h1>

          {sortedTeams.map(([team, points]) => (
            <div
              className={`w-full bg-white max-sm:w-full p-4 flex flex-col  items-center justify-center rounded-lg drop-shadow-md ${teamColors[team]}`}
            >
              <h1 className="text-3xl font-bold">{points}</h1>
              <p className="font-medium text-base text-gray-700">{team}</p>
            </div>
          ))}
        </div>

        <h1 className="text-justify px-6 text-lg my-6 font-semibold text-gray-800">
          "Unveiling the Canvas of India's Past: Join us on a journey through
          the vibrant strokes of history, as we bring to life the artistry that
          encapsulates India's rich tapestry of historical discriminations.
          Through the medium of art, we explore the stories, struggles, and
          resilience of our nation, painting a vivid picture of the past to
          inspire a brighter future."
        </h1>
      </section>
      <footer className="w-full sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm">Get connected</h1>
        <div className="flex items-center justify-center text-white gap-1">
          <a target="_blank" href="https://www.instagram.com/ahlussuffadars/">
            <Instagram fontSize="medium" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100014534434979"
          >
            <Facebook fontSize="medium" />
          </a>
          <a target="_blank" href="https://www.ahlussuffadars.in/">
            <Language fontSize="medium" />
          </a>
          <a target="_blank" href="https://www.youtube.com/@ahlussuffadars">
            <YouTube fontSize="medium" />
          </a>
        </div>
        <h1 className="text-gray-100 mt-4 mb-2">
          <span>&copy;</span>Suffa Mehfil
        </h1>
      </footer>
    </div>
  );
};

export default page;
