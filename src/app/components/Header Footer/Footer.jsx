import React from "react";
import Wrapper from "../Universal/Wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black">
      <Wrapper
        className={`pt-[3em] md:pt-[5em] flex flex-col md:flex-row justify-between items-end`}
      >
        <div className="w-full md:w-auto">
          <img className="w-[120px]" src="/images/logo_light.png" alt="" />
          <h1 className="text-white text font-[Jomolhari] mt-[20px] text-3xl">
            WHO ARE WE?
          </h1>
          <p className="text-white font-Poppins text-[13px] font-[200] w-full max-w-[350px] mt-[1em]">
            We are an export and manufacturing company based in Pakistan. Our
            expertise lies in producing and exporting a wide range of clothing
            goods, including sportswear and winter wear.
          </p>
          <div className="my-[1em] flex flex-col">
            <Link
              className="text-white text-[13px] mt-[10px] font-[300] underline opacity-[.6] hover:opacity-[1] transition-all"
              href={"/"}
            >
              HOME
            </Link>
            <Link
              className="text-white text-[13px] mt-[10px] font-[300] underline opacity-[.6] hover:opacity-[1] transition-all"
              href={"/products"}
            >
              PRODUCTS
            </Link>
            <Link
              className="text-white text-[13px] mt-[10px] font-[300] underline opacity-[.6] hover:opacity-[1] transition-all"
              href={"/categories"}
            >
              CATEGORIES
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end  w-full md:w-auto mt-[20px] md:mt-0">
          <a href="mailto:sagafatinternationals@gmail.com" className="text-white font-Popppins font-[200]">
            sagafatinternationals@gmail.com
          </a>
          <div className="flex my-[20px]">
            <a href="https://www.facebook.com/Sagafatinternationals?mibextid=ZbWKwL">
              <img
                className="w-[30px] mr-[10px]"
                src="/images/facebook.png"
                alt=""
              />
            </a>
            <a href="https://instagram.com/sagafat_internationals?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
              <img
                className="w-[30px] mr-[10px]"
                src="/images/instagram.png"
                alt=""
              />
            </a>
            <a href="http://tiktok.com/@sagafat_internationals">
              <img
                className="w-[30px] mr-[10px]"
                src="/images/tiktok.png"
                alt=""
              />
            </a>
          </div>
          <a className="text-white font-Poppins font-[200]" href="tel:+923240700195">
            +92 324 0700 195
          </a>{" "}
        </div>
      </Wrapper>
      <p className="py-[1.5em] mt-[1.5em] border-t border-[gray] text-center text-white text-[10px] md:text-[14px] font-[200] tracking-[1px]">
        DESIGNED AND DEVELOPED BY <span className="font-[700]">ETRALBIT</span>
      </p>
    </div>
  );
}
