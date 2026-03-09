import { AlertCircle } from "lucide-react";

export default function Error({text}){
    return( 
        <div className={`flex flex-col items-center justify-center p-8 text-center 
        rounded-3xl gap-2 animate-in fade-in zoom-in duration-300`}>
            <div className="size-6 bg-(--NavHeroSplit) rounded-2xl shadow-sm flex items-center justify-center">
                <AlertCircle className="size-4 text-(--secondaryText)" />
            </div>
            <div className="space-y-1 max-w-sm">
                <p className="text-sm text-(--secondaryText) leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    )
}