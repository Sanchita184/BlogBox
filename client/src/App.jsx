import React, { useEffect } from 'react'
import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      <Homepage />
    </div>
  )
}

export default App