import { Link } from "react-router-dom";
import { useTheme } from "../themeHandler/ThemeProvider";
import {HeartHandshake } from "lucide-react";

export default function CTA() {
    const { theme } = useTheme()
  return (
    <div className="flex items-center p-6 2xl:px-10 w-full h-full rounded-lg
        border-1 card border-[var(--NavHeroSplit)] bg-(--secondaryBackgroundColor) hover:shadow-lg transition-all">
        <div className='flex flex-col gap-6 lg:gap-4'>
            <div className='space-y-2'>
                <h1 className='bentoH1'>Ready for a Better Product?</h1>
                <p className={`bentoP`}>
                    I help turn underperforming products into fast, structured, scalable systems. 
                </p>
            </div>
            <div className="w-fit">
                <Link to={'/projects'} className={`text-(--CTAbuttonColor1) bg-indigo-200/30 group bentoSmallButton`}>
                    Work With Me
                    <HeartHandshake className="group-hover:translate-x-1 transition-all duration-300" />
                </Link>
            </div>
        </div>
    </div>
  )
}