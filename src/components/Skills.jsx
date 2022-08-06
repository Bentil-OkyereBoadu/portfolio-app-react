import React from 'react';
import Skill from './Skill';
import { data } from '../data'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#f6f6f6] text-black-300 pt-2'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#eeba2b] '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 sm:h-[170px] sm:scroll-m-0'>
            {
            data.skills.map( skill => <Skill skill={skill}/>)
            }
          </div>
      </div>
    </div>
  );
};

export default Skills;
