import React from 'react'
import ContactFrom from './ContactFrom'

const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-3xl text-orange mb-4'>Get in touch</h2>
            <p className='text-white'>Feel free to reach out if you'd like to collaborate.<br/>You are just a few clicks away!</p>
        </div>
        <ContactFrom/>
    </div>
  )
}

export default ContactLeft