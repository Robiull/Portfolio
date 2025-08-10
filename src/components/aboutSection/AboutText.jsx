import React from 'react'

const AboutText = () => {
  return (
    <div className=' flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>I would like to be a skilled Software Engineer utilizing my academic knowledge, patience, devotion and keen to learn new software techniques quickly. As a self-learner, I have enough ability and strength to develop any technological skill studying from scratch.I want to work as a Software Engineer to utilized my academic knowledge and keen to learn new software technique quickly. My goal is to develop my skills in performing high level tasks in a satisfactory and highly motivated way, contributing to the company
        </p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white'>My Project</button>
    </div>
  )
}

export default AboutText