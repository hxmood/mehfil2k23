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
          <Link href="/">Results</Link>
          <Link href="/">Media</Link>
          <Link href="/">Posters</Link>
        </div>
      </div>

      {/* Mobile navigation */}

      <div className="sm:hidden flex relative z-10">
        <Image src="/icons/menu.svg" width={30} height={30} alt="hee" className="cursor-pointer" onClick={() => setDropMenu((prev) => !prev)}/>
        {dropMenu && (
          <div className="absolute right-0 top-full w-full p-5 rounded-lg bg-white shadow-lg min-w-[210px] flex flex-col gap-2 justify-end items-end dropdown">
            <Link href="/results" onClick={() => setDropMenu(!dropMenu)}>Results</Link>
            <Link href="/posters" onClick={() => setDropMenu(!dropMenu)}>Posters</Link>
            <Link href="/media" onClick={() => setDropMenu(!dropMenu)}>Media</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
