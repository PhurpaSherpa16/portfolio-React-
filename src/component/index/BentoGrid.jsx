import { BiDownload } from "react-icons/bi";
import featureProject from '../../assets/images/FeatureProject.svg'
import react from '../../assets/images/react.svg'
import figma from '../../assets/images/figma.svg'
import html from '../../assets/images/html.svg'
import javascript from '../../assets/images/javascript.svg'
import tailwind from '../../assets/images/tailwind.svg'
import astronut from '../../assets/images/astronut.svg'
import jupiter from '../../assets/images/jupiter.svg'
import earth from '../../assets/images/earth.svg'
import stars from '../../assets/images/stars.svg'
import { RiExternalLinkFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useTheme } from "../themeHandler/ThemeProvider";
import SkillCarousel from "./SkillCarousel";
import WatchFace from './watchFace'
import AnimatedGridBackground from "./AnimatedGridBaclground";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function BentoGrid() {
  const {theme} = useTheme()
  useGSAP(()=>{
    const tl = gsap.timeline({ease:'power1.inOut'})

    tl.from('.jupiter',{
      xPercent:-100, duration: 1, delay: 1.05
    }, 0)
    .from('.astronut',{
      yPercent:100, duration: 0.5, delay: 1.25
    }, 0)
    .from('.earth',{
      xPercent:100, duration: 0.8, delay: 1.5
    }, 0)

  })

  return (
    <div className='grid gap-6 lg:gap-4 p-4'>
      <div className='grid grid-cols-12 gap-6 lg:gap-4'>
        <div className='col-span-6 lg:col-span-3'>
            <WatchFace/>
        </div>
        <div className='col-span-6 relative lg:col-span-3 w-full border border-[var(--NavHeroSplit)]
        rounded-2xl overflow-hidden'>
            <div className='relative h-full w-full overflow-hidden'>
                <img
                  src="https://ik.imagekit.io/k05httq0p/Blog/NextResponsiveLoginRegisterForm.png?tr=w-800,h-500,q-80"
                  alt="Responsive login and register form preview"
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full relative"
                />
              {/* <div className="absolute z-20 h-full inset-0 w-full bg-black/40"/> */}
              <div className="
              absolute z-20 bottom-0 w-full p-4 pt-8 bg-gradient-to-t from-black/90 to-black/0">
                <a href="https://phurpasherpa-blog.vercel.app/blog/SOMakMJXlJd8dc3bkTKvB5b5pYl1_1761669285962" 
                target="blank" title="Blog on Responsive Login and Signup UI"
                className="font-medium text-white tracking-wide hover:underline">Next Js, Tailwind and GSAP</a>
                <div>
                  <p className='text-white/80'>Responsive Login & Signup UI</p>
                </div>
              </div>
            </div>
        </div>
        <div className={`col-span-12 lg:col-span-6 overflow-hidden rounded-2xl h-60 lg:h-full`}>
            <SkillCarousel/>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6 lg:gap-4'>
        <div className='col-span-12 xl:h-fit md:h-120 lg:col-span-6 card 
        cardTailwindAnim relative carBackground cardShadow overflow-hidden'>
          <AnimatedGridBackground/>
          <div className="absolute top-8 left-10">
              <p className="text-[var(--secondaryText)]">Spotlight</p>
              <div className="bg-gradient-to-l from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)]
              border-1 border-[var(--NavHeroSplit)] backdrop-blur-[20px] p-6 z-10 relative top-16 2xl:top-24 grid gap-2 rounded-2xl">
                <div>
                  <p className="cardTitle text-white">FinTech Finance</p>
                  <p className="text-white/60">Visual Charts for quick, <br />
                  confident decisons.</p>
                </div>
                <a className="flex items-center gap-2 text-white
                hover:underline" target="blank" href="https://expense-tracker-phurpa.netlify.app/">Case Study <RiExternalLinkFill
                className="text-[#ffea00]"/></a>
              </div>
          </div>
          <div className="w-full h-80 2xl:h-105">
            <img className="h-full w-fit absolute right-[-1rem]" src={featureProject} alt="FeatureProject" />
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4 w-full grid md:flex xl:grid gap-6 lg:gap-4'>
            <div className="flex items-center justify-center w-full md:w-1/2 lg:w-full
            rounded-2xl p-4 py-8 lg:py-4
            border-1 card border-[var(--NavHeroSplit)] bg-gradient-to-l from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)]
            ">
              <div className='grid gap-6 lg:gap-4'>
              <div>
                <p className='text-white font-medium tracking-wide'>Want to redesign your website?</p>
                <p className={`text-white/60`}>Your website deserves more than a facelift, 
                  it deserve a fresh, high performing experience. 
                </p>
              </div>
              <Link to={'/projects'} className={`${theme==='light'?'text-black':'text-white'}
              border-1 border-gray-100/20 w-fit px-8 rounded flex py-1 gap-2 items-center
              cursor-pointer bg-[var(--secondaryBackgroundColor)] transition-all
              shadow-sm hover:shadow-lg hover:shadow-black/60 flex-center`}>
                <span>View My Work</span>
                <RiExternalLinkFill/>
              </Link>
            </div>
            </div>
            <div className='cardTailwindAnim w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center carBackground cardShadow
            relative overflow-hidden'>
                <AnimatedGridBackground/>
                <div className="relative z-10 py-16 lg:py-6 flex-center flex-col">
                  <h1 className=" font-['Playfair'] font-bold leading-20 numbers bg-gradient-to-l from-[var(--CTAbuttonColor2)]
                to-[var(--CTAbuttonColor1)] text-transparent bg-clip-text">UI/UX</h1>
                <p className="text-[var(--secondaryText)] uppercase tracking-wide">Keep Minimial</p>
                </div>
            </div>
        </div>
        <div className='col-span-12 h-100 lg:h-full lg:col-span-2 bg-gradient-to-b from-[var(--CTAbuttonColor2)]
        overflow-y-hidden
        rounded-2xl card relative flex items-center justify-center cardShadow'>
            <a href={'https://phurpasherpa-blog.vercel.app/'} target="blank" className="text-4xl font-bold font-['Playfair'] relative bottom-5 z-20
            text-white ">Journal</a>
            <div className="absolute bottom-[-1rem] 2xl:left-3 left-0 z-20">
                <img src={astronut} alt="astronut" className="astronut h-50" />
            </div>
            <div className="absolute top-8 right-0">
                <img src={earth} alt="eart" className="earth h-30" />
            </div>
            <div className="absolute top-24 left-14 2xl:top-32">
                <img src={stars} alt="stars" className="h-6 2xl:h-12" />
            </div>
            <div className="absolute top-[-1rem] left-[-1.5rem]">
                <img src={jupiter} alt="jupter" className="jupiter h-30" />
            </div>
        </div>
      </div>
    </div>
  )
}
