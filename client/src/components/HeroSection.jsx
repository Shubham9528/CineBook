import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import backgroundImage2 from '../assets/backgroundImage2.png'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-8 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen pt-32' style={{backgroundImage: `url(${backgroundImage2})`}}>

      <h1 className='text-3xl md:text-5xl md:leading-14 font-semibold max-w-110'>Your Movie Journey Starts Here.</h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Book • Watch • Enjoy</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'/> 24/7 Available
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> Instant Booking
        </div>
      </div>
      <p className='max-w-md text-gray-300'>Experience seamless movie ticket booking with CineBook. Browse latest releases, check showtimes, and book your favorite seats in just a few clicks. Your ultimate destination for hassle-free movie experiences.</p>
      <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
         Explore Movies
         <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  )
}

export default HeroSection
