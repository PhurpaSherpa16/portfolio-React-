import React from 'react'
import NewsLetter from '@/component/contact/NewsLetter'
import SocialContact from '@/component/contact/SocialContact'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

export default function Contact() {
  useGSAP(() => {
    const cleanUp = gsap.context(() => {
      gsap.from('.first', {
        yPercent: 40, opacity: 0, duration: 1, ease: 'power1.inOut'
      })
      gsap.from('.second', {
        yPercent: 40, opacity: 0, duration: 1, ease: 'power1.inOut', delay: 0.3
      })
      gsap.from('.third', {
        yPercent: 40, opacity: 0, duration: 1, ease: 'power1.inOut',
        delay: 0.5, stagger: 0.4
      })

      const titleSplit = SplitText.create('.AnimatedLine', {
        type: 'lines',
      })
      const tl = gsap.timeline({ ease: 'power1.inOut' });
      tl.from(titleSplit.lines, {
        opacity: 0, duration: 1, yPercent: 80, ease: 'expo.inOut', stagger: 0.02, delay: 0.5
      })
    })
    return () => cleanUp.revert()
  }, [])

  return (
    <div className='relative w-full min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden'>
      <div className='mainDivLayout w-full max-w-6xl grid relative z-10 place-items-center'>
        <div className='first bentoWhiteCard p-8 overflow-hidden border-none shadow-none bg-transparent items-center text-center lg:items-center'>
          <div className='max-w-2xl'>
            <h1 className='AnimatedLine Heading font-bold space text-4xl md:text-5xl mb-4 tracking-tighter'>
              Start Your Next Journey
            </h1>
            <p className='AnimatedLine subtitle text-lg md:text-xl text-[var(--secondaryText)] font-medium'>
              Let's collaborate and bring your vision to life. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </div>
        </div>
        <div className='second'>
            <NewsLetter />
        </div>
      </div>
    </div>
  )
}
