import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import SkillThirdDiv from './SkillThirdDiv'
import CTA from './CTA'
import FeaturedProject from './FeaturedProject'
import WeatherDiv from "./weather/WeatherDiv";
import VerticalProcess from "./VerticalProcess";
import FeaturedSocialLink from "./FeaturedSocialLink";
import Philospohy from "./Philospohy";
import Chat from "./chat/Chat";

export default function BentoGrid() {
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
    <main className='grid gap-6 p-6'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-12  md:h-120 lg:col-span-6 relative'>
          <FeaturedProject/>
        </div>
        <div className='col-span-12 lg:col-span-6 gap-6 grid'>
              <SkillThirdDiv/>
              <div className="grid gap-6 grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                  <CTA/>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 relative flex flex-col gap-6 md:gap-16 lg:gap-6">
                  <Philospohy/>
                  <FeaturedSocialLink/>
                </div>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-6'>
        <div className={`col-span-12 lg:col-span-5 rounded-lg gap-6 grid`}>
            <Chat/>
        </div>
        <div className='col-span-12 lg:col-span-7 min-h-50 grid grid-cols-12 gap-6'>
          <div className='col-span-12 md:col-span-6 min-h-50'>
              <WeatherDiv/>
          </div>
          <div className='col-span-12 md:col-span-6 min-h-50'>
              <VerticalProcess/>
          </div>
        </div>
      </div>
    </main>
  )
}
