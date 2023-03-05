import React from 'react'
import POVDisplay from '../components/POVDisplay'

export default function DisplayPage() {
  return (
    <div className='bg-black min-h-full  flex flex-col items-center justify-center '>
      <POVDisplay word="NITHRAN" />
    </div>
  )
}
