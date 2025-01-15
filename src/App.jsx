import React from 'react'
import Header from './components/Header'
import DefaultLayout from './components/Layout/DefaultLayout'
function App() {
  return (
    <div className='bg-triangles bg-secondary text-primary font-pop'> 
        <section className='px-4 max-w-2xl  lg:max-w-7xl mx-auto min-h-screen '>
          <main className='grid grid-cols-1 lg:grid-cols-6 gap-y-4 md:gap-y-4 md:gap-8 mt-10 md:mt-0'>
            <div className='col-span-4 lg:col-span-2'>
            <Header/>
            </div>

            <div className='col-span-4 lg:pt-20'>
              <DefaultLayout/>
            </div>

            <main>

            </main>
          </main>

        </section>
    </div>
  )
}

export default App