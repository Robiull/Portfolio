import React from 'react'

const HeroGradiant = () => {
  return (
    <div>
      <div className='shadow-[10px_10px_200px_150px_rgba(94,206,220,0.5)] absolute top-0 right-[500px] -z-10 animate-pulse'></div>
      <div className='shadow-[10px_10px_200px_150px_rgba(240,269,79,0.5)] absolute top-0 right-0 -z-10 animate-pulse'></div>
      <div className='shadow-[10px_10px_200px_150px_rgba(94,206,220,0.5)] absolute top-[300px] left-0 -z-10 opacity-50'></div>
      <div className='shadow-[10px_10px_200px_150px_rgba(240,269,79,0.5)] absolute top-[500px] left-0 -z-10 opacity-50'></div>
    </div>
  )
}

export default HeroGradiant