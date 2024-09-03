import { useState } from "react";
import Cart from "./cart";
import {useCart } from "react-use-cart";
import Sorry from "./SorryPay";
function Cart1 (){
  const [openModel , setModel] = useState(false);
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items

    } = useCart();
    if (isEmpty) return <Cart />
    return(
  <section className="py-4 container">
    <div className="row justify-center">
      <div className="col-12">
          <h5 className="md:text-3xl italic text-lg ml-3">Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className="table table-light table-hover mt-3">
            <tbody>
            {items.map((item, index)=>{
               return(
                <tr key={index}>
                <td className="p-2">
                    <img src={item.image} alt="" className="h-14 w-14" />
                </td>
                <td className="p-1 md:p-4 text">
                    {item.name}
                </td>
                <td className="mx-1 md:mx-2 md:p-3 p-2">
                    ${item.price}
                </td>
                <td>
                    Quantity({item.quantity})
                </td>
                <td>
                    <button
                    onClick={() => updateItemQuantity(item.id , item.quantity - 1)}
                    className="bg-red-300 md:px-3 ml-1 mt-1 px-2">-</button>
                    <button
                    onClick={() => updateItemQuantity(item.id , item.quantity + 1)}
                    className="bg-green-300 md:ml-2 md:px-3 ml-1 mt-1 px-2">+</button>
                    <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-600 md:ml-2 mt-1 px-2 md:px-3">Remove</button>
                </td>

               </tr>
               )
              
            })}
            </tbody>
          </table>
      </div>
      <div className="col-auto mt-5 text-4xl text-slate-800">
   <h2>Total Price : ${cartTotal}</h2>
      </div>
      <button className="bg-red-300 p-3 mr-3 mt-5 hover:bg-red-700"  onClick={()=>emptyCart()}>Clear cart</button>
      <button className="bg-pink-300 p-3 mt-5 hover:bg-pink-500" onClick={()=>setModel(true)}>Pay Now</button>
      <Sorry open={openModel} onClose={()=> setModel(false)} />
    </div>
  </section>
    )
}

export default Cart1;