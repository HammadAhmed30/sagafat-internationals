"use client";

import React, { useState } from "react";
import Wrapper from "../Universal/Wrapper";
import Link from "next/link";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full bg-[#F2F2F2] h-[70px] md:h-[100px]">
      {menu && <Menu setMenu={setMenu} />}
      <Wrapper className="h-full flex justify-between items-center">
        <Link className="h-full flex justify-center items-center" href={"/"}>
          <img className="h-[80%] w-auto" src="/images/logo_dark.png" alt="" />
        </Link>
        <img
          onClick={() => {
            setMenu(true);
          }}
          className="h-[15%] w-auto cursor-pointer"
          src="/images/menu.png"
          alt=""
        />
      </Wrapper>
    </div>
  );
}

const Menu = ({ setMenu }) => {
  return (
    <div className="w-full h-[100vh] bg-white fixed top-0 left-0 z-[100]">
      <Wrapper className={"w-full h-full flex items-center relative"}>
        <img
          onClick={() => {
            setMenu(false);
          }}
          className="absolute top-[20px] right-[20px] w-[20px] md:w-[30px] cursor-pointer h-auto"
          src="/images/cross.png"
          alt=""
        />
        <div className="w-full md:w-[90%] mx-auto flex flex-col gap-[20px]">
          <Link
            className="font-[Jomolhari] text-black hover:text-[#636363] hover:underline transition-all text-3xl md:text-5xl flex"
            onClick={() => {
              setMenu(false);
              window.scrollTo(0, 0);
            }}
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className="font-[Jomolhari] text-black hover:text-[#636363] hover:underline transition-all text-3xl md:text-5xl flex"
            onClick={() => {
              setMenu(false);
              window.scrollTo(0, 0);
            }}
            href={"/products"}
          >
            PRODUCTS
          </Link>
          <Link
            className="font-[Jomolhari] text-black hover:text-[#636363] hover:underline transition-all text-3xl md:text-5xl flex"
            onClick={() => {
              setMenu(false);
              window.scrollTo(0, 0);
            }}
            href={"/categories"}
          >
            CATEGORIES
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
