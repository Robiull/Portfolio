import React from 'react'
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import SingleSkills from './SingleSkills';
import { motion } from "framer-motion";
import {fadeIn} from '../../framerMotion/variants'

const skills=[
    {
        skill:"C++",
        icon:TbBrandCpp
    },
    {
        skill:"Python",
        icon:FaPython
    },
    {
        skill:"NodeJS",
        icon:FaNodeJs
    },
    {
        skill:"MongoDB",
        icon:SiMongodb
    },
    {
        skill:"RESTful API",
        icon:SiPostman
    },
    {
        skill:"SQL",
        icon:PiFileSqlFill
    },
    {
        skill:"React",
        icon:FaReact
    },
    {
        skill:"Tailwind",
        icon:SiTailwindcss
    }
]

const SkillsAllSmall = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return <motion.div 
                variants={fadeIn('up',0.2)} initial='hidden' whileInView='show' viewport={{once:false,amount:0}}
                key={index} className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-orange'/>
                    <p className=' text-white items-center mt-4 '>{item.skill}</p>
            </motion.div>
        })}
    </div>
  )
}

export default SkillsAllSmall