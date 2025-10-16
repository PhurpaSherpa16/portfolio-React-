import { useTheme } from '../themeHandler/ThemeProvider'
import Arrow from './Arrow'
import { BsStars } from "react-icons/bs";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all' 
gsap.registerPlugin(ScrollTrigger, SplitText)


export default function HeroMessageAndCTA() {
  const {theme} = useTheme()

  
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
    <div className='flex flex-col gap-4 overflow-visible px-4'>
      <div className='overflow-hidden'>
        <p className='welcomeMessage text-xs uppercase text-[var(--CTAbuttonColor1)] font-medium tracking-wider flex items-center gap-1'>
        <BsStars className='h-5 w-5'/>
        Welcome to My Portfolio</p>
      </div>
      <h1 className='heroText uppercase'>
        Frontend developer with a <br/> focus on UI/UX.👋
        </h1>
        <button type='button' className={`buttonHero w-fit flex items-center gap-4 py-3 px-16 xl:px-32 
       ${theme === 'light'? 'text-white':'text-white'} uppercase tracking-widest font-bold
        border-1 border-gray-50/60 shadow-sm shadow-black/30 hover:shadow-lg transition-transform
        bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] rounded-full`}>
          Let's talk
          <Arrow/>
        </button>
    </div>
  )
}
