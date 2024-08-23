import Cart from "./components/cart"
import Cart1 from "./components/cart1"
import Card from "./components/items"
import {stockData} from "./data/data"
import {CartProvider } from "react-use-cart";
function App() {


  return (
    <>
     <CartProvider>
     <h1 className="bg-orange-300  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-600 ">Sweet Nd Crunch</h1>
     <div className="min-h-screen min-w-screen flex flex-col md:flex-row ">
<div className="w-full md:w-2/3 px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{
         stockData.map((data,index)=>{
          return(
            <Card key={index}
            id={data.id}
            img={data.image}
             name={data.name}  price={data.price} 
             data = {data}
             category={data.category} />
          )
        })
     
      }
</div>

</div>

<div className="w-full md:w-1/3 mt-1 sm:mt-1 md:mt-0 bg-blue-100 px-4 py-4">
   {/* <Cart /> */}
   <Cart1/>
  </div> 


      </div>
      </CartProvider>
    </>
  )
}

export default App
