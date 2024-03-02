"use client"
import React from 'react'

const TextCard = () => {
  return (
    <div className="mr-3 mt-2 pb-10 border-b-2 border-dotted border-gray-500">
      <p className="text-black font-semibold text-2xl">Care to share more?</p>
      <p className="text-gray-500 mt-2">How was your overall experience? What&apos;s that one thing you won't forget Trausti for?</p>
      <textarea className='p-4 w-full h-52 border-2 text-black outline-none' placeholder='Come on, you know the drill.' maxLength={2000}/>
    </div>
  )
}

export default TextCard