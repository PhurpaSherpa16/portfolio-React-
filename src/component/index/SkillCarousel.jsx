import React, { useEffect, useState } from 'react'
import react from '../../assets/images/react.svg'
import figma from '../../assets/images/figma.svg'
import html from '../../assets/images/html.svg'
import javascript from '../../assets/images/javascript.svg'
import tailwind from '../../assets/images/tailwind.svg'
import { GiPlayButton } from "react-icons/gi";
import {SliderSkills} from '../../assets/data/dynamicData'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Md3dRotation } from "react-icons/md";

export default function SkillCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(null);
    const [animationMode, setAnimationMode] = useState(false)

    const totalBackGroundImage = SliderSkills.length
    

    const setIndex = (index) =>{
        const newIndex = (index + totalBackGroundImage) % totalBackGroundImage
        setCurrentIndex(newIndex)
        setPrevIndex(currentIndex)
    }

    const getBackGroundImage = (index) =>{
        return SliderSkills[(currentIndex + index + totalBackGroundImage) % totalBackGroundImage]
    }

    const currentBackground = getBackGroundImage(0)

    const next = getBackGroundImage(-1)
    const prev = getBackGroundImage(1)

    useGSAP(()=>{
        gsap.fromTo('.backgroundImage',
            {xPercent:0, opacity: 0},
            {xPercent:0, opacity: 1, ease:'power1.inOut', duration: 1}
        )  
        
        gsap.from('.playingDiv',{
            width: '0%', duration: 3
        })

        if (animationMode){
             gsap.fromTo(
            ".activeIcon",
            { scale: 1, rotate:0},
            { scale: 1.5, rotate: 360, duration: 1.5, yoyo: true, repeat: 1, ease:'power1.inOut',}
        );
        }
       else{
        gsap.fromTo(
            ".activeIcon",
            { scale: 1, rotate:0},
            { scale: 1.2, duration: 1.5, yoyo: true, repeat: 1, ease:'power1.inOut',}
        );
       }
        
    }, [currentIndex])

    const changeImageHandler= (props)=>{
        setIndex(props);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex(currentIndex + 1)
        }, 3000)
        return ()=>clearInterval(interval)

    },[currentIndex])


    

  return (
    <div className='h-full w-full rounded-2xl
    border-1 border-[var(--NavHeroSplit)] shadow-sm relative
    flex items-center justify-center'>
      <div className='absolute top-0 h-full w-full'>
            <img src={currentBackground.image} alt="image"
            className={`backgroundImage object-cover h-full w-full`}/>
      </div>
      <div className='absolute bottom-4 p-2 bg-black/30 grid gap-2
      backdrop-blur-2xl rounded-lg border-1 border-[var(--NavHeroSplit)] shadow-sm'>
        <div className='Skills flex gap-2'>
            {SliderSkills.map((item, index)=>(
                <>
                    {index === currentIndex ?
                    <div className='activeIcon flex items-end'>
                        <img src={item.icon} alt="image"
                        className='h-12 lg:h-8'/>
                    </div>:
                    <div className='notActiveIcon flex items-end'>
                        <img src={item.icon} alt="image"
                        className='h-12 lg:h-8'/>
                    </div>
                    }
                </>
            ))}
            
        </div>
        <div className={`absolute bottom-1 right-2 ${animationMode?'text-white':'text-gray-500'} cursor-pointer
        hover:scale-110 hover:text-white`}
        onClick={()=>setAnimationMode((p)=>!p)}>
            <Md3dRotation/>
        </div>
        <div className='SlideDivPlaythrough flex items-center justify-center gap-1 relative'>
            {SliderSkills.map((_, index)=>(
                <>
                    {index === currentIndex ?
                    <div className='inset-0 bg-white h-1.5 w-6  md:h-1 md:w-4 rounded-2xl relative overflow-hidden
                    '>
                        <div className='playingDiv inset-0 h-1.5 w-6  md:h-1 md:w-4  bg-gray-500 absolute z-10 rounded-2xl'/>
                    </div>:
                    <div key={index} className='h-1.5 w-1.5  md:h-1 md:w-1 bg-white rounded-2xl'/>
                    }
                </>
            ))}
        </div>
      </div>
      {/* next */}
      <div className='absolute text-white top-10 right-4 p-1.5 bg-black/30 backdrop-blur-2xl rounded-full
      flex items-center justify-center cursor-pointer'
      onClick={()=>changeImageHandler(currentIndex + 1)}
      >
        <GiPlayButton/>
      </div>
      {/* prev */}
      <div className='absolute text-white top-10 left-4 rotate-180 p-1.5 bg-black/30 backdrop-blur-2xl rounded-full
      flex items-center justify-center cursor-pointer'
      onClick={()=>changeImageHandler(currentIndex - 1)}>
        <GiPlayButton/>
      </div>
    </div>
  )
}
