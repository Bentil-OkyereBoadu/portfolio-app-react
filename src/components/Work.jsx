import React from 'react';
import Project from './Project';
import { data } from '../data'

const Work = () => {
  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] m-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#eeba2b]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid h-[500px] sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-auto'>
          {
            data.projects.map( project => <Project project={project}/>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Work;
