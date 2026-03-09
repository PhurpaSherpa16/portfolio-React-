import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import {SplitText } from 'gsap/all' 

export function useProjectAnimation({sectionId, wordClassName, cardDiv, title}){
    useGSAP(()=>{
        const animate = gsap.context(()=>{
            const wordAnimate = SplitText.create(wordClassName, {type:'words'})

            const sectionAnimate = gsap.timeline({
                defaults:{
                    ease:'power1.inOut', duration: 1,
                },
                scrollTrigger:{
                    trigger: sectionId,
                    start: "top center"
                }})
            
            const titleSplit = SplitText.create(title, {type:'lines'})
            sectionAnimate.from(titleSplit.lines,{
                opacity:0, duration: 1, yPercent:80, ease:'expo.inOut', stagger: 0.02, delay: 0.5
            })

            sectionAnimate.from(wordAnimate.words,{
                opacity: 0,
                yPercent: 40,
                stagger: 0.02
            }, '-=0.5')

            sectionAnimate.from(cardDiv,{
                opacity: 0, 
                yPercent: 40,
                stagger: 0.5
            },'-=0.75')
        })
        return ()=> animate.revert()
    })
}