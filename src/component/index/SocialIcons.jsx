import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';


export default function SocialIcons() {
  return (
    <div className='w-fit md:w-full grid gap-2 p-4'>
        <div className='grid items-end justify-end gap-4 md:flex md:justify-between md:items-center'>
            <a href="https://github.com/PhurpaSherpa16" target='blank' title='Gitbub'>
            <BsGithub className='h-8 w-full socialIcons'/>
            </a>
            <a href="https://www.instagram.com/" target='blank' title='Instagram'>
            <BsInstagram className='h-8 w-full socialIcons'/>
            </a>
            <a href="https://www.x.com/" target='blank' title='X'>
            <BsX className='h-8 scale-200 socialIcons'/>
            </a>
            <a href="https://www.linkedin.com/in/phurpa-sherpa-260a3a121/" target='blank' title='facebook'>
            <FaLinkedin className='h-8 scale-120 socialIcons'/>
            </a>
        </div>
        <h6 className='hidden md:block text-sm text-center'>© 2025, Crafted with ❤️ || Built with React & Tailwind </h6>
    </div>
  )
}
