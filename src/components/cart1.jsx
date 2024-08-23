import Cart from "./cart";
import {useCart } from "react-use-cart";
function Cart1 (){
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
          <h5 className="text-3xl italic">Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
          <table className="table table-light table-hover mt-3">
            <tbody>
            {items.map((item, index)=>{
               return(
                <tr key={index}>
                <td className="p-2">
                    <img src={item.image} alt="" className="h-14 w-14" />
                </td>
                <td className="p-4">
                    {item.name}
                </td>
                <td className="mx-2 p-3">
                    ${item.price}
                </td>
                <td>
                    Quantity({item.quantity})
                </td>
                <td>
                    <button
                    onClick={() => updateItemQuantity(item.id , item.quantity - 1)}
                    className="bg-red-300 ml-2 px-3">-</button>
                    <button
                    onClick={() => updateItemQuantity(item.id , item.quantity + 1)}
                    className="bg-green-300 ml-2 px-3">+</button>
                    <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-600 ml-2 px-3">Remove</button>
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
      <button className="bg-blue-300 p-3 mt-5 hover:bg-blue-500">Pay Now</button>
    </div>
  </section>
    )
}

export default Cart1;