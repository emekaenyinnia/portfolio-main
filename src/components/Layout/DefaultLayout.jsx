import React, {useState} from 'react'
import Siderbar from './Siderbar'
import { TbUser,TbFile } from "react-icons/tb";
import { GrCodeSandbox } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { LuBook } from "react-icons/lu";
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
function DefaultLayout() {
    const [activeTab, setActiveTab] = useState('about');
      const Links = [
        {
          name:'about',
          icon: <TbUser/>,
          component:<About/>,
        },
        {
          name:'resume',
          icon: <TbFile/>,
          component:<Resume/>,
        },
        {
          name:'portfolio',
          icon:<GrCodeSandbox/>,
          component:<Portfolio/>,
        },
        {
          name:'blog',
          icon: <FiBookOpen/>,
          component:<Blog/>,
        },
        {
          name:'contact',
          icon:<LuBook/>,
          component:<Contact/>,
        },
      ]

      const activeComponent = Links.find((link) => link.name === activeTab)?.component;
  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-4 lg:gap-y-8 lg:gap-8 relative'> 
            {/* <div className='col-span-full'>
            <Siderbar Links={Links} activeTab={activeTab} setActiveTab={(e)=>setActiveTab(e)}/>
            </div> */}
            <div className='col-span-6 '>
              <div className='lg:sticky lg:top-0 my-4 z-50'>
              <Siderbar Links={Links} activeTab={activeTab} setActiveTab={(e)=>setActiveTab(e)}/>
              </div>

              <div className='bg-secondaryLight  rounded-2xl md:py-8 p-4 md:p-8'>
                {/* activeComponent */}
                {activeComponent}
              </div>
              
            </div>

        </div>
    </div>
  )
}

export default DefaultLayout