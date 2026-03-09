import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import profileDefault from '../../../assets/images/profileDefault.png'
import profileUser from '../../../assets/images/avatar User.jpg'
import useChatForm from '../../../hooks/useChatForm';
import { BsQuestion } from 'react-icons/bs';
import { CircleQuestionMark } from 'lucide-react';

export default function Chat() {
    const containerRef = React.useRef(null);
    const { userMessage, setUserMessage, handleChange, handleSubmit, hasContact } = useChatForm()
    const [isTyping, setIsTyping] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: 'user', text: "I have an idea but need help turning it into a real product.",
            time: formatTime(new Date()), avatar: profileUser
        },
        {
            sender: 'me', text: "Awsome. Let’s structure it properly from design to deployment.",
            time: formatTime(addMinutes(new Date(), 2)), avatar: profileDefault
        }
    ])

    const handleChatSubmit = (e) => {
        const result = handleSubmit(e)
        if (result && result.message) {
            const newUserMsg = {
                sender: 'user',
                text: result.message,
                time: formatTime(new Date()),
                avatar: profileUser
            }
            setMessages(prev => [...prev, newUserMsg])

            // 1. Initial pause (3 seconds) before starting to "type"
            setTimeout(() => {
                setIsTyping(true);

                // 2. Typing animation for another 2-3 seconds
                setTimeout(() => {
                    setIsTyping(false);

                    if (result.contact) {
                        setMessages(prev => [...prev, {
                            sender: 'me',
                            text: "Perfect, I’ve got it — I’ll get back to you within 24 hours.",
                            time: formatTime(new Date()),
                            avatar: profileDefault
                        }])
                    } else if (hasContact) {
                        setMessages(prev => [...prev, {
                            sender: 'me',
                            text: "This isn’t auto-generated — it’s a predefined query form. I’ve received your contact info and will get back to you within 24 hours!",
                            time: formatTime(new Date()),
                            avatar: profileDefault
                        }])
                    } else {
                        setMessages(prev => [...prev, {
                            sender: 'me',
                            text: "Could you provide your email or LinkedIn so we can continue the conversation?",
                            time: formatTime(new Date()),
                            avatar: profileDefault
                        }])
                    }
                }, 2000) // Duration of the typing animation
            }, 3000) // Initial delay before typing starts
        }
    }

    const chatProps = { userMessage, setUserMessage, handleChange, handleSubmit: handleChatSubmit }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages, isTyping])

    return (
        <div className="bentoWhiteCard h-full w-full relative flex flex-col items-start justify-between overflow-hidden !space-y-0 p-6">
            <div className="w-full pb-4 border-b border-[var(--NavHeroSplit)] mb-4">
                <h3 className="text-lg font-semibold tracking-tight">Let’s Talk</h3>
                <p title='Safe & secure. Will respect user privacy - No Spam' className='bentoP text-xs flex items-center gap-2'>About Your Project 
                    <CircleQuestionMark className='size-4'/>
                </p>
            </div>
            <div
                ref={containerRef}
                className="w-full h-50 flex-grow overflow-y-auto py-2 pr-1 custom-scrollbar"
            >
                <div className='grid place-items-center py-8'>
                    <img src={profileDefault} alt="PHURPA SHERPA" className="size-12 rounded-full" />
                    <div>
                        <h1 className='bentoH1 text-sm text-center flex items-center gap-2'>Phurpa Sherpa
                            <div className='h-2 w-2 bg-green-500 rounded-full' />
                        </h1>
                        <p className='bentoP text-xs text-center'>Web Developer</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} sender={msg.sender} text={msg.text} avatar={msg.avatar} time={msg.time} />
                    ))}
                    {isTyping && <TypingIndicator avatar={profileDefault} />}
                </div>
            </div>
            <ChatInput {...chatProps} />
        </div>
    );
}


const formatTime = (date) => {
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    })
}

const addMinutes = (date, minutesToAdd) => {
    const newDate = new Date(date)
    newDate.setMinutes(newDate.getMinutes() + minutesToAdd)
    return newDate
}