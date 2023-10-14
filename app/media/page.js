"use client";
import { useEffect, useState } from "react";
import { storage } from "@/utils/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Download } from "@mui/icons-material";

const page = () => {
  const [getImage, setGetImage] = useState([]);
  const imageListsRef = ref(storage, "posters/");
  const handleClick = () => {
    document.querySelector('.card').classList.add('hover');
  }

  useEffect(() => {
    listAll(imageListsRef).then((response) => {
      const promises = response.items.map((item) => getDownloadURL(item));
      Promise.all(promises).then((urls) => {
        setGetImage(urls);
      });
    });
  }, []);

  return (
    <div className="flex flex-col">
      {getImage.length !== 0 ? (
        <><h1 className="text-3xl font-semibold text-center">Posters</h1><div className="px-2 flex flex-col-reverse gap-y-8 w-full items-center my-4">
          {getImage.map((url) => (
            <div onClick={handleClick} className="card flex items-center justify-centerst shadow-lg border-3">
              <img className="w-full h-full object-cover" src={url} />
            </div>
          ))}
        </div></>
      ) : <h1>Posters will be displayed later</h1>}
      
    </div>
  );
};

export default page;
