"use client";
import React, { useState } from "react";
const arr = [
  "Adventurous",
  "Clean",
  "Good listener",
  "Honest",
  "Humorous",
  "Inspiring",
  "Kind",
  "Knowledgable",
  "Non-judgemental",
  "Spontaneous",
  "Talkative",
  "Thoughtful",
  "Trustworthy",
];
const SubItems = ({ item }: any) => {
  const [selected,setSelected]=useState(false);
  return (
    <div onClick={()=>setSelected(!selected)} className={selected?"text-black bg-[#A1E6B8] rounded-3xl p-2 font-medium cursor-pointer":"cursor-pointer text-black bg-[#F5F3F0] rounded-3xl p-2 font-medium"}>
      {item}
    </div>
  );
};
const PraiseCard = () => {
  return (
    <div className="mr-3 mt-2 pb-12 border-b-2 border-dotted border-gray-500">
      <p className="text-black font-semibold text-2xl">Praise</p>
      <p className="text-gray-500 mt-2">What traits best describe Trausti?</p>
      <div className="flex flex-wrap gap-3">
        {arr.map((i) => {
          return (
            <SubItems item={i}/>
          );
        })}
      </div>
    </div>
  );
};

export default PraiseCard;
