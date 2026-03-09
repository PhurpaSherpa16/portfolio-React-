import { RiArrowLeftLine, RiArrowRightLine, RiExternalLinkFill, RiGithubFill } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import gettingIconOfTech from '../../../utils/gettingIconOfTech';
import { Link } from "react-router-dom";
import { Handshake, MoveRight } from "lucide-react";

export default function CaseStudy({ project, onPrev, onNext, onBack, prevProject, nextProject }) {
    if (!project) return null;

    return (
        <div className="container mx-auto flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Navigation */}
            <div className="flex items-center justify-between z-10 py-4 border-b border-[var(--NavHeroSplit)]">
                <button onClick={onBack}
                    className="flex items-center gap-2 text-sm font-semibold hover:text-[var(--CTAbuttonColor1)] transition-colors group">
                    <RiArrowLeftLine className="transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </button>
            </div>

            {/* Hero Section */}
            <div className="space-y-6">
                <div className="space-y-2 md:flex justify-between">
                    <div className='space-y-4'>
                        <span className="bentoP uppercase tracking-widest text-[var(--CTAbuttonColor1)]">
                            {project.category} — {project.timeline}
                        </span>
                        <h1 className="text-4xl font-bold font-serif">
                            {project.title}
                        </h1>
                        <p className="bentoP text-[var(--secondaryText)] italic">
                            "{project.tagline}"
                        </p>
                    </div>

                    <div className="flex gap-4 h-fit">
                        {/* {project.live_url && (
                            <Link to={project.live_url} target="_blank" rel="noopener noreferrer" className="bentoSmallButton text-[var(--CTAbuttonColor1)] bg-indigo-200/30 gap-2
                            border border-[var(--NavHeroSplit)] shadow hover:shadow-lg transition-all group min-w-40
                            px-8">
                                Live Site <RiExternalLinkFill className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        )} */}
                    </div>
                </div>

                <div className="aspect-[21/9] w-full overflow-hidden rounded-3xl border border-[var(--NavHeroSplit)] shadow-lg">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover object-top"/>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Summary Info */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="space-y-4 bg-[var(--secondaryBackgroundColor)] p-6 rounded-2xl border border-[var(--NavHeroSplit)]">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--secondaryText)] mb-2">Role</h3>
                            <p className="bentoH1">{project.role}</p>
                        </div>
                        <Separator className="bg-[var(--NavHeroSplit)]" />
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--secondaryText)] mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-indigo-200/30 rounded font-medium
                                    flex items-center gap-2">
                                        {tech}
                                        {gettingIconOfTech(tech)}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Separator className="bg-[var(--NavHeroSplit)]" />
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--secondaryText)] mb-2">Status</h3>
                            <p className={`bentoH1 font-semibold w-fit px-2 py-1 rounded-lg ${project.status === 'Completed' ? 'text-green-600 bg-green-200/20' : ''}`}>{project.status}</p>
                        </div>
                    </div>
                </div>

                {/* Right: Detailed Narrative */}
                <div className="lg:col-span-8 space-y-12">
                    <section className="space-y-4">
                        <h2 className="bentoH1 border-l-4 border-[var(--CTAbuttonColor1)] pl-4">The Challenge</h2>
                        <p className="text-lg text-[var(--secondaryText)] leading-relaxed text-justify">
                            {project.problem}
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="bentoH1 border-l-4 border-[var(--CTAbuttonColor1)] pl-4">The Solution</h2>
                        <p className="text-lg text-[var(--secondaryText)] leading-relaxed text-justify">
                            {project.solution}
                        </p>
                    </section>

                    {project.process && (
                        <section className="space-y-6">
                            <h2 className="bentoH1 border-l-4 border-[var(--CTAbuttonColor1)] pl-4">The Process</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(project.process).map(([key, value], i) => (
                                    <div key={key} className="p-5 bg-[var(--secondaryBackgroundColor)] rounded-xl border border-[var(--NavHeroSplit)] hover:border-[var(--CTAbuttonColor1)]/30 transition-colors">
                                        <h4 className="text-sm font-bold uppercase tracking-tighter text-[var(--CTAbuttonColor1)] mb-2">{key}</h4>
                                        <p className="text-sm text-[var(--secondaryText)] leading-relaxed">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold border-l-4 border-[var(--CTAbuttonColor1)] pl-4">Key Features</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 p-4 bg-[var(--NavHeroSplit)]/20 rounded-lg">
                                    <div className="mt-1 size-2 rounded-full bg-[var(--CTAbuttonColor1)] shrink-0" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="rounded-2xl border p-8 text-center space-y-4 bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] border-[var(--NavHeroSplit)]
                    hover:shadow-lg transition-all text-white
                    ">
                        <h3 className="bentoH1 font-semibold font-serif">
                            Interested in how this was built?
                        </h3>

                        <p className="text-sm text-white/60 max-w-md mx-auto">
                            Explore the live project, dive into the code, or get in touch to discuss similar ideas.
                        </p>

                        <div className="gird place-items-center justify-center gap-4 space-y-4 pt-4">

                            <Link to={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2
                            text-black bg-white py-2 rounded-full w-fit
                            border border-[var(--NavHeroSplit)] shadow hover:shadow-lg transition-all group text-sm
                            px-8">
                                Let's Work Together <Handshake className="transition-transform group-hover:translate-x-1 size-4" />
                            </Link>
                            {project.live_url && (
                                <Link to={project.live_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2
                                transition-all group hover:bg-indigo-200/20 py-2 px-6 rounded-full text-sm">
                                    Live Site <RiExternalLinkFill className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="pt-10 lg:pt-20 pb-10">
                <Separator className="mb-12 bg-[var(--NavHeroSplit)]" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {prevProject ? (
                        <button
                            onClick={onPrev}
                            className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-[var(--secondaryBackgroundColor)] border border-[var(--NavHeroSplit)] hover:border-[var(--CTAbuttonColor1)] transition-all text-left"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--secondaryText)] flex items-center gap-2">
                                <RiArrowLeftLine /> Previous Project
                            </span>
                            <div className="flex items-center gap-4">
                                <img src={prevProject.thumbnail} className="size-16 rounded-lg object-cover" alt="" />
                                <h4 className="text-xl font-bold group-hover:text-[var(--CTAbuttonColor1)] transition-colors">{prevProject.title}</h4>
                            </div>
                        </button>
                    ) : <div />}

                    {nextProject ? (
                        <button
                            onClick={onNext}
                            className="group flex flex-col items-end gap-4 p-6 rounded-2xl bg-[var(--secondaryBackgroundColor)] border border-[var(--NavHeroSplit)] hover:border-[var(--CTAbuttonColor1)] transition-all text-right"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--secondaryText)] flex items-center gap-2">
                                Next Project <RiArrowRightLine />
                            </span>
                            <div className="flex items-center gap-4 flex-row-reverse">
                                <img src={nextProject.thumbnail} className="size-16 rounded-lg object-cover" alt="" />
                                <h4 className="text-xl font-bold group-hover:text-[var(--CTAbuttonColor1)] transition-colors">{nextProject.title}</h4>
                            </div>
                        </button>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
