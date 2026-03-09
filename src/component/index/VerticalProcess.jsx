import { Palette, Code2, Rocket, TrendingUp } from "lucide-react"

export default function VerticalProcess() {
    const processes = [
        {
            title: "Design",
            icon: <Palette className="size-4" />,
            color: "var(--CTAbuttonColor1)",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            title: "Develop",
            icon: <Code2 className="size-4" />,
            color: "var(--CTAbuttonColor2)",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            title: "Deploy",
            icon: <Rocket className="size-4" />,
            color: "#10b981",
            bgColor: "bg-emerald-500/10",
            borderColor: "border-emerald-500/20"
        },
        {
            title: "Scale",
            icon: <TrendingUp className="size-4" />,
            color: "#f59e0b",
            bgColor: "bg-amber-500/10",
            borderColor: "border-amber-500/20"
        }
    ]

    return (
        <div className="flex flex-col h-full bg-(--secondaryBackgroundColor) rounded-lg border border-[var(--NavHeroSplit)] p-5 relative 
        overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 size-24 bg-indigo-500/5 blur-3xl rounded-full group-hover:bg-indigo-500/10 transition-colors" />

            <div className="relative flex flex-col h-full justify-between gap-8">
                {processes.map((process, index) => (
                    <div key={index} className="flex items-center gap-4 relative group/item">
                        {/* Connecting Line */}
                        {index !== processes.length - 1 && (
                            <div className="absolute left-[17px] top-8 w-[2px] h-[calc(100%-12px)] bg-gradient-to-b from-indigo-500/20 to-transparent z-0" />
                        )}

                        {/* Icon Node */}
                        <div className={`relative z-10 size-9 rounded-xl ${process.bgColor} border ${process.borderColor} flex items-center justify-center text-indigo-400 group-hover/item:scale-110 transition-transform duration-300 shadow-sm shadow-indigo-500/5`}>
                            {process.icon}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-(--secondaryText) font-bold opacity-60">Step 0{index + 1}</span>
                            <h3 className="text-sm font-bold text-(--primaryText) tracking-tight group-hover/item:translate-x-1 transition-transform">{process.title}</h3>
                        </div>

                        {/* Status Pulse */}
                        {index === 1 && ( // Assuming Develop is the current step for visual flair
                            <div className="ml-auto">
                                <span className="flex size-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full size-2 bg-purple-500"></span>
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}