import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../../framerMotion/variants'

const SubSkillPic = () => {
  return (
    <motion.div
        variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once:false,amount:0}}
        className='border-y-2 border-lightGray relative'>
            <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full'></div>
            <img 
                    src='../../public/images/subSkills.jpg' alt='sub SKill Image'
            />
    </motion.div>
  )
}

export default SubSkillPic