import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";


export default function Loading({text}){
    return(
        <div className={cn( "flex flex-col items-center justify-center gap-4 animate-in fade-in duration-500")}>
            <div className="relative flex items-center justify-center">
                {/* Outer pulse ring */}
                <div className="absolute size-12 rounded-full border-4 border-blue-dark/20 animate-ping" />

                {/* Middle spinning ring */}
                <div className="size-8 rounded-full border-4 border-t-blue-dark border-r-transparent border-b-blue-dark border-l-transparent animate-spin" />

                {/* Inner icon */}
                <Loader2 className="absolute size-4 text-blue-dark animate-pulse" />
            </div>

            <p className="text-sm font-bold text-(--secondaryText) uppercase animate-pulse">
                {text}
            </p>
        </div>
    )
}