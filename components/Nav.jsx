"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [dropMenu, setDropMenu] = useState(false);
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

  return (
    <nav className="flex justify-between w-full mb-4 items-center py-2 px-1">
      <Link href="/">
        <Image src="/icons/mehfil-logo.png" width={160} height={160} alt="logo" />
      </Link>

      <div className="sm:flex hidden justify-end">
        <div className="flex gap-3 md:gap-5">
          <Link href="/results" className="font-semibold" >Results</Link>
          <Link href="/points" className="font-semibold" >Points</Link>
          <Link href="/media" className="font-semibold" >Media</Link>
        </div>
      </div>

      {/* Mobile navigation */}
        <div className="sm:hidden flex relative z-10 mr-5">
          <Image src="/icons/menu.svg" width={30} height={30} alt="hee" className="cursor-pointer" onClick={() => setDropMenu(!dropMenu)}/>
          {dropMenu && (
            <div className="absolute right-0 top-full w-full p-5 rounded-lg bg-white shadow-lg min-w-[210px] flex flex-col gap-2 justify-end items-end dropdown">
              <Link href="/results" className="font-semibold" onClick={() => setDropMenu(!dropMenu)}>Results</Link>
              <Link href="/points" className="font-semibold"  onClick={() => setDropMenu(!dropMenu)}>Points</Link>
              <Link href="/media" className="font-semibold"  onClick={() => setDropMenu(!dropMenu)}>Media</Link>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Nav;
