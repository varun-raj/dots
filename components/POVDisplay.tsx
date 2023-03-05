import React, { useEffect, useState } from 'react'
import { characterMap } from '../config/characterMap'

interface IPropTypes {
  word: string
  delay?: number
}

export default function POVDisplay({ word, delay = 20 }) {

  const FRAME_COUNT = 7
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrameIndex((currentFrameIndex + 1) % (word.length * FRAME_COUNT))
    }, delay)
    return () => clearInterval(timer)
  }, [currentFrameIndex, delay, word])


  const currentCharIndex = Math.floor(currentFrameIndex / FRAME_COUNT)
  const currentChar = word[currentCharIndex % word.length]
  const currentFrame = currentFrameIndex % FRAME_COUNT
  const currentDots = characterMap[currentChar][currentFrame]

  return (
    <div className="POVDotsWord flex flex-col items-center justify-center h-full space-y-2">
      {currentDots.map((dot, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full ${dot === 1 ? 'bg-green-500' : 'bg-black'
            }`}
        />
      ))}
    </div>
  )
}
