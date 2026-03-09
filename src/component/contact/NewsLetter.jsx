import { useState } from 'react'
import project from '../../assets/images/project2.png'
import Arrow from '../index/Arrow'
import { IoIosSend } from "react-icons/io";
import { toast } from "sonner";

export default function NewsLetter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSendMessage = async () => {
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!message || message.trim().length < 5) {
      toast.error("Please enter a message (at least 5 characters).");
      return;
    }

    setStatus('sending');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      toast.success("Message sent successfully!");
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      toast.error("Failed to send message. Please try again.");
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className='relative bg-[var(--secondaryBackgroundColor)] h-full w-full rounded-xl 
    border-1 border-[var(--NavHeroSplit)]
    shadow-md'>
      <div className='clipContent h-full
       p-8 flex flex-col gap-4  w-full'>
        <div className='flex flex-col gap-6'>
          <h2 className='bentoH1 font-medium font-serif'>Have Something To Tell
          </h2>
          <div className='flex gap-6 w-full'>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'sending'}
              className='py-2 px-4 text-sm bg-gray-200 text-black w-full lg:pr-32 border-1 border-[var(--NavHeroSplit)]
              rounded-lg outline-none focus:border-[var(--CTAbuttonColor1)] transition-all'/>
          </div>
          <div className='flex gap-6 w-full'>
            <textarea
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === 'sending'}
              className='py-2 px-4 text-sm bg-gray-200 text-black w-full lg:pr-32 border-1 border-[var(--NavHeroSplit)]
              rounded-lg outline-none focus:border-[var(--CTAbuttonColor1)] transition-all min-h-[120px] resize-none'/>
          </div>
        </div>
        <div>
          <button
            onClick={handleSendMessage}
            disabled={status === 'sending'}
            className={`buttonHero cursor-pointer text-white py-2 w-full
            flex gap-2 items-center justify-center
            rounded-full text-sm
            bg-gradient-to-l to-[var(--CTAbuttonColor2)] from-[var(--CTAbuttonColor1)]
            origin-left
            transition-all duration-300 ease-in-out ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <IoIosSend
              className={`icon transition-all duration-300 ease-in-out ${status === 'sending' ? 'animate-pulse' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  )
}
