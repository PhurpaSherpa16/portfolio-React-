import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsX } from 'react-icons/bs';


export default function SocialIcons() {
  return (
    <div className='w-fit md:w-full grid gap-2 p-4'>
        <div className='grid items-end justify-end gap-4 md:flex md:justify-between md:items-center'>
            <a href="https://www.facebook.com/" target='blank' title='Gitbub'>
            <BsGithub className='h-8 w-full 
            hover:text-[var(--CTAbuttonColor1)] rounded-full cardShadow'/>
            </a>
            <a href="https://www.facebook.com/" target='blank' title='Instagram'>
            <BsInstagram className='h-8 w-full hover:text-[var(--CTAbuttonColor1)] rounded-lg cardShadow'/>
            </a>
            <a href="https://www.facebook.com/" target='blank' title='X'>
            <BsX className='h-8 scale-150 w-full hover:text-[var(--CTAbuttonColor1)]'/>
            </a>
            <a href="https://www.facebook.com/" target='blank' title='facebook'>
            <BsFacebook className='h-8 w-full hover:text-[var(--CTAbuttonColor1)] rounded-full cardShadow'/>
            </a>
        </div>
        <h6 className='hidden md:block text-sm text-center'>© 2025, Crafted with ❤️ || Built with React & Tailwind </h6>
    </div>
  )
}
