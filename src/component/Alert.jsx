import React from 'react'

export default function Alert({error, type}) {
  return (
    <div className={`absolute top-2 left-1/2 -translate-x-1/2 p-2 
      ${type==='error' ? 'bg-red-500' : 'bg-green-500'}
      text-white
    rounded`}>
      <span>{error}</span>
    </div>
  )
}
