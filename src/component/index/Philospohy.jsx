import { Sprout } from "lucide-react";

export default function Philospohy() {
    return (
        <div className="bentoWhiteCard h-fit w-full relative flex items-center justify-center">
            <h1 className="font-bold text-center text-(--secondaryText) space">
                    Thoughtful <span className="text-(--CTAbuttonColor1)">Architecture</span>, Sustainable Growth
            </h1>
            <Sprout className="text-(--CTAbuttonColor1) size-6"/>
        </div>
    )
}