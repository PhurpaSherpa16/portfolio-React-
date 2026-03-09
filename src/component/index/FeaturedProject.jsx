import { RiExternalLinkFill } from "react-icons/ri"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import {projects} from '../../assets/data/Site'
import gettingIconOfTech from "../../utils/gettingIconOfTech"

export default function FeaturedProject() {
    const containerRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('.featured-image', {
            x: 50,
            opacity: 0,
            duration: 1.2,
        })
            .from('.featured-content > *', {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
            }, "-=0.8")
    }, { scope: containerRef })

    const fetauredProject = projects.filter((item)=>item.featured)[0]

    return (
        <div ref={containerRef} className='bentoWhiteCard h-96 md:h-full p-0 2xl:p-6 overflow-hidden relative group min-h-[350px]'>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--CTAbuttonColor1)]/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
                {/* Content Side */}
                <div className="featured-content flex-1 p-6 flex flex-col justify-center space-y-4">
                    <div>
                        <span className="px-3 py-1 rounded-full bg-[var(--CTAbuttonColor1)]/10 text-[var(--CTAbuttonColor1)] text-xs font-medium uppercase">
                            Spotlight
                        </span>
                    </div>
                    <div className='space-y-3'>
                        <div>
                             <span className="text-[10px] uppercase tracking-widest
                            text-center text-[var(--CTAbuttonColor1)] font-bold mb-1">
                                {fetauredProject.category}
                            </span>
                            <h1 className='bentoH1'>School CMS Platform</h1>
                        </div>
                        <div className="flex item-center flex-wrap gap-2 max-w-sm">
                            {fetauredProject.tech_stack.slice(0,3).map((item, index)=>(
                                <div key={index} className="flex items-center gap-2 h-fit">
                                    <span className='bentoP inline-flex gap-2 items-center'>{item}{gettingIconOfTech(item)}</span>
                                    {index !== 3 - 1 && (
                                    <div className="size-1 bg-(--secondaryText) rounded-full"/>
                                    )}
                                </div>
                            ))}
                            {fetauredProject.tech_stack.length > 3 && (
                                <span className="text-[10px] text-[var(--secondaryText)] self-center spaceNormal">
                                    +{fetauredProject.tech_stack.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className='max-w-md'>
                        <ul className='space-y-1'>
                            {fetauredProject.features.slice(0,4).map((item, i) => (
                                <li key={i} className="bentoP flex items-start gap-2">
                                    <span className="mt-1.5 size-1.5 rounded-full bg-[var(--CTAbuttonColor1)] shrink-0" />
                                    {item}
                                </li>
                            ))}
                            {fetauredProject.features.length > 4 && (
                                <div className="pt-1">
                                    <span className="text-[10px] font-semibold text-[var(--CTAbuttonColor1)] bg-indigo-100/50 px-2 py-0.5 rounded-full
                                    spaceNormal">
                                        +{fetauredProject.features.length - 4} More
                                    </span>
                                </div>
                            )}
                        </ul>
                    </div>

                    <div className="pt-4 flex gap-2 absolute bottom-6 z-20">
                        <Link to={fetauredProject.live_url} className="bg-[var(--CTAbuttonColor1)] text-white bentoSmallButton"
                            target="_blank" rel="noopener noreferrer">
                            Live Site <RiExternalLinkFill className="text-xl" />
                        </Link>
                        <Link to={`/project/view/${fetauredProject.id}`} className="bg-indigo-200/30 text-(--primaryTextColor) bentoSmallButton">
                            Case Study <MoveRight className="text-xl" />
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative hidden md:block">
                    <div className="featured-image absolute h-full w-full inset-0 flex items-center justify-center">
                        <img className="md:h-100 2xl:h-80 2xl:w-60 size-80 object-cover object-top rotate-10 border-2 border-(--primaryBackgroundColor) rounded-lg drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                            src={fetauredProject.thumbnail} alt="FeatureProject"/>
                    </div>
                </div>
            </div>
        </div>
    )
}