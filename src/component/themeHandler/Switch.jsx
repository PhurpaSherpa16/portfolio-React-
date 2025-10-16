import React, { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'
import { BsStars } from "react-icons/bs";
import gsap from 'gsap';


export default function Switch() {
  const stars = useRef(null);
  const moonRef = useRef(null);
  const ray = useRef(null)
  const ray1 = useRef(null)
  const ray2 = useRef(null)
  const ray3 = useRef(null)
  const ray4 = useRef(null)
  const ray5 = useRef(null)
  const ray6 = useRef(null)
  const ray7 = useRef(null)

  const {theme, toggleThemeMode} = useTheme()


  useEffect(()=>{
    if (theme === "dark") {
      gsap.to(moonRef.current, {
        xPercent: 40,
        yPercent: -40,
        ease: "power2.inOut"
      });
      gsap.to(stars.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray.current,{
        scale: 0,
         xPercent: 100,
        yPercent: 250,
        ease: "power2.inOut"
      })
      gsap.to(ray1.current,{
        scale: 0,
         xPercent: -100,
        yPercent: -100,
        ease: "power2.inOut"
      })
      gsap.to(ray2.current,{
        scale: 0,
         xPercent: -100,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray3.current,{
        scale: 0,
         xPercent: 200,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray4.current,{
        scale: 0,
         xPercent: 200,
        yPercent: -100,
        ease: "power2.inOut"
      })
      gsap.to(ray5.current,{
        scale: 0,
         xPercent: -200,
        yPercent: -100,
        ease: "power2.inOut"
      })
      gsap.to(ray6.current,{
        scale: 0,
         xPercent: -200,
        yPercent: 100,
        ease: "power2.inOut"
      })
      gsap.to(ray7.current,{
        scale: 0,
         xPercent: 200,
        yPercent: 100,
        ease: "power2.inOut"
      })

    } else {
      gsap.to(moonRef.current, {
        xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      });
      gsap.to(stars.current,{
        xPercent: -50,
        yPercent: 90,
        scale: 0,
        ease: "power2.inOut"
      })
       gsap.to(ray.current,{
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
       gsap.to(ray1.current,{
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
       gsap.to(ray2.current,{
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray3.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray4.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray5.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray6.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })
      gsap.to(ray7.current,{
        scale: 1,
         xPercent: 0,
        yPercent: 0,
        ease: "power2.inOut"
      })

  }
},[theme])


  return (
    <div>
        <div className='relative scale-50'>
        <button className='cursor-pointer' onClick={()=>toggleThemeMode()}>
            <div className='h-20 w-20 rounded-full flex items-center justify-center relative'>
                <div className='h-full w-full flex items-center justify-center relative'>
                  <BsStars ref={stars} className='absolute text-[#ff48fc]
                  scale-0 bottom-15 right-0 h-10 w-10'/>
                  <div className='h-10 w-10 bg-white rounded-full relative z-10 overflow-hidden
                  rotate-15'>
                      <div ref={moonRef} className={`absolute z-0 w-10 h-10 
                      ${theme === 'light'?'bg-gradient-to-l to-[var(--CTAbuttonColor2)] from-[var(--CTAbuttonColor1)]':'bg-black'} rounded-full `}/>
                  </div>
                  <div ref={ray} className='sunRay top-2 '/>
                  <div ref={ray1} className='sunRay bottom-2'/>
                  <div ref={ray2} className='sunRay right-2 rotate-90'/>
                  <div ref={ray3} className='sunRay left-2 rotate-90'/>
                  <div ref={ray4} className='sunRay left-4 bottom-4 rotate-45'/>
                  <div ref={ray5} className='sunRay right-4 bottom-4 -rotate-45'/>
                  <div ref={ray6} className='sunRay right-4 top-4 rotate-45'/>
                  <div ref={ray7} className='sunRay left-4 top-4 -rotate-45'/>
                </div>
            </div>
        </button>
        </div>
    </div>
  )
}
