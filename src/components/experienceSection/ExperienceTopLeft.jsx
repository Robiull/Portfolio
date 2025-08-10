import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special'>Since 2025</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number='1' text='years'/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number='2' text='websites'/>
        </div>
        <p className='text-white text-center'>With 1 years of experience building dynamic website</p>
        <ExperienceInfo number='$0k' text='Max budget'/>
    </div>
  )
}

export default ExperienceTopLeft