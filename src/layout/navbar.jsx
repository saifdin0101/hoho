import React from 'react';
import { Link} from 'react-router-dom';
 export const Navbar = () => {
    return (
        <nav className="text-red-500 h-[120px] bg-gradient-to-r from-[#74d1d9] to-[black]  flex justify-center items-center gap-[100px] w-[100%]">
      
      <Link className='mr-[48vw] text-3xl ' to={"/"}> home</Link>
      <Link to={"/About"}>About</Link>
      <div>Contact</div>
      <div>Just </div>
      <div>typing </div>
    </nav>
    );
};

