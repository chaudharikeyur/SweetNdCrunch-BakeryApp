
import {  useCart } from "react-use-cart";
function Card({img,data , name , category , price , id}){
    const { addItem } = useCart();
    return(
       
        <div className="flex flex-col bg-zinc-50 border-4 border-zinc-200/100 rounded-3xl justify-center mt-3 " id={id}>
        <img src={img} alt="" className="rounded-3xl relative h-17"  />
      
        <button  onClick={() => addItem(data)} 
        type="button" 
        className="text-white  bg-red-700 hover:bg-red-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ml-2 text-sm px-3 py-2.5 text-center inline-flex justify-center items-center me-2 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-800">
<svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Buy now
</button>
        {/* <button className="bg-red-400 rounded-2xl py-3  text-zinc-50 w-15 hover:bg-red-600">  Add To Cart</button> */}
        <div className="text-center text-2xl">{name}</div>
        <h3  className="text-center text-xl italic">{category}</h3>
        <div  className="text-center text-red-400">{price} $</div>
       </div>
    )

}
export default Card;

{/* <div className="grid grid-cols-3">
    <div className="flex flex-col  justify-center">
    <img src={img} alt="" className=""  />
    <div className="text-center">{name}</div>
    <h3>{category}</h3>
    <div>{price}</div>
   </div>
  
   
</div> */}

