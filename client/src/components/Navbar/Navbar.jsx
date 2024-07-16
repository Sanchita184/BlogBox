import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleDarkTheme } from '../../app/features/themeSlice/themeSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <div className='bg-white dark:bg-black'>
            <button onClick={() => dispatch(toggleDarkTheme())}>click me</button>
        </div>
    )
}

export default Navbar