"use client";

import Spinner from "@/app/components/Loader/Spinner";
import ProduictCard from "@/app/components/Product/ProduictCard";
import Wrapper from "@/app/components/Universal/Wrapper";
import { commerce } from "@/commerce/commerce";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const Cate_Name = params.category;

  const [products, setProducts] = useState([]);
  const [category, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 500,
    });

    const categories = await commerce.categories.list({
      limit: 500,
    });

    setCategories(categories.data);
    setProducts(data);
    setLoading(false);
  };

  const filteredCategory = category.filter(
    (item) => item.slug.toString() === Cate_Name.toString()
  );

  const filteredProducts = products.filter(
    (item) =>
      item.categories.map((prod) => prod.slug).toString() ===
      Cate_Name.toString()
  );

  useEffect(() => {
    fetchProducts();
    document.title = Cate_Name + " | SAGAFAT INTERNATIONALS";
  }, []);

  return (
    <div className="w-full bg-[#F2F2F2]">
      {() => {}}
      {loading && <Spinner />}
      <div className="w-full relative">
        <img
          className="w-full h-full object-cover z-[1] absolute"
          src={filteredCategory[0]?.assets[0].url}
          alt=""
        />
        <h1 className="py-[3em] md:py-[2em] text-center text-white text-4xl md:text-[6em] font-[Jomolhari] relative z-[10] mix-blend-difference">
          {filteredCategory[0]?.name}
        </h1>
      </div>
      <div className="w-full bg-black">
        <Wrapper
          className={
            "py-[10px] md:py-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-[20px]"
          }
        >
          {filteredProducts.map((item, index) => {
            return <ProduictCard item={item} key={index} />;
          })}
        </Wrapper>
      </div>
    </div>
  );
}
