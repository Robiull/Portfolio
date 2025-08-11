import React from 'react'
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactFrom = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');

    emailjs
      .sendForm('service_ddt040v', 'template_y0lh0rd', form.current, {
        publicKey: '4l1-rluDlCMtqWpHN',
      })
      .then(
          (result) => {
            console.log('Email sent:', result.text);
            setButtonText('Sent!');
            setIsSending(false);
            form.current.reset();
    
            //reset button after a few seconds
            setTimeout(() => {
              setButtonText('Send');
            }, 3000);
        },
        (error) => {
          console.error('Email error:', error.text);
          setButtonText('Error');
          setIsSending(false);

          // Optional: reset button after a few seconds
          setTimeout(() => {
            setButtonText('Send');
          }, 3000);
        },
      );
  };
  return (
    <div>
        <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
            <input name='from_name' type='text' placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <input name='from_email' type='email' placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <textarea name='message' type='text' placeholder='How can i help you?' rows='9' cols='50' required className='rounded-lg bg-lightBrown p-2'/>
            <button type='submit' className='w-full rounded-lg bg-cyan border border-cyan text-white h-12 text-xl font-bold hover:bg-darkCyan transition-all duration-500' disabled={isSending}>{buttonText}</button>
        </form>
    </div>
  )
}

export default ContactFrom