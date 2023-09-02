import React from 'react'
import HeroImage from "../assets/HeroImage.png"
import { TbArrowRightCircle } from 'react-icons/tb'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className="flex flex-col justify-center h-full">
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a full Stack Devloper</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a Fresher eager to apply my passion for software development and design to real-world projects.<br />
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Express JS and Node JS.
                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={1000}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300 '>  <TbArrowRightCircle size={25} className='ml-1' /></span>

                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-80' />
                </div>
            </div>

        </div>
    )
}

export default Home;
