import { BsLinkedin } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function FeaturedSocialLink() {
    return (
        <div className="h-full grid place-items-center">
            <Link to="https://www.linkedin.com/in/phurpa-sherpa-6a3b2b1b2/" className="inline-flex gap-2
            font-semibold transition-all hover:gap-4 active:scale-95
            text-sm" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                    <BsLinkedin/>
                    Linkedin</span> 
                <RiExternalLinkFill className="text-xl" />
            </Link>
        </div>
    )
}