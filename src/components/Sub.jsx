import { useState } from "react";

function Sub({open , onClose}) {
    if(!open) return null;
        return(
        <div className="fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
         <div className=" flex m-2 flex-col md:flex-row items-center justify-center bg-red-100  w-100 rounded-3xl  ">
    
        <div className=" p-8 mr-0 md:p-8 lg:p-12 rounded-lg  text-center max-w-md mx-auto">
            <div>
                Your review has been submitted successfully!!
            </div>
            <button id="closeMessage" className="bg-pink-900 text-white px-5 py-3 mt-2 rounded-full text-lg hover:bg-pink-700 transition-colors" onClick={onClose}>
                Close
            </button>
         
        </div>
         </div>
        </div>
        )
    
}

export default Sub;