import { useEffect } from 'react';
import BentoGrid from '../component/index/BentoGrid'
import HeroMessageAndCTA from '../component/index/HeroMessageAndCTA'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';


export default function Index() {

  useGSAP(()=>{
    gsap.fromTo('#bento',
      { xPercent: 8, opacity: 0, ease:'power1.inOut', duration:0.5},
      { xPercent: 0, opacity: 1, ease:'power1.inOut', duration:1, delay: 0.5},
    )
  })

  useEffect(() => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [])

  return (
    <div className='w-full h-screen'>
      <div className='container mx-auto'>
        <div className='relative z-10 flex flex-col h-full justify-between md:max-w-[640px] mx-auto lg:max-w-full'>
          <div id='heroMessage' className='relative p-6 z-20'>
            <HeroMessageAndCTA/>
          </div>
          <div id='bento' className='relative z-10'>
            <BentoGrid/>
          </div>
        </div>
      </div>
    </div>
  )
}
