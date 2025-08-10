import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {fadeIn} from '../../framerMotion/variants'
const experienceInfo=[
    {
        job:'Backend Developer',
        company:'Own',
        date:'2025-present',
        responsibility:[
            'Authentication and Authorization',
            'Regular users can submit reviews for tours',
            'Secure payment processing for tour bookings via Stripe',
            'Manage tours and bookings via the admin dashboard.'
        ]
    },
    {
        job:'Backend Developer',
        company:'Try to SomeWhere',
        date:'2025-present',
        responsibility:[
            'Authentication and Authorization',
            'Regular users can submit reviews for tours',
            'Secure payment processing for tour bookings via Stripe',
            'Manage tours and bookings via the admin dashboard.'
        ]
    }
]

const AllExperience = () => {
    const len=experienceInfo.length-1;
    console.log(len)
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between'>
            { 
                experienceInfo.map((experienceInfo,index)=>{
                   return( 
                        <>
                            <SingleExperience key={index} experienceInfo={experienceInfo}/> 
                            {index < len ? (
                                <motion.div variants={fadeIn('left',0.2)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}}>
                                    <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
                                </motion.div>
                                ) 
                                : ('')
                            }
                        </>
                   )
                })
            }
        </div>
    )
}

export default AllExperience