import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
const FooterMain = () => {
  return (
    <div className='px-4 text-white'>
        <div className='w-full h-[1px] bg-lightGray mt-24'></div>
        <div className='md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden'>
            <FooterLeft/>
            <FooterRight/>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown'>
            &copy; 2025 MD.Robiul Islam. All rights reserved.
        </p>
    </div>
  )
}

export default FooterMain