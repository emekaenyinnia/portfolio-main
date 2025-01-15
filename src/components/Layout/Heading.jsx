import React from 'react'

function Heading({title}) {
  return (
    <div className='mb-4'>
        <h5 className='text-lg md:text-3xl text-primaryLight font-bold capitalize'>{title}</h5>
        <div className='w-12 h-[4px] rounded-full bg-main mt-3'></div>
    </div>
  )
}

export default Heading