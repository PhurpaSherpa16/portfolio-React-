import React from 'react';
import { Send } from 'lucide-react';

const ChatInput = ({ ...chatProps }) => {
    const { userMessage, setUserMessage, handleChange, handleSubmit } = chatProps
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="mt-auto w-full group">
            <div className="relative flex items-center transition-all duration-300">
                <input
                    type="email"
                    placeholder="Enter message..."
                    className="w-full bg-[var(--primaryHoverHelper)] border border-[var(--NavHeroSplit)] rounded-2xl px-4 py-3 pr-12 text-sm 
                    focus:outline-none focus:border-[var(--CTAbuttonColor1)] focus:ring-1 focus:ring-[var(--CTAbuttonColor1)]/20 transition-all 
                    placeholder:text-[var(--secondaryText)]"
                    value={userMessage}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="absolute right-2 p-2 bg-gradient-to-r from-[var(--CTAbuttonColor2)] to-[var(--CTAbuttonColor1)] text-white rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all group-focus-within:shadow-indigo-500/20"
                    onClick={handleSubmit}
                >
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
