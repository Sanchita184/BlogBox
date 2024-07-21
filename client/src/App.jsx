import Homepage from './components/Homepage/Homepage'
import Navbar from './components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <BrowserRouter>
      <div className={`h-screen w-full flex items-center flex-col ${darkMode ? 'dark' : ''}`}>
        <div className='h-full w-full flex items-center flex-col dark:bg-darkBg'>
          <div className='md:w-2/3 lg:h-full lg:w-1/2'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/profile' element={<Navbar />} />
              <Route path='/my-feed' element={<Navbar />} />
              <Route path='/explore' element={<Navbar />} />
              <Route path='/create-blog' element={<Navbar />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App