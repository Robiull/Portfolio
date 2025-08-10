import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../../framerMotion/variants'

const SingleExperience = ({experienceInfo}) => {
  return (
    <motion.div
      variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once:false,amount:0}} 
      className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
        <p className='font-bold text-cyan'>{experienceInfo.job}</p>
        <p className='text-orange'>{experienceInfo.company}</p>
        <p className='text-lightBrown'>{experienceInfo.date}</p>
        <ul className='list-disc mt-4 pl-4 text-white'>
            {
                (experienceInfo.responsibility).map((resp,index)=>{
                    return <li key={index}>{resp}</li>
                })
            }
        </ul>
    </motion.div>
  )
}

export default SingleExperience