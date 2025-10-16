import AnimatedGridBackground from '../component/index/AnimatedGridBaclground';
import BentoGrid from '../component/index/BentoGrid'
import HeroMessageAndCTA from '../component/index/HeroMessageAndCTA'
import { useTheme } from '../component/themeHandler/ThemeProvider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

export default function Index() {
  const {theme} = useTheme()

  useGSAP(()=>{
    gsap.fromTo('#bento',
      { xPercent: 8, opacity: 0, ease:'power1.inOut', duration:0.5},
      { xPercent: 0, opacity: 1, ease:'power1.inOut', duration:1, delay: 0.5},
    )
  })

  return (
    <div className='w-full overflow-hidden'>
      {/* <AnimatedGridBackground/> */}
      <div className='relative z-10'>
        <div id='heroMessage' className='md:px-4 lg:px-2 pb-8 pt-8 z-10'>
        <HeroMessageAndCTA/>
      </div>
      <div id='bento' className='md:px-4 lg:px-2  relative z-10'>
        <BentoGrid/>
      </div>
      </div>
    </div>
  )
}
