import React from 'react'
import project from '../../assets/images/project2.png'
import Arrow from '../index/Arrow'
import { IoIosSend } from "react-icons/io";

export default function NewsLetter() {
  return (
    <div className='relative bg-[var(--secondaryBackgroundColor)] h-full w-full rounded-xl 
    border-1 border-[var(--NavHeroSplit)]
    shadow-md'>
      <div className='clipContent h-full
       p-8 flex flex-col gap-4  w-full'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-[6vw] md:text-[4vw] lg:text-[1.5vw] font-medium font-serif'>Have Something To Tell</h2>
          <input type="text" placeholder="Enter Message"
          className='p-4 bg-gray-200 text-black lg:w-full lg:pr-32 border-1 border-[var(--NavHeroSplit)]
          rounded-lg'/>
        </div>
        <div>
          <button className='buttonHero cursor-pointer text-white p-4 w-full
          flex gap-2 items-center justify-center
          rounded-full
          bg-gradient-to-l to-[var(--CTAbuttonColor2)] from-[var(--CTAbuttonColor1)]
          origin-left
          transition-all duration-300 ease-in-out'>Send Message
          <IoIosSend 
          className="icon transition-all duration-300 ease-in-out "/>
          </button>
        </div>
      </div>
    </div>
  )
}
