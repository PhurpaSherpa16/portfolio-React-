import React from 'react';

const ChatMessage = ({ sender, text, time, avatar }) => {
    const isMe = sender === 'user';

    return (
        <div className={`flex w-full mb-4 ${isMe ? 'flex-row-reverse' : 'flex-row'} items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500`}>
            {/* Avatar */}
            <div className="flex-shrink-0">
                <img
                    src={avatar}
                    alt={sender}
                    className="size-8 rounded-full border border-[var(--NavHeroSplit)] object-cover shadow-sm bg-[var(--primaryHoverHelper)]"
                />
            </div>

            {/* Message and Time Container */}
            <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[75%]`}>
                <div
                    className={`px-4 py-2 rounded-2xl text-sm 2xl:text-[15px] shadow-sm
                        ${isMe
                            ? 'bentoWhiteCard rounded-br-none'
                            : 'bg-[var(--primaryHoverHelper)] text-[var(--primaryTextColor)] rounded-bl-none border border-[var(--NavHeroSplit)]'
                        }`}
                >
                    <p className="leading-relaxed">{text}</p>
                </div>
                {/* Time */}
                <span className="text-[10px] text-[var(--secondaryText)] mt-1 px-1">
                    {time}
                </span>
            </div>
        </div>
    );
};

export default ChatMessage;
