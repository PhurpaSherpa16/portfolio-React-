import React from 'react'
import NewsLetter from '../component/contact/NewsLetter'
import SocialContact from '../component/contact/SocialContact'
import ContactInfo from '../component/contact/ContactInfo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

export default function Contact() {
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
            
            const titleSplit = SplitText.create('.AnimatedLine',{
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
    <div className='h-full w-full flex flex-col min-h-screen items-center justify-center gap-8
    p-4'>
      <div className='mainDiv grid gap-8 pt-16 lg:pt-0'>
        <div className='first headingDiv'>
          <div>
              <h1 className='AnimatedLine Heading font-bold'>Start Your Next Journey</h1>
              <h2 className='AnimatedLine subtitle text-[var(--secondaryText)]'>
                Let's collaborate and bring your vision to life
              </h2>
          </div>
        </div>
        <div className='contactDiv grid lg:flex gap-8'>
          <div className='second'>
            <NewsLetter/>
          </div>
          <div className='third'>
            <SocialContact/>
          </div>
        </div>
      </div>
    </div>
  )
}
