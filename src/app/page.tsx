"use clinet"
import Image from 'next/image';
import cross from '../images/cross.png'
import Card from '@/components/Card';
import RecomandCard from '@/components/RecomandCard';
import PraiseCard from '@/components/PraiseCard';
import TextCard from '@/components/TextCard';
export default function Home() {
  return (
    <>
      <div className="bg-white mx-auto w-full sm:w-[425px] pl-3 pt-4 pb-2">
        <Image className='cursor-pointer' src={cross} width={20} height={20} alt="" />
        <p className='text-black font-bold text-3xl mt-2'>Leave a review</p>
        <Card topic="Safety" subTopic="How safe did you feel with Trausti?"/>
        <Card topic="Communication" subTopic="How easy was to commumicate with Trausti?"/>
        <RecomandCard />
        <PraiseCard />
        <TextCard />
        <div className='text-[#0A5767] pl-[37%] bg-[#A1E6B8] mt-4 rounded-md font-bold py-3'>
          PUBLISH REVIEW
        </div>
      </div>
    </>
  );
}
