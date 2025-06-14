import React from 'react'


const SubHeroSection = () => {
   return (
      <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown'>
         <p>500<span className='text-5xl'>+</span> Leetcode Problems</p>
         <p>600<span className='text-5xl'>+</span> Git Commits</p>
         <p>30<span className='text-5xl'>+</span> Projects</p>
         <p>2<span className='text-5xl'>+</span> Publications</p>
      </div>
   )
}

export default SubHeroSection
