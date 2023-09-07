import Link from 'next/link'
import React from 'react'

export default function CategoryCard({item}) {
  return (
    <Link href={`/categories/${item.slug}`} className='w-full mt-[2em] md:mt-0'>
        <div className='w-full h-[340px] md:h-[520px] bg-[white] shadow-md'>
            <img className='w-full h-full object-cover' src={item?.assets[0].url} alt="" />
        </div>
        <p className='font-[400] mt-[10px] text-black text-lg'>{item.name}</p>
    </Link>
  )
}
