import React, { useEffect, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiMessage3Fill } from "react-icons/ri";
import { FaShareSquare } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Alert from './Alert';



export default function SenMessage({setMessageMode}) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('Hello, I would like to connect with you. Thank you!');
    const [error, setError] = useState({
        type: '',
        message: ''
    });

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setError({
                type: '',
                message: ''
            })
        }, 3000)
        return () => clearTimeout(timeOut)
    },[error])

    const handleEmailValidation = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleSendMessage = (e) =>{
        e.preventDefault()
        setError({
            type: '',
            message: ''
        })
        console.log(email, message)
        
        if(email==='' || message===''){
            setError({
                type: 'error',
                message: 'Please fill in all fields.'
            })
            return;
        }

        if(!handleEmailValidation(email)){
            setError({
                type: 'error',
                message: 'Email address invalid.'
            })
            return;
        }
        try{
            setError({
                type: 'success',
                message: 'Message sent successfully!'
            });
            setEmail('');
            setMessage('');
        }
        catch(err){
            setError({
                type: 'error',
                message: 'Failed to send message.'
            })
        }
    }

  return (
    <div className='w-full lg:w-fit top-40 lg:top-60 h-fit flex fixed z-20 px-4'>
      <div className='p-8 bg-[var(--secondaryBackgroundColor)]/60 backdrop-blur-3xl
      border border-[var(--NavHeroSplit)] grid gap-4
      rounded-lg shadow-lg relative'>
        <IoMdCloseCircle className='h-5 w-5 absolute right-4 top-4 cursor-pointer'
        onClick={()=>setMessageMode(false)}/>
        <div className='w-full'>
            <h1 className='leading font-bold text-xl'>Have something in mind?</h1>
            <div className='w-fit'>
                <span className='text-[var(--secondaryText)]'>
                Share your thoughts, project goals,
                or any creative idea.
            </span>
            </div>
        </div>
        {error.message &&
        <Alert error={error.message} type={error.type}/>
        }
        <div className='relative pt-4 grid gap-4 w-full'>
            <div className='relative flex items-center w-full'>
                <input type="text" value={email} placeholder='your-email@gmail.com' 
                className='border w-full border-[var(--NavHeroSplit)] rounded p-2 pl-10
                bg-[var(--secondaryBackgroundColor)] text-[var(--primaryTextColor)] tracking-wider'
                onChange={(e)=>setEmail(e.target.value)}
                />
                <HiOutlineMail className='h-6 w-6 absolute left-2'/>
            </div>
            <div className='relative flex items-start w-full'>
                <textarea rows={6} value={message} type="text" placeholder='share your thought via this, thank you ! 😍' 
                className='border w-full border-[var(--NavHeroSplit)] rounded p-2 pl-10
                bg-[var(--secondaryBackgroundColor)] text-[var(--primaryTextColor)] tracking-wider'
                onChange={(e)=>setMessage(e.target.value)}/>
                <RiMessage3Fill className='h-6 w-6 absolute left-2 top-2'/>
            </div>
            <button className='flex gap-2 items-center justify-center w-full lg:w-1/2 py-2 px-6 text-white
            bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] rounded
        cursor-pointer hover:shadow-lg transitonSmooth
        '
        onClick={handleSendMessage}
        >Share
                <FaShareSquare className='h-5 w-5'/>
            </button>
        </div>
      </div>
    </div>

  )
}
