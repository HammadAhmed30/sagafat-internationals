import React from 'react'
import styles from "../../../styles/Spinner.module.css"

export default function Spinner() {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center fixed top-0 left-0 bg-[#101010] z-[1000]'>

        <img src="/images/logo_light.png" className={`w-[200px] h-auto ${styles.animationForSpinner}`} alt="" />

    </div>
  )
}
