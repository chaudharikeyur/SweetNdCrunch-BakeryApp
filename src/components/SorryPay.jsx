import sad from "../assets/sad.png";

function Sorry({open , onClose}){
    if(!open) return null;
    return(
    <div className="fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur-sm flex items-center justify-center ">
     <div className=" flex m-2 flex-col md:flex-row items-center justify-center bg-red-100  w-100 rounded-3xl  ">

    <img src={sad} alt="" className="mt-2 w-40 h-55 ml-4 " />
    <div className=" p-6 mr-0 md:p-8 lg:p-12 rounded-lg  text-center max-w-md mx-auto">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-red-600 mb-4">
            We are currently experiencing some server issues.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
            As a result, our payment gateway is temporarily closed. We apologize for the inconvenience and are working to resolve the issue as quickly as possible. Thank you for your patience and understanding.
        </p>
        <button id="closeMessage" className="bg-pink-900 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition-colors" onClick={onClose}>
            Close
        </button>
    </div>
     </div>
    </div>
    )
}

export default Sorry;