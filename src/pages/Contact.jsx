import React from 'react'
import NewsLetter from '../component/contact/NewsLetter'
import SocialContact from '../component/contact/SocialContact'
import ContactInfo from '../component/contact/ContactInfo'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Contact() {
  useGSAP(()=>{
    gsap.fromTo('.mainDiv div',
      {yPercent:40, opacity:0},
      {yPercent:0, opacity:1, ease:'power1.inOut', delay:0.5, stagger:0.02,
        duration:1,
      }
    )
  },[])

  return (
    <div className='h-full w-full flex flex-col min-h-screen items-center justify-center gap-8
    p-4'>
      <div className='mainDiv grid gap-9 pt-16 lg:pt-0'>
        <div className='headingDiv'>
          <div>
              <h1 className='Heading font-bold'>Start Your Next Journey</h1>
              <h2 className='subtitle text-[var(--secondaryText)]'>
                Let's collaborate and bring your vision to life
              </h2>
          </div>
        </div>
        <div className='contactDiv grid lg:flex gap-8'>
          <div className='div1'>
            <NewsLetter/>
          </div>
          <div className='div2'>
            <SocialContact/>
          </div>
        </div>
      </div>
    </div>
  )
}
