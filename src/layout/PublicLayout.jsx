import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/index/Navbar'
import Switch from '../component/themeHandler/Switch'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all' 
import { useMediaQuery } from 'react-responsive'
import { TbMenu4} from "react-icons/tb";
import { MdClose } from "react-icons/md";
import MobileNavbar from '../component/index/MobileNavbar'

gsap.registerPlugin(ScrollTrigger, SplitText)


export default function PublicLayout() {
  const isLg = useMediaQuery({ minWidth: 1024});
  const [mobileNavShow, isSetMobileNav] = useState(false)

  useGSAP(()=>{
    gsap.fromTo('#navbar',
      { xPercent: -8, opacity: 0, ease:'power1.inOut', duration:1},
      { xPercent: 0, opacity: 1, ease:'power1.inOut', duration:1},
    )
  })

  useGSAP(() => {
    gsap.set(".close", { opacity: 0, scale: 0 });
    gsap.set(".menu", { opacity: 1, scale: 1 });
  }, []);

  const handleMenuOpen = ()=>{
    isSetMobileNav((p)=>!p)
    if (mobileNavShow){
      gsap.to('.close', {
        x: -40,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        scale: 0,
      });
      gsap.fromTo(
        '.menu',
        { x: 40, opacity: 0, scale: 0},
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.inOut", scale: 1}
      );
    }
    else{
       gsap.to('.menu', {
        x: 40,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        scale: 0
      });
      gsap.fromTo(
        '.close',
        { x: -40, opacity: 0, scale: 0},
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.inOut", scale: 1}
      );
    }
  }

  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='xl:max-w-[1500px] 2xl:max-w-[2550px] w-full relative'>
        <div className='grid grid-cols-12 h-screen w-screen'>
          {isLg?
            <>
          <div id='navbar' className='hidden lg:block col-span-3 sticky top-0 shadow border-r border-[var(--NavHeroSplit)]'>
            <Navbar/>
          </div>
          <div className='absolute right-0 top-0 z-20'>
              <Switch/>
          </div>
          </>
          :
          <>
            {/* {mobileNavShow?<MobileNavbar/>:''} */}
            <MobileNavbar  mobileNavShow={mobileNavShow} handleMenuOpen={handleMenuOpen}/>
            <div className='fixed top-5 md:top-10  z-30 flex items-center justify-end md:gap-4 w-full'>
              <div className='scale-70 md:scale-100 bg-[var(--primaryHoverHelper)] rounded-full p-4
              border-1 border-[var(--NavHeroSplit)] relative overflow-hidden h-20 w-20 flex items-center justify-center'
              onClick={handleMenuOpen}>
                <MdClose className={`absolute close w-full  h-12 text-red-500`}/>
                <TbMenu4 className='absolute menu w-12 h-12'/>
              </div>
              <div className='z-30 scale-70 md:scale-100 bg-[var(--primaryHoverHelper)] rounded-full border-1 border-[var(--NavHeroSplit)] relative'>
                <Switch/>
              </div>
            </div>
          </>
          }
          <div id='outlet' className='overflow-y-auto col-span-12 lg:col-span-9 relative  w-full MainPadMargin
          lg:top-0'>
            {/* put here grid-bg */}
            <div className='grid-bg fixed z-0'/>
            <div className='relative z-10'>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
