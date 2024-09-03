import { useAuth0 } from "@auth0/auth0-react";

function Aboutus(){
    return(
      
<div className="min-h-screen min-w-screen bg-gradient-to-r from-slate-100 to-pink-300">
  <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 ">
    
    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6  md:mt-[110px]">
      About <span className="text-pink-900">Sweet Nd Crunch</span>
    </h1>

    {/* Introduction Section */}
    <div className="max-w-4xl mx-auto px-4 text-center mt-15">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
        At Sweet Nd Crunch, we believe that a perfect pastry can turn any moment into a celebration. Our bakery is dedicated to crafting delicious cakes, pastries, and treats that not only taste wonderful but also bring joy to every occasion.
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
        Founded on a passion for baking and a commitment to quality, our skilled team uses only the finest ingredients to create a range of flavors and designs. Whether you’re celebrating a birthday, wedding, or simply indulging yourself, we’ve got something special just for you.
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
        Our cozy bakery is more than just a place to buy sweets—it’s a place where memories are made and smiles are shared. We invite you to experience the magic of Sweet Nd Crunch and make every occasion a little sweeter.
      </p>
    </div>

    {/* Call-to-Action Button */}
    <div className="mt-10">
      <a
        href="/contact"
        className="bg-pink-900 text-white text-lg sm:text-xl md:text-2xl p-3 md:p-5 rounded-3xl hover:bg-pink-700 transition-colors"
      >
       Contact Us
      </a>
    </div>
  </div>
</div>

    )
}

export default Aboutus;