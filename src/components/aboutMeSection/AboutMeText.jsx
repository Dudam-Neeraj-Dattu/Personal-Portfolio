import React from 'react'

const AboutMeText = () => {
   return (
      <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
         <h2 className="text-6xl text-cyan mb-10">About Me</h2>
         <p className='text-white'>I’m a passionate software engineer with a strong foundation in computer science, currently pursuing my Master's at the University of South Dakota. My journey began with a B.Tech from NIT Warangal, where a programming course sparked my interest in tech. Motivated by curiosity, I started self-learning core CS subjects like OOP, computer networks, and operating systems, which led me to pursue a master's focused on machine learning and AI.
         <br /><br />
         Driven by a growth mindset, I continually improve my problem-solving skills through competitive programming and regular practice on platforms like LeetCode. I’ve developed proficiency in C++, Python, and JavaScript, and gained hands-on experience in full-stack development using React.js, Node.js, Express, and MongoDB.
         <br /><br />
         I value building intelligent systems, clean web interfaces, and robust architectures—with a focus on clarity, simplicity, and lifelong learning.</p>
         {/* <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button> */}
         <button className="py-2 px-4 text-lg rounded-full flex gap-2 items-center mt-10 font-bold font-body text-white border-orange border bg-black hover:bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange hover:shadow-cyanShadow cursor-pointer">My Projects</button>
      </div>
   )
}

export default AboutMeText
