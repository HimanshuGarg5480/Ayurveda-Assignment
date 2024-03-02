"use client";
import Image from "next/image";
import React, { useState } from "react";
import filledStar from "../images/filledStar.png";
import unfilledStar from "../images/unfilledStar.png";
const Card = ({topic,subTopic}:any) => {
  const [safeReview, setSafeReview] = useState(0);
  return (
    <div className="mr-3 mt-2 pb-7 border-b-2 border-dotted border-gray-500">
      <p className="text-black font-semibold text-2xl">{topic}</p>
      <p className="text-gray-500 mt-2">{subTopic}</p>
      <div className="flex gap-1 mt-1">
        <Image
          onClick={()=>setSafeReview(1)}
          className="cursor-pointer"
          width={40}
          height={40}
          src={safeReview > 0 ? filledStar : unfilledStar}
          alt="star"
        />
        <Image
          onClick={()=>setSafeReview(2)}
          className="cursor-pointer"
          width={40}
          height={40}
          src={safeReview > 1 ? filledStar : unfilledStar}
          alt="star"
        />
        <Image
          onClick={()=>setSafeReview(3)}
          className="cursor-pointer"
          width={40}
          height={40}
          src={safeReview > 2 ? filledStar : unfilledStar}
          alt="star"
        />
        <Image
          onClick={()=>setSafeReview(4)}
          className="cursor-pointer"
          width={40}
          height={40}
          src={safeReview > 3 ? filledStar : unfilledStar}
          alt="star"
        />
        <Image
          onClick={()=>setSafeReview(5)}
          className="cursor-pointer"
          width={40}
          height={40}
          src={safeReview > 4 ? filledStar : unfilledStar}
          alt="star"
        />
      </div>
    </div>
  );
};

export default Card;
