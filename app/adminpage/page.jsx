"use client"

import Adminpage from '@/components/adminpage'
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { signOut } from 'next-auth/react'
import ResultsView from '@/components/ResultsView'

const page = () => {
  const defaultContent = "hello welcome to the world of next ui"
  return (
    <div className='flex flex-col justify-center items-center mt-36 w-full px-12'>
      <h1 className='text-center text-3xl text-gray-700 mb-4'>Admin page</h1>
      <Accordion variant='splitted' className='flex flex-col gap-4'>
      <AccordionItem className='bg-white py-4 px-3 rounded outline-none shadow-md' key="1" aria-label="Result form" title="Result form">
        <Adminpage/>
      </AccordionItem>
      <AccordionItem className='bg-white py-4 px-3 rounded outline-none shadow-md' key="2" aria-label="Results" title="Results">
        <ResultsView/>
      </AccordionItem>
      <AccordionItem className='bg-white py-4 px-3 rounded outline-none shadow-md' key="3" aria-label="Team points" title="Team points">
        {defaultContent}
      </AccordionItem>
      <AccordionItem className='bg-white py-4 px-3 rounded outline-none shadow-md' key="4" aria-label="Individual points" title="Individual points">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    <button onClick={() => signOut()} className='mt-6 bg-red-500 px-4 py-3 rounded text-white w-fit'>Logout</button>
    </div>
  )
}

export default page