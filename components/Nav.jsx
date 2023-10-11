"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [dropMenu, setDropMenu] = useState(false);
  return (
    <nav className="flex justify-between w-full mb-4 items-center py-5 px-6">
      <Link href="/">
        <Image src="/icons/logo.svg" width={60} height={60} alt="logo" />
      </Link>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/results" className="font-semibold" >Results</Link>
          <Link href="/points" className="font-semibold" >Points</Link>
        </div>
      </div>

      {/* Mobile navigation */}

      <div className="sm:hidden flex relative z-10">
        <Image src="/icons/menu.svg" width={30} height={30} alt="hee" className="cursor-pointer" onClick={() => setDropMenu((prev) => !prev)}/>
        {dropMenu && (
          <div className="absolute right-0 top-full w-full p-5 rounded-lg bg-white shadow-lg min-w-[210px] flex flex-col gap-2 justify-end items-end dropdown">
            <Link href="/results" className="font-semibold" onClick={() => setDropMenu(!dropMenu)}>Results</Link>
            <Link href="/points" className="font-semibold"  onClick={() => setDropMenu(!dropMenu)}>Points</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
