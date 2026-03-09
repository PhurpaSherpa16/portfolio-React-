import { BsLinkedin } from "react-icons/bs";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { socialSite } from '../../assets/data/Site'


export default function FeaturedSocialLink() {
    const linkedin = socialSite[2]
    return (
        <div className="h-full grid place-items-center">
            <Link to={linkedin.link} className="inline-flex gap-2
            font-semibold transition-all hover:gap-4 active:scale-95
            text-sm" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                    {linkedin.icon}
                    {linkedin.label}</span> 
                <RiExternalLinkFill className="text-xl" />
            </Link>
        </div>
    )
}