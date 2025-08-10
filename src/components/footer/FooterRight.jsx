import React from 'react'
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experiences" },
  { link: "Project", section: "projects" },
  { link: "Contact", section: "contact" },
];
const FooterRight = () => {
  return (
    <div>
        <ul className='flex gap-4 text-lightGrey text-xl'>{
            links.map((item,index)=>{
                return (<li key={index} className='hover:text-cyan transition-all duration-500 cursor-pointer'>
                            <a href='#'>{item.link}</a>
                        </li>)
            })
        }
        </ul>
    </div>
  )
}

export default FooterRight