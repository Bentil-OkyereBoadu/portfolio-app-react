import React from 'react'

const Skill = ({skill}) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <img className='w-20 mx-auto' src={skill.img} alt="icon" />
        <p className='my-4'>{skill.skill}</p>
    </div>
  )
}

export default Skill