import { useRouter } from 'next/router'
import React from 'react'
import POVDisplay from '../components/POVDisplay'

export default function DisplayPage() {
  const router = useRouter()
  // @ts-ignore
  const delay = router.query.delay as number
  return (
    <div className='bg-black min-h-full flex flex-col items-center justify-center'>
      <span className='text-center text-gray-800'>Delay: {delay}</span>
      <div className='bg-black min-h-full flex flex-col items-center justify-center'>
        <POVDisplay word="NITHRAN" delay={delay} />
      </div>
    </div>
  )
}
