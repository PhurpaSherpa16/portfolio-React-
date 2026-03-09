import featureProject from '../../assets/images/featured_project.png'
import { RiExternalLinkFill } from "react-icons/ri"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

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
                        <h1 className='bentoH1'>School CMS Platform</h1>
                        <p className='bentoP'>
                            React · Node.js · Supabase · Tailwind
                        </p>
                    </div>

                    <div className='max-w-md'>
                        <ul className='space-y-1'>
                            {["Built dynamic CMS for blogs, gallery, and jobs",
                                "Designed scalable database schema & REST APIs",
                                "Optimized performance with reusable components"].map((item, i) => (
                                <li key={i} className="bentoP flex items-start gap-2">
                                    <span className="mt-1.5 size-1.5 rounded-full bg-[var(--CTAbuttonColor1)] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 flex gap-2 absolute bottom-6 z-20">
                        <Link to="https://shikshadeep-academy-school.netlify.app/" className="bg-[var(--CTAbuttonColor1)] text-white bentoSmallButton"
                            target="_blank" rel="noopener noreferrer">
                            Live Site <RiExternalLinkFill className="text-xl" />
                        </Link>
                        <Link to="https://shikshadeep-academy-school.netlify.app/" className="bg-indigo-200/30 text-(--primaryTextColor) bentoSmallButton"
                            target="_blank" rel="noopener noreferrer">
                            Case Study <MoveRight className="text-xl" />
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative hidden md:block">
                    <div className="featured-image absolute h-full w-full inset-0 flex items-center justify-center">
                        <img className="md:h-100 2xl:h-80 2xl:w-60 size-80 object-cover object-top rotate-10 border-2 border-(--primaryBackgroundColor) rounded-lg drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                            src={featureProject} alt="FeatureProject"/>
                    </div>
                </div>
            </div>
        </div>
    )
}