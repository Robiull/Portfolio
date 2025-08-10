import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import SingleContactSocial from './SingleContactSocial'

const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContactSocial link='https://github.com/Robiull' Icon={FaGithub}/>
        <SingleContactSocial link='https://www.linkedin.com/in/md-robiul-islam-sohag/' Icon={FaLinkedin}/>
        <SingleContactSocial link='https://www.facebook.com/mohammad.robiul.islam.sohag' Icon={FaFacebook}/>
    </div>
  )
}

export default ContactSocial