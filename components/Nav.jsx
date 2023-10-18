"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropMenu && !e.target.closest(".dropdown")) {
        setDropMenu(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [dropMenu]);

  const Navfix = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener('scroll', Navfix);


  return (
    <nav className={` text-[#202E55] flex z-50 justify-between items-center px-3 md:px-10 lg:px-10 xl:px-36   ${fix ? 'bg-white shadow-md backdrop-blur-lg bg-opacity-75':'bg-transparent '} w-full  fixed top-0`}>
      <Link href="/">
        <Image src="/icons/mehfil-logo.png" width={170} height={170} alt="logo" />
      </Link>

      <div className="sm:flex hidden justify-end">
        <div className="flex gap-3 text-lg md:gap-5">
          <Link href="/results" className="font-medium" >Results</Link>
          <Link href="/points" className="font-medium" >Points</Link>
          <Link href="/media" className="font-medium" >Media</Link>
        </div>
      </div>

      {/* Mobile navigation */}
        <div className="sm:hidden flex relative z-10 mr-5">
          <Image src="/icons/menu.svg" width={30} height={30} alt="hee" className="cursor-pointer" onClick={() => setDropMenu(!dropMenu)}/>
          {dropMenu && (
            <div className="absolute right-0 top-full w-full p-5 rounded-lg bg-white shadow-lg min-w-[210px] flex flex-col gap-2 justify-end items-end dropdown">
              <Link href="/results" className="font-medium" onClick={() => setDropMenu(!dropMenu)}>Results</Link>
              <Link href="/points" className="font-medium"  onClick={() => setDropMenu(!dropMenu)}>Points</Link>
              <Link href="/media" className="font-medium"  onClick={() => setDropMenu(!dropMenu)}>Media</Link>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Nav;
