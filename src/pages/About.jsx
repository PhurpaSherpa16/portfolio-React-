import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import SplitText from 'gsap/SplitText'
import Lottie from 'lottie-react';
import ManYoga from '../../public/YogaGuy.json'
import Arrow from '../component/index/Arrow'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";



export default function About() {
    const tech = useRef(null)
    useGSAP(()=>{
        const cleanUp = gsap.context(()=>{
            gsap.from('.first',{
                yPercent:40, opacity:0, duration: 1, ease:'power1.inOut'
            })
            gsap.from('.second',{
                yPercent:40, opacity:0, duration: 1, ease:'power1.inOut', delay: 0.3
            })
            gsap.from('.third',{
                yPercent:40, opacity:0, duration: 1, ease:'power1.inOut',
                delay: 0.5, stagger: 0.4
            })
            
            const titleSplit = SplitText.create('.abotMe',{
                type:'lines',
            })
            const tl = gsap.timeline({ ease: 'power1.inOut' });
            tl.from(titleSplit.lines,{
                opacity:0, duration: 1, yPercent:80, ease:'expo.inOut', stagger: 0.02, delay: 0.5
            })
        })
        return ()=>cleanUp.revert()
    },[])
  

  return (
    <div className='h-fit pb-32 lg:pb-0 lg:min-h-screen flex-center pt-16'>
        <div className='px-4 md:px-8 lg:px-16 h-full grid gap-8'>
            <div className='h-fit w-full flex-center'>
                <div className='w-full flex-center flex-col gap-8 overflow-hidden'>
                    <div className='headingDiv w-full'>
                        <div>
                            <h1 className='abotMe Heading font-bold'>Turning Vision into Code</h1>
                            <h2 className='abotMe subtitle text-[var(--secondaryText)]'>
                                I blend creativity, code, and clarity to transform ideas into meaningful digital experiences.
                            </h2>
                        </div>
                    </div>
                    <div className='first w-full flex items-center justify-between gap-16 relative'>
                        <div className='w-fit h-fit col-span-4 bg-[var(--secondaryBackgroundColor)] p-4 md:p-8 rounded-lg shadow-lg border borderColor
                        grid gap-2 '>  
                            <p className='abotMe italic font-medium'>"Each line of code is a step toward better design.”</p>
                            <p className='abotMe w-full lg:max-w-100 text-justify text-[var(--secondaryText)]'>
                            <span className=' font-bold text-[var(--primaryTextColor)] font-s'>Hi,👋 I’m  Phurpa Sherpa — a front-end developer</span> passionate about creating clean, 
                            modern, and interactive web experiences. <span className='font-bold text-[var(--primaryTextColor)]'>I love minimalist, modern, responsive design and smooth interactions</span> that improve user experience. 
                            Every project is crafted with scalability and maintainability in mind, ensuring your website looks and performs great today and in the future. 
                            Thus, I use the latest web technologies and best practices to deliver high-quality code that meets goal - 
                            <span className='font-bold text-[var(--primaryTextColor)]'>(React, Next Js, Tailwind, GSAP, Figma).</span>
                            </p>
                        </div>
                        <div className='hidden lg:block relative col-span-4 w-100 h-100 flex-center'>
                            <Lottie className='absolute h-60 w-60 md:h-80 md:w-80 lg:h-120 lg:w-120' animationData={ManYoga} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-center w-full overflow-hidden'>
                <div className='second bg-[var(--secondaryBackgroundColor)] p-4 md:p-8 rounded-lg shadow-lg border borderColor
                w-full grid md:flex items-center justify-between gap-4'>
                    <h1 className='abotMe text-2xl md:text-4xl font-bold w-full lg:w-4/5'>Let’s build something awesome together!</h1>
                    <div className='md:w-2/5 grid gap-4'>
                        <div className='third w-full'>
                            <Link to={'/contact'} type='button' className={`abotMe buttonHero w-full py-2 flex text-white flex-center
                            border borderColor shadow hover:shadow-lg transitonSmooth
                            bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] rounded-lg
                            cursor-pointer`}>
                                Let's talk
                                <Arrow/>
                            </Link>
                        </div>
                        <div className='third w-full'>
                            <button type='button' className={`buttonHero w-full py-2 flex text-white flex-center
                            border borderColor shadow hover:shadow-lg transitonSmooth
                            rounded-lg bg-[#0a094c]/60 hover:bg-[#0a094c]
                            cursor-pointer items-center justify-center gap-2`}>
                                View My Work 
                                <FaExternalLinkAlt/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
