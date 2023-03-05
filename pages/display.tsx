import { useRouter } from 'next/router'
import React from 'react'
import POVDisplay from '../components/POVDisplay'

export default function DisplayPage() {
  const router = useRouter()
  // @ts-ignore
  const delay = router.query.delay as number
  const word = router.query.word as string || 'N'
  return (
    <div className='bg-black min-h-full flex flex-col items-center justify-center'>
      <span className='text-center text-gray-800'>Delay: {delay}</span>
      <div className='bg-black min-h-full flex flex-col items-center justify-center'>
        <POVDisplay word={word} delay={delay} />
      </div>
    </div>
  )
}
