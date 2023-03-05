import { useRouter } from 'next/router'
import React from 'react'
import POVDisplay from '../components/POVDisplay'

export default function Simulate() {
  const router = useRouter()
  // @ts-ignore
  const delay = router.query.delay as number
  const word = router.query.word as string || 'N'
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
    >
      <div
        className="absolute top-0 left-0 h-full flex justify-center items-center"
        style={{
          animation: `moveDots 1ms 0ms linear infinite`,
        }}
      >
        <POVDisplay word={word} delay={1} />
      </div>
    </div>
  )
}
