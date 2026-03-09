import { Calendar, Code, Layers, TextAlignJustify } from 'lucide-react';
import gettingIconOfTech from '../../../utils/gettingIconOfTech';

export default function ProjectTable({ projects, setActiveIndex, setSelectedProjectIndex, selectedProjectIndex}) {
    return (
        <div className="w-full overflow-hidden rounded-xl border border-[var(--NavHeroSplit)] bg-[var(--secondaryBackgroundColor)] shadow-sm">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[var(--NavHeroSplit)] bg-[var(--primaryHoverColor2)]/30">
                            <th className="px-4 py-3 text-sm font-semibold tracking-wider">
                                <p className="flex items-center gap-2">
                                    <Code className="size-4" />
                                    Project
                                </p>
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold tracking-wider hidden md:table-cell">
                                <p className="flex items-center gap-2">
                                    <TextAlignJustify className="size-4" />
                                    Description
                                </p>
                            </th>
                            <th className="px-4 py-3 text-sm font-semibold tracking-wider hidden lg:table-cell">
                                <p className="flex items-center gap-2">
                                    <Layers className="size-4" />
                                    Tech Stack
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--NavHeroSplit)]">
                        {projects.map((project, index) => (
                            <tr key={project.id} onClick={() => setSelectedProjectIndex(index)}
                            onMouseEnter={()=>setActiveIndex(index)}
                            onMouseLeave={()=>setActiveIndex(null)}
                            className={`group cursor-pointer transition-all duration-200 border-0 hover:bg-[var(--primaryHoverColor2)]/50 ${selectedProjectIndex === index ? 'bg-[var(--primaryHoverColor2)] border-l-4 border-indigo-500' : ''}`}>
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className={`${selectedProjectIndex === index ? 'text-[var(--ActiveGColor)]' : ''} font-bold text-sm group-hover:text-[var(--ActiveGColor)] transition-colors`}>
                                            {project.title}
                                        </span>
                                        <span className="text-xs text-[var(--secondaryText)] md:hidden mt-1 line-clamp-1">
                                            {project.short_desc}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-4 hidden md:table-cell">
                                    <p className="bentoP line-clamp-2 max-w-xs">
                                        {project.short_desc}
                                    </p>
                                </td>
                                <td className="px-4 py-4 hidden lg:table-cell">
                                    <div className="flex gap-1.5 flex-wrap">
                                        {project.tech_stack.slice(0, 3).map((tech, i) => (
                                            <span key={i} className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-full bg-indigo-200/30 text-[var(--primaryTextColor)] border border-[var(--NavHeroSplit)]">
                                                {tech}
                                                {gettingIconOfTech(tech)}
                                            </span>
                                        ))}
                                        {project.tech_stack.length > 3 && (
                                            <span className="text-[10px] text-[var(--secondaryText)] self-center">
                                                +{project.tech_stack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}