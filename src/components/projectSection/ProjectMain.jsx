import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
const projects=[
    {
        name:"Tourism bd",
        year:'2025',
        language:'NodeJs, MongoDB, RESTful-API',
        align:'right',
        image:'../../public/images/tourism.jpg',
        link:'https://tourism-0wii.onrender.com/'
    },
    {
        name:"Online Shopping Store",
        year:'2021',
        language:'JavaScript, C# ',
        align:'left',
        image:'../../public/images/online.jpg',
        link:'https://github.com/Robiull/Online-shoping-store'
    }
]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {
                projects.map((project,index)=>{
                    return(
                        <SingleProject key={index} name={project.name} year={project.year} language={project.language} align={project.align} image={project.image} link={project.link}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectMain