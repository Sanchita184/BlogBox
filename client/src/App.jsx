import React, { useEffect } from 'react'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <div className={`h-screen w-full flex items-center flex-col ${darkMode ? 'dark' : ''}`}>
      <div className='h-full w-full flex items-center flex-col dark:bg-darkBg'>
        <div className='md:w-2/3 lg:h-full lg:w-1/2'>
          <Navbar />
          <Homepage />
        </div>
      </div>
    </div>
  )
}

export default App