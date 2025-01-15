import React from 'react'
function Siderbar({Links, activeTab, setActiveTab}) {


  return (
    <div className='flex flex-row items-center justify-center bg-secondaryLight md:rounded-2xl  p-2 lg:p-4 gap-4 w-full  fixed top-0 left-0 md:sticky md:top-4  z-20'>
      {Links?.map((i) => (
        <div key={i?.name} className={`hidden md:flex flex-col justify-center items-center gap-4  md:w-24 md:h-24 lg:hover:text-white lg:hover:bg-main rounded-2xl cursor-pointer ${activeTab === i?.name ? 'text-main md:bg-main md:text-white' : 'md:bg-link'}`}
        
        onClick={()=>{
          setActiveTab(i?.name)
        }}
        >
            <span className='text sm md:text-2xl'>
              {i?.icon}
            </span>

            <h5 className='text-xs md:text-sm font-bold uppercase'>
              {i?.name}
            </h5>
        </div>
      ))}
        {Links?.map((i) => (
        <a href={`#${i?.name}`}key={i?.name} className={`flex md:hidden flex-col justify-center items-center gap-4  md:w-24 md:h-24 lg:hover:text-white lg:hover:bg-main rounded-2xl cursor-pointer ${activeTab === i?.name ? 'text-main md:bg-main md:text-white' : 'md:bg-link'}`}
        
        onClick={()=>{
          setActiveTab(i?.name)
        }}
        >
            <span className='text sm md:text-2xl'>
              {i?.icon}
            </span>

            <h5 className='text-xs md:text-sm font-bold uppercase'>
              {i?.name}
            </h5>
        </a>
      ))}
    </div>
  )
}

export default Siderbar