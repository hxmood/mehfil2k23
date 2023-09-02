import React from 'react'

const ResultCard = () => {
return (

    <div className='flex w-full flex-col bg-white shadow-md rounded-lg p-3'>
        <div className="flex w-full justify-between">
        <h1 className='font-semibold text-lg'>Elocution english</h1>
        <h2 className=''>junior</h2>
        
        </div>
        <hr className='mt-2 '/>
        <div className="flex flex-col mt-2 w-full space-y-2">
            <div className='flex flex-1 justify-between px-2'>
                <h2 className='font-bold'>1 <span className='font-normal'>Muhammad</span></h2>
                
                <h2 className='text-gray-600'>A</h2>
                <h2 className='text-gray'>10</h2>
            </div>
            
            <div className='flex flex-1 justify-between px-2'>
                <h2 className='font-bold'>2 <span className='font-normal'>Muhammad</span></h2>
                
                <h2 className='text-gray-600'>A</h2>
                <h2 className='text-gray'>10</h2>
            </div>

            <div className='flex flex-1 justify-between px-2'>
                <h2 className='font-bold'>3 <span className='font-normal'>Muhammad</span></h2>
                
                <h2 className='text-gray-600'>A</h2>
                <h2 className='text-gray'>10</h2>
            </div>
        </div>
        
    </div>
)
}

export default ResultCard