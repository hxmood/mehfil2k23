"use client";


import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter()
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('image', file)
    console.log(file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formdata
      })
      if (response.ok) {
        alert("images post to db successfully")
      }
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <div className="flex p-5 items-center rounded shadow bg-white">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleChange} />
        <button
          type="submit"
          className="bg-blue-600 px-3 py-2 rounded-md text-white"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default page;
