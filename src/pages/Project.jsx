import { RiExternalLinkFill } from "react-icons/ri";
import { projects } from "../assets/data/dynamicData";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {SplitText } from 'gsap/all' 
import ExpenseTracker from '../assets/images/ExpenseTracker.png'
import NGO from '../assets/images/project3.png'
import portfolio from '../assets/images/project2.png'
import { Link } from "react-router-dom";



export default function ParallaxExample() {

  useGSAP(()=>{
    const cleanUp = gsap.context(()=>{
      const st = SplitText.create('.subtitle',{type:'words'})
    
      const tl = gsap.timeline({
        defaults:{
          ease:'power1.inOut', duration: 1
        },
        scrollTrigger:{
          trigger: '#project',
          start: "top center"
        }
      })
      tl.from('.Heading',{
        yPercent: 40,
        opacity: 0,
      })

      tl.from(st.words,{
        opacity: 0,
        yPercent: 40,
        stagger: 0.02
      }, '-=0.5')

      tl.from('.project-card',{
        opacity: 0, 
        yPercent: 40,
        stagger: 0.5
      },'-=0.75')

    })
    return ()=> cleanUp.revert()
  })

  return (
    <>
      <div id="project" className="p-4 lg:p-8 py-16 grid gap-16">
        <div className="lg:pt-12">
          <h1 className="Heading">Things I Made</h1>
          <p className="subtitle">Each project started with curiosity and grew into something real — these are the stories shaped through code.</p>
        </div>
        <div className="projects grid gap-8">
            {
              projects.map((item, index)=>(
                (index+1)%2 === 0 ?
                <div className="project-card grid grid-cols-12 gap-4 lg:py-8 lg:px-8
                bg-[var(--secondaryBackgroundColor)] p-4 rounded-lg border-1 border-[var(--NavHeroSplit)]
                shadow-sm
                items-center justify-center
                "  key={index}>
                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
                    <a href={item.path} target="blank" className="flex  gap-2 hover:underline cursor-pointer">
                      <h1 className="Heading2">{item.title}</h1>
                      <RiExternalLinkFill />
                    </a>
                    <p className="paragraph">{item.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((i, k)=>(
                        <p key={k}
                        className="technology">{i}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex lg:items-end lg:justify-end
                  overflow-hidden w-full h-fit object-cover">
                    <img src={item.image} alt="image" className="h-60 w-fit rounded-2xl"/>
                  </div>
                </div>
                :
                <div className="project-card grid grid-cols-12 gap-4 lg:py-8 lg:px-8
                bg-[var(--secondaryBackgroundColor)] p-4 rounded-lg border-1 border-[var(--NavHeroSplit)]
                shadow-sm
                items-center justify-center
                "  key={index}>
                  <div className="col-span-12 lg:col-span-6 overflow-hidden w-fit h-fit object-cover">
                    <img src={item.image} alt="image" className="h-60 w-fit rounded-2xl"/>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
                    <a href={item.path} target="blank" className="flex  gap-2 hover:underline cursor-pointer">
                      <h1 className="Heading2">{item.title}</h1>
                      <RiExternalLinkFill />
                    </a>
                    <p className="paragraph">{item.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((i, k)=>(
                        <p key={k}
                        className="technology">{i}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </>
  );
}
