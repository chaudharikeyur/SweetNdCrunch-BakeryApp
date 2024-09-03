import myImage from '../assets/cake.png'; 
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function About(){
  const { logout , isAuthenticated ,  user } = useAuth0();
    return(
<div className="min-h-screen min-w-screen bg-gradient-to-r from-slate-100 to-pink-300">
  <div className="flex  flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
    
    {/* Image Section */}
    <div className="w-full md:w-1/2 px-4 py-10 flex justify-center">
      <img src={myImage} alt="Description of image" className="max-w-full h-auto object-contain" />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 px-4 py-10">
    {isAuthenticated && <p className='md:text-4xl text-lg text-center mb-2 '>Hello <span className='text-pink-600'>{user.name}</span></p>}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Welcome to <span className="text-pink-900">Sweet Nd Crunch</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center mb-10">
        Discover the finest cakes crafted with love and premium ingredients. Our collection includes a wide variety of flavors and designs to make every occasion special.
      </p>
      <div className="flex justify-center">
        {isAuthenticated &&
        <NavLink
          to="/buy"
          className="bg-slate-100 text-lg sm:text-xl md:text-2xl lg:text-3xl p-3 md:p-5 rounded-3xl hover:bg-pink-400 transition-colors"
        >
          Buy Now
        </NavLink> }
        {!isAuthenticated && 
           <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 animate-scroll">
          Welcome to Sweet Nd Crunch! <span className='text-3xl text-red-600'>Sign Up/Sign In </span>and Discover our delicious range of pastries and cakes !
        </p>
  
        }
      </div>
    </div>
  </div>
</div>


    )
}

export default About;