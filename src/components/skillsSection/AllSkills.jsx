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
const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center gap-2 relative justify-center max-w-[1200px] mx-auto'>
            {skills.map((item,index)=>{
                return (
                    <motion.div 
                        variants={fadeIn('up',`0.${index}`)} initial='hidden' whileInView='show' viewport={{once:false,amount:0}} >
                        <SingleSkills key={index} text={item.skill} imgSvg={<item.icon/>}/>
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default AllSkills