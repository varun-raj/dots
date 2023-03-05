import React from 'react'
import { characterMap } from '../config/characterMap'

interface IPropTypes {
  character: string
}
export default function POVDots({ character }: IPropTypes) {
  const dots = characterMap[character]
  return (
    <div className="flex items-center justify-center">
      {dots.map((frame, index) => (
        <div key={index} className="mx-2">
          {frame.map((dot, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full ${dot === 1 ? 'bg-green-500' : 'bg-black'
                }`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
