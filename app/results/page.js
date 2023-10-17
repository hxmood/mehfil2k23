"use client";

import ResultCard from "@/components/ResultCard";
import React from "react";
import { useState, useEffect } from "react";

const ResultcardLists = ({ datas }) => {
  return (
    <div className="flex flex-col-reverse w-full gap-y-3 mb-4 px-5">
      {datas.map((post) => (
        <ResultCard post={post} />
      ))}
    </div>
  );
};

const page = () => {
  const [results, setResults] = useState([]);

  const fetchRes = async () => {
    try {
      const response = await fetch("/api/results",{
        cache: 'no-store'
      });
      const datas = await response.json();
      setResults(datas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRes();
  }, []);

  const [category, setCategory] = useState("");
  const filteredItems = category
    ? results.filter((zone) => zone.category == category)
    : results;

  return (
    <div className="w-full flex flex-col  items-center justify-center">
      <div className="flex w-full px-6 justify-between mb-4 items-center">
        <h1 className="font-extrabold text-2xl text-blue-700">Results</h1>
        <select
          value={category}
          className="border shadow-md rounded-md p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="B zone">B zone</option>
          <option value="C zone">C zone</option>
          <option value="Y zone">Y zone</option>
          <option value="H zone">H zone</option>
          <option value="General">General</option>
        </select>
      </div>

      {results.length !== 0 ? (
        <ResultcardLists datas={filteredItems} />
      ) : (
        <h1 className="text-md mt-6">Results not published yet</h1>
      )}
    </div>
  );
};

export default page;
