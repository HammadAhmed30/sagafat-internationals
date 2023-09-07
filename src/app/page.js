"use client"

import LandingPage from './components/Home Page/LandingPage'
import TopSelling from './components/Home Page/TopSelling'
import Chooseus from './components/Home Page/Chooseus'
import StayUpdate from './components/Home Page/StayUpdate'
import { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    document.title = "SAGAFAT INTERNATIONALS"
  },[])

  return (
    <div className='w-full bg-[#F2F2F2]'>
      <LandingPage/>
      <TopSelling/>
      <Chooseus/>
      <StayUpdate/>
    </div>
  )
}



