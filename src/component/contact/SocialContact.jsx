import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function SocialContact() {
  return (
    <div>
        <div className='clipContent rounded-xl shadow-md border-1 border-[var(--NavHeroSplit)]
        p-8 flex flex-col gap-6 bg-[var(--secondaryBackgroundColor)]'>
            <div className='flex items-center gap-4'>
                <div className='iconDiv'>
                    <MdOutlineEmail className='Socialicon'/> 
                </div>
                <div>
                    <h1>Email</h1>
                    <p>phurpasherpa.forntend-developer@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='iconDiv'>
                    <FaPhoneAlt className='Socialicon'/> 
                </div>
                <div>
                    <h1>Phone</h1>
                    <p>+977 - 9856XXXX</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='iconDiv'>
                    <FaLocationDot className='Socialicon'/> 
                </div>
                <div>
                    <h1>Location</h1>
                    <p>Kathmandu, Nepal</p>
                </div>
            </div>
        </div>
    </div>
  )
}
