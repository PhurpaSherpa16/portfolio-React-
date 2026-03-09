import { useTheme } from '../themeHandler/ThemeProvider'
import Arrow from './Arrow'
import { BsStars } from "react-icons/bs";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import SenMessage from '../SenMessage';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
gsap.registerPlugin(ScrollTrigger, SplitText)


export default function HeroMessageAndCTA() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  const { theme } = useTheme()
  useGSAP(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        const hero = new SplitText('.heroText', { type: 'lines' });

        gsap.from(hero.lines, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          ease: 'power1.inOut',
          stagger: 0.2,
          delay: 1.3,
        });

        gsap.from('.welcomeMessage', {
          opacity: 0,
          yPercent: 50,
          duration: 1,
          ease: 'power1.inOut',
          delay: 1.4,
        });

        gsap.from('.buttonHero', {
          opacity: 0,
          delay: 1,
        });
      });
    });

    return () => ctx.revert();
  }, []);



  return (
    <div className='flex flex-col gap-4 overflow-visible relative z-20 pt-16 md:pt-8 lg:pt-0'>
      <div className='space-y-3'>
        <div className='overflow-hidden'>
          <p className='welcomeMessage text-xs uppercase text-[var(--CTAbuttonColor1)] 
          tracking-wider flex items-center justify-center md:justify-start gap-1 w-full'>
            <BsStars className='size-4' />
            Welcome to My Portfolio</p>
        </div>
        <div>
            <h1 className='heroText uppercase space text-center md:text-left'>
              Crafting intuitive UI {isPortrait && '-'} {!isPortrait && <br/>} Building scalable systems.
            </h1>
        </div>
      </div>
      <div className='grid place-items-center md:place-items-start'>
        <Link to={'/contact'} className={`buttonHero w-fit flex items-center gap-4 py-2 px-8 lg:px-12
       text-white uppercase tracking-widest font-bold text-sm
        border-1 border-gray-50/60 shadow-sm shadow-black/30 hover:shadow-lg transition-transform
        bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] rounded-full
        cursor-pointer`}>Start Your Project
          <Arrow />
        </Link>
      </div>
    </div>
  )
}
