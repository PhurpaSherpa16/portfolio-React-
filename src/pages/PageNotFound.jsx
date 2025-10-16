import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GridSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Calculate the nearest grid intersection
  const gridSize = 40;
  const nearestGridX = Math.round(pos.x / gridSize) * gridSize;
  const nearestGridY = Math.round(pos.y / gridSize) * gridSize;

  return (
    <div className="relative h-screen w-full  overflow-hidden">
      
      {/* grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `radial-gradient(circle 50px at ${nearestGridX}px ${nearestGridY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50px, rgba(255,255,255,0) 100px)`,
          WebkitMaskImage: `radial-gradient(circle 50px at ${nearestGridX}px ${nearestGridY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50px, rgba(255,255,255,0) 100px)`,
        }}
      />

      {/* foreground content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Page Not Found✨</h1>
        <Link to='/'>Return to home</Link>
      </div>
    </div>
  );
}