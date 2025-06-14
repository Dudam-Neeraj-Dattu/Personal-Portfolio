import React from 'react'
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
   return (
      <div className='h-full flex items-center justify-center'>
         <img src="images/HexaPic.png" alt="Neerajdattu Dudam" className='max-h-[450px] w-auto z-10' />
         <div className='absolute flex justify-center items-center animate-pulse'>
            <PiHexagonThin className='h-full sm:h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />
         </div>
      </div>
   )
}

export default HeroPic
