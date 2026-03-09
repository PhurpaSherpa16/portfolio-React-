import { useState } from "react"

export default function useChatForm() {
    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    const [userMessage, setUserMessage] = useState('')
    const [hasContact, setHasContact] = useState(false)
    const [accumulatedMessage, setAccumulatedMessage] = useState('')
    const [data, setData] = useState({
        message: '',
        sender: 'user',
        email: '',
        time: formatTime(new Date()),
    })

    const handleChange = (e) => {
        setUserMessage(e.target.value)
    }

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    const linkedinRegex = /(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?/g

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        const currentMsg = userMessage.trim()
        if (!currentMsg) return

        const foundEmail = currentMsg.match(emailRegex) ? currentMsg.match(emailRegex)[0] : false
        const foundLinkedin = currentMsg.match(linkedinRegex) ? currentMsg.match(linkedinRegex)[0] : false
        const contact = foundEmail ? foundEmail : (foundLinkedin ? foundLinkedin : false)

        // Accumulate messages regardless of contact presence
        const updatedAccumulated = accumulatedMessage
            ? `${accumulatedMessage} | ${currentMsg}`
            : currentMsg

        setAccumulatedMessage(updatedAccumulated)

        if (contact) {
            setHasContact(true)
            setData({
                message: updatedAccumulated, // Store all piled up messages
                sender: 'user',
                email: contact,
                time: formatTime(new Date()),
            })
        }

        setUserMessage('')
        return { message: currentMsg, contact: contact }
    }


    return { data, setData, userMessage, setUserMessage, handleChange, handleSubmit, hasContact, formatTime }
}