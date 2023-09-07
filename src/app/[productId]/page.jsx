"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "../components/Universal/Wrapper";
import { commerce } from "@/commerce/commerce";
import Link from "next/link";
import Spinner from "../components/Loader/Spinner";

export default function Page({ params }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const id = params.productId;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 500,
    });

    setProducts(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProduct = products.filter((item) => item.id === id);

  return (
    <div className="w-full bg-[#F2F2F2]">
      {loading && <Spinner/>}
      {()=>{
        document.title = filteredProduct[0].name + " | SAGAFAT INTERNATIONALS"
      }}
      <Wrapper className={"py-[10px] md:py-[20px]"}>
        <div className="w-full flex flex-col md:flex-row justify-between relative">
          <div className="w-[100%] md:w-[45%] max-h-[650px] bg-white shadow-lg rounded-xl overflow-hidden md:sticky md:top-0">
            <img
              className="w-full h-full object-contain"
              src={filteredProduct[0]?.image?.url}
              alt=""
            />
          </div>
          <div className="w-[100%] md:w-[50%] mt-[30px] md:mt-0">
            <h1 className="font-[Jomolhari] text-5xl">
              {filteredProduct[0]?.name}
            </h1>
            <div className="w-full mt-[30px]">
              <a
                className="w-full"
                target="_blank"
                href="https://instagram.com/sagafat_internationals?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
              >
                <button className="w-full py-[1em] font-Poppins border-[1px] border-[black] bg-black text-white rounded-full">
                  Talk on Instagram
                </button>
              </a>
            </div>
            <div className="w-full mt-[10px]">
              <a
                className="w-full"
                target="_blank"
                href="https://wa.me/+923240700195"
              >
                <button className="w-full py-[1em] font-Poppins border-[1px] border-[black] rounded-full">
                  Talk on Whatsapp
                </button>
              </a>
            </div>
            <div className="w-full my-[50px]">
              <h1 className="font-[Jomolhari] text-xl md:text-2xl">
                Description
              </h1>
              <p
                className="font-Poppins text-sm md:text-[16px] font-[300] mt-[10px]"
                dangerouslySetInnerHTML={{
                  __html: filteredProduct[0]?.description,
                }}
              />
            </div>
            <div className="w-full mt-[20px]">
              <div className="py-[30px] border-t border-b border-[black]">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What types of sportswear do you export?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We export different kinds of clothing items. You can have a
                    look at the{" "}
                    <Link className="text-[blue]" href={"/categories"}>
                      /categories
                    </Link>
                    .
                  </p>
                </details>
              </div>
              <div className="py-[30px] border-b border-[black]">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How can I contact you?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    You can contact us by clicking on &apos;Talk&apos; on Instagram or the
                    WhatsApp button above, or by using Gmail:{" "}
                    <a
                      className="text-[blue]"
                      href={"mailto:sagafatinternationals@gmail.com"}
                    >
                      sagafatinternationals@gmail.com
                    </a>
                    .
                  </p>
                </details>
              </div>
              <div className="py-[30px] border-b border-[black]">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>Who are we?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We are Sagafat Sports, a sportswear clothing exporter from
                    Pakistan. Since 2015, we have been serving clients from all
                    over the world, including cricket, football, and other
                    sports enthusiasts.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
