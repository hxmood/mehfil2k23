"use client";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ResultcardLists from "@/components/ResultcardLists";
import ResultShow from "@/components/ResultShow";

const page = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch("/api/results");
      const data = await response.json();
      setResults(data);
      
    };
    fetchResults();
  }, []);
  console.log(results);

  const handleEdit = (post) => {
    router.push(`/editResult?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const confirmed = confirm("Are you sure you want to delete the result?");
    if (confirmed) {
      try {
        await fetch(`/api/results/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredresults = results.filter((p) => p._id !== post._id);
        setResults(filteredresults)
        console.log("");
      } catch (error) {}
    }
  };

  
  return (
    <>
      {results.map((res) => (
        <div className="w-full mb-4">
          <ResultShow datas={res} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </div>
      ))}
    </>
  );
};

export default page;
