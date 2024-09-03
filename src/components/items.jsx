import { useAuth0 } from "@auth0/auth0-react";
import {  useCart } from "react-use-cart";
import { getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
const firestore = getFirestore(app);


function Card({img,data , name , category , price , id}){
    const {  isAuthenticated ,  user } = useAuth0();
    const { addItem } = useCart();
    async function removeItem(e){
        // const storedData = localStorage.getItem('stockData1');
        // if (storedData) {
        //   const stockData = JSON.parse(storedData);
        //   const updatedData = stockData.filter(item => item.id !== id);
    
        //   // Save the updated data back to localStorage
        //   localStorage.setItem('stockData1', JSON.stringify(updatedData));
          
         
        // }
        // const Namkeens = localStorage.getItem('namkinData1');
        // if (Namkeens) {
        //     const namkeenData = JSON.parse(Namkeens);
        //     const updatedData1 = namkeenData.filter(item => item.id !== id);
      
        //     // Save the updated data back to localStorage
        //     localStorage.setItem('namkinData1', JSON.stringify(updatedData1));
            
           
        //   }
        const pastriesCollectionRef = collection(firestore, "pastry");

        // Create a query to find the document with the specified 'id'
        const q = query(pastriesCollectionRef, where("id", "==", id));
      
        try {
          // Execute the query
          const querySnapshot = await getDocs(q);
      
          // Check if a document with the given 'id' exists
          if (!querySnapshot.empty) {
            // Get the document ID from the query result
            querySnapshot.forEach(async (docSnapshot) => {
              // Delete the document
              await deleteDoc(doc(firestore, "pastry", docSnapshot.id));
              console.log(`Document with ID ${docSnapshot.id} deleted.`);
            });
          } else {
            console.log("No document found with the given id.");
          }
        } catch (error) {
          console.error("Error removing document: ", error);
        }

        const namkeenCollectionRef = collection(firestore, "namkeen");

  // Create a query to find the document with the specified 'id'
  const qr = query(namkeenCollectionRef, where("id", "==", id));

  try {
    // Execute the query
    const querySnapshot = await getDocs(qr);

    // Check if a document with the given 'id' exists
    if (!querySnapshot.empty) {
      // Get the document ID from the query result
      querySnapshot.forEach(async (docSnapshot) => {
        // Delete the document
        await deleteDoc(doc(firestore, "namkeen", docSnapshot.id));
        console.log(`Document with ID ${docSnapshot.id} deleted from 'namkeen' collection.`);
      });
    } else {
      console.log("No document found with the given id in 'namkeen' collection.");
    }
  } catch (error) {
    console.error("Error removing document from 'namkeen' collection: ", error);
  }

    }
    return(
       
        <div className="relative flex flex-col bg-zinc-50 border-4 border-zinc-200/100 rounded-3xl justify-center mt-3" id={id}>
        <img src={img} alt="" className="rounded-3xl relative h-27" />
        
        {/* Cross Button */}
    { isAuthenticated && user.name == 'Keyur Chaudhari' &&    <button
          onClick={removeItem} // Add your functionality here
          type="button"
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
        
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 10.293l5.707-5.707a1 1 0 0 1 1.414 1.414L13.414 12l5.707 5.707a1 1 0 0 1-1.414 1.414L12 13.414l-5.707 5.707a1 1 0 0 1-1.414-1.414L10.586 12 4.879 6.293a1 1 0 0 1 1.414-1.414L12 10.293z"/>
          </svg>
        </button> }
        
        {/* Main Content */}
        <button
          onClick={() => addItem(data)}
          type="button"
          className="text-white bg-pink-700 hover:bg-red-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ml-2 text-sm px-3 py-2.5 text-center inline-flex justify-center items-center me-2 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          </svg>
          Buy now
        </button>
  
        <div className="text-center text-2xl">{name}</div>
        <h3 className="text-center text-xl italic">{category}</h3>
        <div className="text-center text-red-400">{price} $</div>
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

