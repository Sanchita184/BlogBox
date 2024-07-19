import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkTheme } from '../../app/features/themeSlice/themeSlice';

import Logo from '../../assets/Logo.svg'
import Moon from '../../assets/Moon.svg'
import Sun from '../../assets/Sun.svg'
import Button from '../Button/Button';

const Navbar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.theme.darkMode)

    return (
        <div className='md:h-[4.50rem] border-2 border-border bg-white/30 drop-shadow-lg backdrop-blur-lg rounded-full my-8 relative flex items-center justify-between'>
            <div className='h-10 flex items-center md:w-[10%] ml-10'>
                <img src={Logo} alt="Logo" className='h-6' />
            </div>
            <div className='flex justify-center items-center font-[GillSans] text-md text-lightText pt-1'>
                <h1 className='px-2'>Home</h1>
                <h1 className='px-2'>Explore</h1>
            </div>
            <div className='flex justify-center items-center mr-10'>
                <img src={darkMode ? Sun : Moon} onClick={() => dispatch(toggleDarkTheme())} className='h-6 pr-3 cursor-pointer' />
                <Button text="Sign Up" textClassName="font-[GillSans] text-sm" className="md:w-[4.75rem] md:h-[2rem] bg-buttonBg rounded-full flex justify-center items-center pt-1" />
            </div>

        </div>
    )
}

export default Navbar