import { NavLink } from 'react-router-dom';
import myImage from '../assets/logo.png'; 
import About from './About';
import { useAuth0 } from "@auth0/auth0-react";
import myi from '../assets/lo.png'


function Home(){
    const { loginWithRedirect } = useAuth0();
    const { logout , isAuthenticated ,  user } = useAuth0();

    return(
        
<>
<div className="min-h-screen min-w-screen bg-gradient-to-r from-slate-100 to-pink-300">
      <header className="h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="h-20 sm:h-20 md:ml-10 mt-1">
          <img src={myImage} alt="Description of image" className="h-full object-contain" />
        </div>

        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-4 md:space-x-10 lg:space-x-10 md:mr-10">
            <li className="text-xs md:text-base md:mt-0 lg:text-lg hover:bg-slate-100 mt-3 md:p-3 italic hover:rounded-2xl">{isAuthenticated && <NavLink to="/about">About Us</NavLink>}</li>
            {/* <li className="text-xs md:text-base lg:text-lg hover:bg-slate-100 md:p-3 italic">Product</li> */}
            <li className="text-xs md:text-base lg:text-lg mt-3 hover:bg-slate-100 md:mt-0 md:p-3 italic hover:rounded-2xl">{isAuthenticated && <NavLink to="/contact">Contact Us</NavLink>}</li>
          
          {
            isAuthenticated ? (
                <li className=''><button className='hover:bg-slate-100 hover:text-red-300 p-3 text-slate-100 text-xs md:text-base lg:text-lg bg-pink-500 md:p-3 text-red-700 rounded-2xl ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
            
            ) : (
                <li className=''><button className='hover:bg-slate-100 hover:text-red-300 p-3  text-slate-100 text-xs md:text-base lg:text-lg bg-pink-500 md:p-3 text-red-700 rounded-2xl ' onClick={() => loginWithRedirect()}>Log In</button></li>
               
            )
          }
           </ul>
        </nav>
      </header>
      <About />
      
      <div className="border-b border-neutral-900 bg-pink-900 ">
      <footer className="my-2 text-center text-slate-100 p-2 md:text-base lg:text-lg">© 2024 Keyur Chaudhari. All rights reserved.
      </footer>
    </div>
    </div>
</>
    )
}

export default Home;