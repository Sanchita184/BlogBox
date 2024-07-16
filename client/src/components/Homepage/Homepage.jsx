import React from 'react'
import Grid from '../../assets/Grid.svg'

const Homepage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center dark:bg-slate-900'>
            <img src={Grid} alt="Grid" className='absolute top-[12rem]' />
            <div className='absolute'>
                <h1 className='text-3xl'><span>Stories</span> that connect <br /> Ideas that <span>Inspire</span></h1>
            </div>
        </div>
    )
}

export default Homepage