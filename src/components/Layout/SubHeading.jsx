import React from 'react'

function SubHeading({title}) {
  return (
    <div className='mb-4'>
        <h5 className='text-base md:text-2xl text-primaryLight font-bold capitalize'>{title}</h5>
    </div>
  )
}

export default SubHeading