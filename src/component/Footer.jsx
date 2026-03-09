import { Link } from 'react-router-dom';
import { socialSite } from '../assets/data/Site'

export default function Footer({ isCollapsed }) {
    return (
        <div className={`w-full transition-all duration-300 ${isCollapsed ? 'grid place-items-center' : 'flex flex-col'} gap-4`}>
            <div className={`${isCollapsed ? 'grid grid-cols-1 gap-5' : 'flex gap-4 items-center justify-start'} transition-all`}>
                {socialSite?.map((item, index)=>(
                    <Link key={index} to={item.link} target='_blank' rel="noopener noreferrer" title={item.label}>
                        {item.icon}
                    </Link>
                ))}
            </div>
            {!isCollapsed && (
                <p className='text-[10px] text-[var(--secondaryText)] leading-tight opacity-70 animate-in fade-in slide-in-from-bottom-1 duration-500'>
                    © 2025 · Crafted with ❤️ by Phurpa Sherpa || All rights reserved || Your data is safe with us, No spam guaranteed.
                </p>
            )}
        </div>
    )
}

