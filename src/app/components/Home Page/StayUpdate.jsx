import React from "react";
import Wrapper from "../Universal/Wrapper";
export default function StayUpdate() {
  return (
    <div className="w-full bg-black py-[3em] md:py-[5em]">
      <Wrapper
        className={
          "w-full flex flex-col max-w-[550px] justify-center items-center"
        }
      >
        <h1 className="text-white font-[Jomolhari] leading-[100%] text-3xl md:text-5xl">
          STAY UPTO DATE
        </h1>
        <p className="text-white text-center my-[1.9em] font-Poppins font-[200] text-[14px]">
          Enter your email to stay up-to-date, know about our new arrivals, new
          openings, and sales. Don&apos;t miss this opportunity and connect with us.
        </p>
        <form className="flex w-full max-w-[550px]">
          <input
            className="h-[40px] pl-[10px] w-[80%] outline-none"
            placeholder="example@xyz.com"
            type="name"
          />
          <button className="h-[40px] w-[20%] border-2 flex justify-center items-center">
            <img className="h-[70%]" src="/images/notification.png" alt="" />
          </button>
        </form>
      </Wrapper>
    </div>
  );
}
