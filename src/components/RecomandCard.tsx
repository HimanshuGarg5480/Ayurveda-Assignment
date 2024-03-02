"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import GreenLike from '../images/greenLike.png'
import GrayLike from '../images/grayLike.png'
import GreenDislike from '../images/greenDislike.png'
import GrayDislike from '../images/grayDislike.png'

const RecomandCard = () => {
    const [like,setLike]=useState("");
  return (
    <div className="mr-3 mt-2 pb-16 border-b-2 border-dotted border-gray-500">
      <p className="text-black font-semibold text-2xl">Would you recommend Trausti?</p>
      <p className="text-gray-500 mt-2">your opinion won't be posted publicly.</p>
      <div className='relative'>
        <Image onClick={()=>setLike("No")} className='absolute top-1.5 cursor-pointer' width={50} src={like=="No"?GreenDislike:GrayDislike} alt=""/>
        <Image onClick={()=>setLike("Yes")} className='absolute left-28 cursor-pointer' src={like=="Yes"?GreenLike:GrayLike} alt=""/>
      </div>
    </div>
  )
}

export default RecomandCard