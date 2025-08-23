import React from 'react'
import { PiHexagonLight } from "react-icons/pi";
import { motion } from "framer-motion";
import {fadeIn} from '../../framerMotion/variants'
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('right',0.4)} initial='hidden' whileInView='show' viewport={{once:false,amount:0}}  
      className=' h-full flex items-center justify-center pr-10'>
        <img
            src='/images/pic1.png' alt='Robiul' className='mx-h-[250px] w-auto'
        />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse '>
            <PiHexagonLight className='md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic