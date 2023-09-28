"use client";

import { useRouter } from "next/router";
const page = () => {
  const router = useRouter();
  const handlePublish = () => {
    router.push({
      pathname: "/page",
      query: { fetchPoints: true },
    });
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePublish}
        className="p-4 text-center bg-green-900 text-white"
      >
        Publish Points
      </button>
    </div>
  );
};

export default page;
