import Link from 'next/link'
import React from 'react'

export default function ProduictCard({item}) {
  return (
    <Link href={`/${item.id}`} className='w-full mt-[2em] md:mt-0'>
        <div className='w-full h-[320px] bg-[white]'>
            <img className='w-full h-full object-contain' src={item.image.url} alt="" />
        </div>
        <p className='font-[400] mt-[10px] text-white text-md'>{item.name}</p>
    </Link>
  )
}
