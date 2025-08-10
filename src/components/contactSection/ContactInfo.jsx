import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='mrrobiulislm@gmail.com' Image={TfiEmail}/>
        <SingleInfo text='+880 1779 545007' Image={LuPhone}/>
        <SingleInfo text='South Goran, Khilgoan, Dhaka' Image={SlLocationPin}/>
    </div>
  )
}

export default ContactInfo