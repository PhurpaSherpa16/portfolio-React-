import { Quote } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function WebDeveloperFirstDiv() {
  return (
    <div className='bentoWhiteCard space-y-0'>
      <div className='leftBorder relative grid place-items-center'>
        <p className='bentoPItalic relative z-10 text-justify'>As a web developer, focus on frontend — crafting responsive and intuitive interfaces — 
          while also building APIs and backend systems to deliver complete, scalable solutions.</p>
        <Quote className='text-[var(--secondaryText)]/10 absolute size-20'/>
      </div>
      <div className='flex items-end w-full justify-end h-fit'>
        <Avatar>
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}