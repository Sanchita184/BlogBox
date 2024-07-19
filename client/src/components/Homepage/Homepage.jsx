import React from 'react'
import { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import axios from 'axios'

import Line from '../../assets/Line.svg'
import Pen from '../../assets/Pen.svg'
import Blob from '../../assets/Blob.svg'

import Button from '../Button/Button'
import BlogCard from '../BlogCard/BlogCard'

const Homepage = () => {
    const [blogs, setBlogs] = useState([]);

    // Using Axios
    const fetchMoviesWithAxios = () => {
        axios.get('https://dummyapi.online/api/blogposts')
            .then(response => setBlogs(response.data))
            .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        fetchMoviesWithAxios(); // or fetchMoviesWithAxios();
    }, []);

    return (
        <div className='w-full flex justify-center items-center relative flex-col dark:bg-black' >
            <div className='relative w-full h-[400px] flex justify-center items-center flex-col'>
                <img src={Blob} alt="" className='w-full absolute -top-5 -z-10' />

                <div className='w-fit relative flex justify-center items-center text-black mt-10'>
                    <h1 className=' lg:text-7xl font-[Diastema]' >Stories that connect <br />Ideas that <span className='font-[Pinyon] lg:text-8xl'>Inspire</span></h1>
                    <img src={Line} alt="" className='absolute bottom-0 right-0 ' />
                </div>

                <Button text="Write" textClassName="font-[GillSans] text-lg text-black" className="lg:w-[7rem] lg:h-[3rem] bg-buttonBg rounded-full flex justify-center items-center pt-1 mt-10" img={Pen} />

            </div>

            {/* <div className='max-w-full h-[300px] relative overflow-hidden flex border-2 border-red-400'> */}
            {/* <div className='w-[150px] h-full absolute bg-gradient-to-r from-white to-white/10 z-10'></div>
                <div className='w-[150px] h-full absolute right-0 bg-gradient-to-r from-white/10 to-white z-10'></div> */}

            <Marquee className='h-[300px] overflow-hidden border-2 border-red-400' pauseOnHover gradient gradientColor='white' gradientWidth={200}>
                {blogs.map(blog => (
                    <BlogCard key={blog.id} title={blog.title} author={blog.author} date={blog.date_published} content={blog.content} />
                ))}
            </Marquee>


        </ div >
    )
}

export default Homepage