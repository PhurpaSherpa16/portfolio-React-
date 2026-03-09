import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'
import Arrow from '@/component/index/Arrow'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";
import { aboutMe } from '../../assets/data/Site'
import { Code, Handshake, MapPin } from 'lucide-react'

export default function About() {
    const container = useRef(null)

    useGSAP(() => {
        const cleanUp = gsap.context(() => {
            // Intro animation
            const titleSplit = SplitText.create('.intro-text', {
                type: 'words',
            })
            gsap.from(titleSplit.lines, {
                opacity: 0,
                duration: 1.2,
                y: 50,
                ease: 'expo.out',
                stagger: 0.1,
                delay: 0.2
            })

            // Sections animation on scroll-like reveal (immediate for now as it's a single page)
            gsap.from('.section-reveal', {
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                delay: 0.8
            })

            // Tech badges animation
            gsap.from('.tech-badge', {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.out(1.7)',
                delay: 1.5
            })
        }, container)
        return () => cleanUp.revert()
    }, [])

    return (
        <div ref={container} className='container mx-auto'>
            <div className='mainDivLayout min-h-screen'>
                <div className='grid grid-cols-12 place-items-center w-full gap-8 pt-12 2xl:pt-32'>
                    {/* 1st */}
                    <div className='col-span-12 grid grid-cols-12 w-full gap-8 section-reveal'>
                        <div className='col-span-12 lg:col-span-8 bentoWhiteCard p-6 min-h-40 lg:min-h-60 flex lg:justify-end'>
                            <div className='h-fit w-fit grid gap-2'>
                                <p className='text-center lg:text-left text-[var(--muted-foreground)] text-sm font-light tracking-widest uppercase spaceNormal'>About Me</p>
                                <h1 className='text-center lg:text-left space heroText leading-[100%] max-w-sm lg:max-w-lg tracking-widest'>
                                    I build things
                                    for the <span className='text-[var(--CTAbuttonColor1)]'>web.</span>
                                </h1>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 bentoWhiteCard p-6 min-h-60
                        bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)]'>
                            <div className='grid place-items-center gap-4 w-full text-white'>
                                <MapPin className='size-8'/>
                                <div className='grid place-items-center'>
                                    <p className='spaceNormal bentoP text-white'>Based In</p>
                                    <h1 className='text-center spaceNormal bentoH1'>
                                        Kathmandu, Nepal
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd */}
                    <div className='col-span-12 grid grid-cols-12 w-full gap-8 section-reveal'>
                        {aboutMe.techStack.map((item, index)=>{
                            const Icon = item?.icon
                            return (<div key={index} className={`col-span-12 lg:col-span-4 bentoWhiteCard p-6 min-h-40 lg:min-h-60
                            ${item.category === 'Frontend' ? 'bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] text-white' 
                            : item.category === 'Tools' ? 'bg-indigo-200/20' : ''}`}>
                                <div className='grid gap-4 place-items-center lg:place-items-start'>
                                    <Icon className='size-8'/>
                                    <div>
                                        <p className={`spaceNormal bentoP text-lg tracking-wide font-bold text-center lg:text-left ${item.category === 'Frontend' ? 'text-white/60' : ''}`}>{item.category}</p>
                                        <div className="flex items-center gap-2">
                                            {item.skills?.map((skill, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                <span className='text-sm'>{skill}</span>

                                                {index !== item.skills.length - 1 && (
                                                    <span className="text-gray-400">•</span>
                                                )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                    {/* 3rd */}
                    <div className='col-span-12 grid grid-cols-12 w-full gap-8 section-reveal'>
                        <div className='col-span-12 lg:col-span-8 bentoWhiteCard p-6 min-h-50'>
                            <div className='grid gap-4'>
                                <p className='text-center lg:text-left text-[var(--muted-foreground)] font-light tracking-widest uppercase spaceNormal'>Summary</p>
                                <p className='text-sm text-center lg:text-left'>
                                    {aboutMe.intro}
                                </p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4 bentoWhiteCard p-6 min-h-50
                        grid place-items-center bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] border-[var(--NavHeroSplit)]
                        hover:shadow-lg transition-all text-white'>
                            <div>
                                <h3 className="bentoH1 font-semibold font-serif text-center">
                                Interested?
                                </h3>
                                <p className="text-sm text-white/60 max-w-md mx-auto text-center">
                                    If you have a project idea, collaboration, or opportunity, feel free to reach out.
                                </p>
                            </div>
                            <div className="gird place-items-center justify-center gap-4 space-y-4">
                                <Link to={''} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2
                                text-black bg-white py-2 rounded-full w-fit
                                border border-[var(--NavHeroSplit)] shadow hover:shadow-lg transition-all group text-sm
                                px-8">
                                    Let's Work Together <Handshake className="transition-transform group-hover:translate-x-1 size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
