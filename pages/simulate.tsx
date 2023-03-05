import React from 'react'
import POVDisplay from '../components/POVDisplay'

export default function simulate() {
  const word = 'NITHRAN'
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
    >
      <div
        className="absolute top-0 left-0 h-full flex justify-center items-center"
        style={{
          animation: `moveDots 30ms 0ms linear infinite`,
        }}
      >
        <POVDisplay word={word} delay={40} />
      </div>
    </div>
  )
}
