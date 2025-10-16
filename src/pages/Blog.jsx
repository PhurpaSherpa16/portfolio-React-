import AnimatedGridBaclground from "../component/index/AnimatedGridBaclground";
import Spline from "@splinetool/react-spline";

export default function GridSpotlight() {

  return (
    <div className="relative h-screen w-full">
        <AnimatedGridBaclground/>
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        {/* <h1 className="text-white text-4xl font-bold">Move your mouse ✨</h1> */}
        
        {/* 3D view */}
        {/* <Spline className="cursor-pointer" scene="https://prod.spline.design/Lr8PRNq3mFqoP8UT/scene.splinecode" /> */}
            <Spline style={{scale:0.6}} scene="https://prod.spline.design/Lr8PRNq3mFqoP8UT/scene.splinecode" />
      </div>
    </div>
  );
}