import React from "react";
import styles from "../../../styles/HomePage.module.css";
import Wrapper from "../Universal/Wrapper";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className={`w-full bg-[#F2F2F2] ${styles.custom_landing_page_height}`}>
      <Wrapper className={"flex md:flex-row flex-col h-full"}>
        <div className="h-[100%] w-full md:w-[50%] flex justify-center flex-col relative z-[10]">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="font-[Jomolhari] text-[2.9em] md:text-[7em] leading-[80%]">
                SAGAFAT
              </h1>
              <h1 className="font-[Jomolhari] text-[1.9em]  md:text-[5em] leading-[80%]">
                INTERNATIONALS
              </h1>
            </div>
            <p className="text-[#777] font-Poppins my-[2em] w-[100%] md:w-[80%] md:text-[1em] text-[14px] leading-[130%] text-center md:text-left">
              We are Sagafat Sports, a sportswear clothing exporter from
              Pakistan. Since 2015, we have been serving clients from all over
              the world, including cricket, football, and other sports
              enthusiasts.
            </p>
            <Link href="/products">
              <button className="bg-[#101010] px-[25px] text-white py-[10px] font-[Jomolhari] tracking-[5px] text-[13px] md:text-[1em]">
                EXPLORE
              </button>
            </Link>
          </div>
        </div>
        <div className={`relative h-full w-full md:w-[50%]`}>
          <div className="absolute w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] top-0 left-[50%] bg-white rounded-full translate-x-[-50%]"></div>
          <img
            className="absolute h-[100%] object-cover left-[50%] md:left-[60%] translate-x-[-50%] bottom-0"
            src="/images/man_landing_page.png"
            alt=""
          />
          <img
            className="absolute w-[30vw] md:w-[15vw] left-[50%] md:left-0 -translate-x-[50%] md:translate-x-[50%] bottom-0"
            src="/images/grid black.png"
            alt=""
          />
        </div>
      </Wrapper>
    </div>
  );
}
