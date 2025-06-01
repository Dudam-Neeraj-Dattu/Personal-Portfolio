import React from 'react'

const NavbarLogo = () => {
   return (
      <div>
         <h1 className="text-white text-2xl hidden md:block">
            Neerajdattu Dudam
         </h1>
         <h1 className="text-white font-extrabold text-4xl flex items-center md:hidden sm:block">
            DN
            <span className="inline-block rotate-y-180">
               D
            </span>
         </h1>
      </div>
   )
}

export default NavbarLogo
