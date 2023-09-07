"use client";

import React, { useEffect, useState } from "react";
import ProduictCard from "../Product/ProduictCard";
import Wrapper from "../Universal/Wrapper";
import { commerce } from "@/commerce/commerce";
import Spinner from "../Loader/Spinner";

export default function TopSelling() {
  const [cate, setCate] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.categories.list({
      limit: 500,
    });

    const Allproduct = await commerce.products.list({
      limit: 500,
    });

    setCate(data[0]);
    setProducts(Allproduct.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.slug).toString() === cate.slug
  );

  return (
    <div className="w-full">
      {loading && <Spinner/>}
      <Wrapper className=" grid lg:grid-cols-4 gap-[10px] bg-[#101010] sm:grid-cols-2 py-[4em] md:py-[8em]">
        <div className="w-full">
          <h1 className="font-[Jomolhari] text-white text-3xl leading-[100%]">
            {cate.name}
          </h1>
          <p className="text-[#F2F2F2] font-[200] my-[20px] font-Poppins text-[15px]">
            {cate?.description}
          </p>
          <a href={`/categories/${cate.slug}`}>
            <button className="bg-white font-Poppins px-[25px] py-[6px] outline-none border-none rounded-full ">
              See all
            </button>
          </a>
        </div>
        {filteredProducts.map((item, index) => {
          return index < 3 && <ProduictCard key={index} item={item} />;
        })}
      </Wrapper>
    </div>
  );
}
