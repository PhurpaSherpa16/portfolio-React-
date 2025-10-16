import React from 'react'

export default function watchFace() {
  return (
    <div className='relative h-full w-full flex items-center py-2'>
        <div className='absolute left-[50%] -translate-x-[50%] tr h-full w-[90%] lg:w-56 2xl:w-76 bg-[var(--WatchColor3)] cardShadow 
        rounded-4xl'/>
        <div className='bg-gradient-to-l from-[var(--WatchColor1)] to-[var(--WatchColor2)] backdrop-blur-xl text-white flex items-center justify-center
        h-fit w-full p-2 px-6 rounded-4xl relative border-2 border-gray-300/40'>
            <div className='grid gap-2 2xl:gap-4 w-full h-fit items-center justify-center'>
                <h1 className='font-["Playfair"] leading-20 font-bold numbers'>90%</h1>
                <span className='absolute top-2  left-10 font-["Playfair"] leading-20 font-bold text-[6vw] text-white/60
                 select-none blur-md'>
                90%
                </span>
                <div>
                <p className='cardTitle'>Client Satisfaction</p>
                <p className='text-[var(--invertSecondaryText)]'>High retention</p>
                </div>
            </div>
        </div>
    </div>
  )
}
