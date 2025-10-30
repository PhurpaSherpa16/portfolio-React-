import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedGridBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const gridDivRef = useRef(null)
  const gridSize = 40
  const xAxis = Math.round(position.x / gridSize) * gridSize
  const yAxis = Math.round(position.y / gridSize) * gridSize

  useEffect(() => {
    const mouseMove = (e) => {
      if (gridDivRef.current) {
        const boundaries = gridDivRef.current.getBoundingClientRect()
        const tempX = e.clientX - boundaries.left
        const tempY = e.clientY - boundaries.top
        setPosition({ x: tempX, y: tempY })
      }
    }
    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  return (
    <div ref={gridDivRef} className="absolute z-0 h-full w-full">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--box) 1px, transparent 1px),
            linear-gradient(to bottom, var(--box) 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `radial-gradient(circle 50px at ${xAxis}px ${yAxis}px, rgba(255,255,255,1) 0%, 
            rgba(255,255,255,1) 50px, rgba(255,255,255,0) 100px)`,
          WebkitMaskImage: `radial-gradient(circle 50px at ${xAxis}px ${yAxis}px, rgba(255,255,255,1) 0%, 
            rgba(255,255,255,1) 50px, rgba(255,255,255,0) 100px)`,
        }}
      />
      <h1>Apple is red</h1>
    </div>
  )
}
