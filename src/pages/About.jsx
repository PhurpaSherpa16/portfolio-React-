import React, { useRef } from 'react'
import InProgress from './InProgress'
import {whatIdo, Skills} from '../assets/data/Content.json'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import SplitText from 'gsap/SplitText'

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
    <div>
        <div className='p-8 lg:p-16 px-4 md:px-8 grid gap-8 md:gap-12'>
            <div className='first'>
                <h1 className='Heading'>About Me</h1>
                <p className='subtitle'>A frontend developer passionate about turning ideas into polished, responsive, and engaging web experiences.</p>
            </div>
            <div className='second grid grid-cols-12 gap-8 md:gap-4'>
                <div className='AboutMeCard grid gap-4 p-8'>
                    <h1>My Journey</h1>
                    <p className='abotMe'>
                        I'm a passionate frontend developer with over 3 years of experience creating engaging and user-friendly web applications. I specialize in React, TypeScript, and modern web technologies.
                        <br /> <br />
                        My passion lies in transforming complex problems into simple, beautiful, and intuitive designs. I believe that great user experience is the key to successful digital products.
                    </p>
                </div>
                <div className='AboutMeCard p-8 flex flex-col gap-4'>
                    <h1>What I do?</h1>
                    <ul className='flex flex-col gap-2'>
                        {whatIdo.map((item, index)=>(
                        <li className='flex items-center gap-2' key={index}>
                            <div className='h-2 w-2 bg-[var(--CTAbuttonColor1)] rounded-full'/>
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='third tech grid gap-4'>
                <h1>Skills & Technologies</h1>
                <div className='technologyDiv flex gap-4 flex-wrap'>
                    {Skills.map((item, index)=>(
                        <div ref={tech} className='technology' key={index}>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
