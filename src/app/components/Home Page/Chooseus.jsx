import React from "react";
import Wrapper from "../Universal/Wrapper";

export default function Chooseus() {
  return (
    <div className="w-full bg-black">
      <Wrapper className="flex flex-col md:flex-row py-[4em] md:py-[8em] justify-between w-full items-center">
        <div className="w-full md:w-[50%]">
          <h1 className="text-white font-[Jomolhari] leading-[100%] text-4xl">
            WHY CHOOSE
            <br />
            US
          </h1>
          <p className="font-Poppins text-white mt-[1em] font-[200] w-[100%] md:w-[90%]">
            We function as an inquiry-based export service, actively receiving
            inquiries from customers and then arranging for product delivery
            upon completion of manufacturing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[1em] gap-[2em] md:gap-[4em]">
            <div className="flex flex-col my-[.5em] items-center md:items-start">
              <img className="w-[50px]" src="/images/delivery.png" alt="" />
              <h1 className="text-white font-[600] text-lg mt-[10px]">
                Fast Shipping
              </h1>
              <p className="text-white text-[13px] mt-[10px] font-[200] w-[90%]">
                Get your products delivered quickly and easily with our fast
                shipping service
              </p>
            </div>
            <div className="flex flex-col my-[.5em] items-center md:items-start">
              <img className="w-[50px]" src="/images/shopping.png" alt="" />
              <h1 className="text-white font-[600] text-lg mt-[10px]">
                Easy to Shop
              </h1>
              <p className="text-white text-[13px] mt-[10px] font-[200] w-[90%]">
                Our online store is easy to shop, with a wide selection of
                products. You can find everything you need with just a few
                clicks.
              </p>
            </div>
            <div className="flex flex-col my-[.5em] items-center md:items-start">
              <img className="w-[50px]" src="/images/support.png" alt="" />
              <h1 className="text-white font-[600] text-lg mt-[10px]">
                24/7 Support
              </h1>
              <p className="text-white text-[13px] mt-[10px] font-[200] w-[90%]">
                We offer 24/7 support, so you can always get help when you need
                it, no matter what time of day or night it is.
              </p>
            </div>
            <div className="flex flex-col my-[.5em] items-center md:items-start">
              <img className="w-[50px]" src="/images/worldwide.png" alt="" />
              <h1 className="text-white font-[600] text-lg mt-[10px]">
                World Wide Shipping
              </h1>
              <p className="text-white text-[13px] mt-[10px] font-[200] w-[90%]">
                Get your products shipped anywhere in the world with our fast,
                reliable, and affordable worldwide shipping service.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[43%] hidden md:block relative">
          <img
            className="absolute z-[1] w-[40%] top-[-10%] left-[-10%]"
            src="/images/grid white.png"
            alt=""
          />
          <img
            className="object-contain z-[2] relative"
            src="/images/chooseus.png"
            alt=""
          />
        </div>
      </Wrapper>
    </div>
  );
}
