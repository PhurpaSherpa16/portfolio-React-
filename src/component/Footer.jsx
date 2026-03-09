import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { X } from 'lucide-react';

export default function Footer({ isCollapsed }) {
    return (
        <div className={`w-full transition-all duration-300 ${isCollapsed ? 'grid place-items-center' : 'flex flex-col'} gap-4`}>
            <div className={`${isCollapsed ? 'grid grid-cols-1 gap-5' : 'flex gap-4 items-center justify-start'} transition-all`}>
                <a href="https://github.com/PhurpaSherpa16" target='_blank' rel="noopener noreferrer" title='Github'>
                    <BsGithub className='size-4 text-[var(--secondaryText)] hover:text-[var(--CTAbuttonColor1)] transition-colors duration-300 hover:scale-120' />
                </a>
                <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" title='Instagram'>
                    <BsInstagram className='size-4 text-[var(--secondaryText)] hover:text-[var(--CTAbuttonColor1)] transition-colors duration-300 hover:scale-120' />
                </a>
                <a href="https://www.x.com/" target='_blank' rel="noopener noreferrer" title='X'>
                    <X className='size-4 text-[var(--secondaryText)] hover:text-[var(--CTAbuttonColor1)] transition-colors duration-300 hover:scale-120' />
                </a>
                <a href="https://www.linkedin.com/in/phurpa-sherpa-260a3a121/" target='_blank' rel="noopener noreferrer" title='Linkedin'>
                    <BsLinkedin className='size-4 text-[var(--secondaryText)] hover:text-[var(--CTAbuttonColor1)] transition-colors duration-300 hover:scale-120' />
                </a>
            </div>
            {!isCollapsed && (
                <p className='text-[10px] text-[var(--secondaryText)] leading-tight opacity-70 animate-in fade-in slide-in-from-bottom-1 duration-500'>
                    © 2025 · Crafted with ❤️ by Phurpa Sherpa || All rights reserved || Your data is safe with us, No spam guaranteed.
                </p>
            )}
        </div>
    )
}