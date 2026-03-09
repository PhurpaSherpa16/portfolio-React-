import { RiExternalLinkFill } from "react-icons/ri";
import gettingIconOfTech from "../../../utils/gettingIconOfTech";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ item }) {
    if (!item) return null
    return (
        <div className="grid grid-cols-12 gap-4 bg-indigo-100/10 border border-[var(--NavHeroSplit)] hover:shadow-lg transition-all p-4 rounded-lg h-full">
            <div className="col-span-12 h-50 2xl:h-70 w-full bentoWhiteCard relative p-1 space-y-0 shadow overflow-hidden group">
                <img src={item.thumbnail} alt={item.title} className="relative w-full h-full rounded-sm object-cover object-top 
                transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-3 h-fit">
                <div className="col-span-12 md:col-span-4 bentoWhiteCard h-fit md:h-50 overflow-hidden">
                    <div className="grid place-items-center space-y-2 ">
                        <span className="text-[10px] uppercase tracking-widest
                        text-center text-[var(--CTAbuttonColor1)] font-bold mb-1">
                            {item.category}
                        </span>
                        <h2 className="bentoH1 text-center">
                            {item.title}
                        </h2>
                        <div className="size-2 bg-green-500 rounded-full" />
                        <span className="text-[10px] uppercase tracking-widest
                        text-center text-[var(--CTAbuttonColor1)] font-bold mb-1">
                            {item.timeline}
                        </span>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8 flex flex-col gap-3">
                    <div className="border border-[var(--NavHeroSplit)] 
                     bg-[var(--secondaryBackgroundColor)] hover:shadow-lg transition-all p-4 rounded-lg">
                        <span className="text-[10px] uppercase tracking-widest text-[var(--CTAbuttonColor1)] font-bold mb-3 block">Project Summary</span>
                        <p className="bentoP italic line-clamp-3">
                            "{item.short_desc}"
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 h-full border border-[var(--NavHeroSplit)] 
                     bg-[var(--secondaryBackgroundColor)] hover:shadow-lg transition-all p-4 rounded-lg
                     items-center">
                        {item.tech_stack.slice(0, 3).map((tech, index) => (
                            <span key={index} className="px-2.5 h-fit py-1 text-[11px] font-semibold rounded-md bg-indigo-200/30 
                            border border-[var(--NavHeroSplit)] text-[var(--secondaryText)] flex items-center gap-2">
                                {tech}
                                {gettingIconOfTech(tech)}
                            </span>
                        ))}
                        {item.tech_stack.length > 3 && (
                            <span className="text-[10px] text-[var(--secondaryText)] self-center">
                                +{item.tech_stack.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-3">
                <div className="col-span-12 md:col-span-6 flex flex-col border border-[var(--NavHeroSplit)] bg-[var(--secondaryBackgroundColor)] hover:shadow-lg transition-all p-4 rounded-lg">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--CTAbuttonColor1)] font-bold mb-3 block">Features</span>
                    <div className="space-y-2.5">
                        {item.features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="size-4 rounded-full bg-indigo-200/50 text-[var(--CTAbuttonColor1)] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <p className="text-[12px] text-[var(--secondaryText)] leading-tight line-clamp-1">
                                    {feature}
                                </p>
                            </div>
                        ))}
                        {item.features.length > 2 && (
                            <div className="pt-1">
                                <span className="text-[10px] font-semibold text-[var(--CTAbuttonColor1)] bg-indigo-100/50 px-2 py-0.5 rounded-full">
                                    +{item.features.length - 2} More
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center gap-3 bg-[var(--CTAbuttonColor1)] p-4 rounded-lg
               hover:shadow-lg transition-all border border-[var(--NavHeroSplit)]">
                    <div className="rounded-full w-full group h-fit flex items-center justify-center">
                        <a
                            href={item.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-fit p-2 text-white cursor-pointer flex lg:gap-2 lg:px-6 text-sm items-center"
                        >
                            Live Preview <RiExternalLinkFill className="transition-transform group-hover:translate-x-1 ml-2" />
                        </a>
                    </div>
                    <div className="items-center justify-center h-fit w-full flex flex-wrap bg-white text-[#2f2dc8] transition-all p-2 rounded-full ">
                        <Link to={`/project/view/${item.id}`} className="flex items-center gap-2 font-medium group text-sm"
                            onClick={(e) => e.stopPropagation()}>
                            View Case Study
                            <MoveRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}