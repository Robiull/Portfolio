import React from 'react'

const AboutPic = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden'>
            <img
                src='../../public/images/about-me.jpg' alt='about me' className='h-full w-auto object-cover'
            />
        </div>
        <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] -z-10 rounded-tl-[20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px]'></div>
    </div>
  )
}

export default AboutPic