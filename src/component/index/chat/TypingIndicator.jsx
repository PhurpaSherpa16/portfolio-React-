import React from 'react';

const TypingIndicator = ({ avatar }) => {
    return (
        <div className="flex w-full mb-4 flex-row items-end gap-2 animate-in fade-in duration-300">
            {/* Avatar */}
            <div className="flex-shrink-0">
                <img
                    src={avatar}
                    alt="Phurpa Sherpa"
                    className="size-8 rounded-full border border-[var(--NavHeroSplit)] object-cover shadow-sm bg-[var(--primaryHoverHelper)]"
                />
            </div>

            {/* Typing Bubbles Container */}
            <div className="flex flex-col items-start bg-[var(--primaryHoverHelper)] px-4 py-3 rounded-2xl rounded-bl-none border border-[var(--NavHeroSplit)] shadow-sm">
                <div className="flex gap-1">
                    <div className="size-1.5 bg-[var(--secondaryText)] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="size-1.5 bg-[var(--secondaryText)] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="size-1.5 bg-[var(--secondaryText)] rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default TypingIndicator;
