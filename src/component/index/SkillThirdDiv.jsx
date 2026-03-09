import { Code } from 'lucide-react'
import { aboutMe } from '../../assets/data/Site'
import gettingIconOfTech from '../../utils/gettingIconOfTech'

export default function SkillThirdDiv() {
    const skills = aboutMe.techStack.flatMap(item => item.skills || [])
  return (
    <div className="bentoWhiteCard px-6 lg:py-2 2xl:px-10 md:py-16">
        <div>
            <h1 className='bentoH1 text-center lg:text-left'>
                Technologies I use.</h1>
            <p className='bentoP text-center lg:text-left'>
            Engineering scalable, production-ready systems.
            </p>
        </div>

        <div className='space-y-3 text-sm flex flex-wrap gap-4 justify-center lg:justify-start'>
            {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 h-fit">
                    <span className='bentoP inline-flex gap-2 items-center'>{skill}{gettingIconOfTech(skill)}</span>
                    {index !== skills.length - 1 && (
                    <div className="size-1 bg-(--secondaryText) rounded-full"/>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}