import React from 'react'

const HeroGradient = () => {
   return (
      <div>
         <div className="shadow-orangeMediumShadow absolute top-0 left-[400px] -z-10 animate-pulse"></div>
         <div className="shadow-cyanMediumShadow absolute top-[50px] left-[50px] -z-10 animate-pulse"></div>
         <div className="shadow-orangeMediumShadow absolute top-[400px] left-0 -z-10 animate-pulse"></div>
         
         <div className="shadow-orangeMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
         <div className="shadow-cyanMediumShadow absolute top-[50px] right-[50px] -z-10 animate-pulse"></div>
         <div className="shadow-orangeMediumShadow absolute top-[400px] right-0 -z-10 animate-pulse"></div>

      </div>
   )
}

export default HeroGradient
