import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/PP.PNG)] bg-left lg:bg-[15%] bg-cover'
     style={{backgroundSize:"35%"}}
     >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-20px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[50px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">This is</p>
                <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Muhammad</p>
                <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Khurram</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
