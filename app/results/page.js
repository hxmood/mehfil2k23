import ResultCard from '@/components/ResultCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col space-y-4 items-center justify-center'>
      <h1 className='font-extrabold text-xl text-green-700'>Results</h1>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
      <ResultCard/>
    </div>
  )
}

export default page
