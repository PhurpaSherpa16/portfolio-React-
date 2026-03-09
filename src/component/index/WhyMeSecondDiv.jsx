import { Sprout } from "lucide-react";

export default function WhyMeSecondDiv() {
  return (
    <div className="bentoWhiteCard relative flex items-center justify-center">
        <h1 className="bentoH1 text-center text-(--secondaryText)">
            Thoughtful <span className="text-(--CTAbuttonColor1)">Architecture</span>, Sustainable Growth
        </h1>
        <Sprout className="text-(--CTAbuttonColor1) size-8 absolute bottom-4"/>
    </div>
  )
}