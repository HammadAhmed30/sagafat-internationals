"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "../components/Universal/Wrapper";
import { commerce } from "@/commerce/commerce";
import ProduictCard2 from "../components/Product/ProductCard2";
import Spinner from "../components/Loader/Spinner";

export default function Page() {
  const [cate, setCate] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 500,
    });

    setCate(data);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "Our Products | SAGAFAT INTERNATIONALS";
    fetchProducts();
  }, []);

  return (
    <div className="w-full bg-[#F2F2F2]">
      {loading && <Spinner />}
      <h1 className="font-[Jomolhari] text-black text-5xl text-center py-[1em]">
        Our Products
      </h1>
      <Wrapper
        className={
          "py-[10px] md:py-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[10px] md:gap-[20px]"
        }
      >
        {cate.map((item, index) => {
          return <ProduictCard2 key={index} item={item} />;
        })}
      </Wrapper>
    </div>
  );
}
