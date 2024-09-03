import { useState } from "react";
import { stockData } from "../data/data";
import { useEffect } from "react";
import { namkinData } from "../data/namkin";
import { addDoc, collection, Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
const firestore = getFirestore(app);
function Takeinput({type , open , onClose}){
    const [id, setid] = useState(0);
    const [name , setname] = useState("");
    const [category, setcategory] = useState("");
    const [img , setimg] = useState("");
    const [price, setPrice] = useState(0);
    const [stockData1, setStockData] = useState([]);
    const [namkinData1, setnamkinData] = useState([]);
    // useEffect(() => {
    //     // Load data from localStorage or initialize with default data
      
    //     const storedData11 = localStorage.getItem('stockData1');
    //     if (storedData11) {
    //         setStockData(JSON.parse(storedData11));
    //     } else {
    //         localStorage.setItem('stockData1', JSON.stringify(stockData));
    //         setStockData(stockData);
    //     }
    
    
    //     const storedData = localStorage.getItem('namkinData1');
    //     if (storedData) {
    //         setnamkinData(JSON.parse(storedData));
    //     } else {
    //         localStorage.setItem('namkinData1', JSON.stringify(namkinData));
    //        setnamkinData(namkinData);
        
    // }
    // }, [id]);

   async function addItem(e){
        e.preventDefault(); 
        let newitem = {
            "id" : id,
           "image": img,
           "name": name,
            "category": category,
           "price": price
         };
         if(type){
         const result = await addDoc(collection(firestore ,  "pastry"),newitem);
         console.log(result);
         }
         else{
            const result = await addDoc(collection(firestore ,  "namkeen"),newitem);
            console.log(result);
         }
        //  if(set){
        // const updatedData1 = [...stockData1, newitem ];
        // setStockData(updatedData1);
        // localStorage.setItem('stockData1', JSON.stringify(updatedData1));
        //  }
        //  else{
        //     const updatedData = [...namkinData1, newitem ];
        //     setnamkinData(updatedData);
        //     localStorage.setItem('namkinData1', JSON.stringify(updatedData));
        //  }

        setid('');
        setimg('');
        setname('');
        setcategory('');
        setPrice('');
    }
        if(!open) return null;
        return(
        <div className="fixed inset-0 bg-gray-400 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
         <div className=" flex m-2 flex-col md:flex-row items-center justify-center bg-red-100  w-100 rounded-3xl  ">
    
        <div className=" p-8 mr-0 md:p-8 lg:p-12 rounded-lg  text-center max-w-md mx-auto">
        <form className="space-y-4" onSubmit={addItem}>
            <div>
              <label htmlFor="id" className="block text-gray-700 mb-2">
                ID:
              </label>
              <input
                type="number"
                name="id"
                id="id"
                onChange={e => setid(e.target.value)}
                value={id}
                className="block w-full px-5 py-2 border border-gray-300 rounded-md"
                placeholder="Item ID"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 mb-2">
                Image URL:
              </label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={e => setimg(e.target.value)}
                value={img}
                className="block w-full px-5 py-2 border border-gray-300 rounded-md"
                placeholder="Image URL"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className="block w-full px-5 py-2 border border-gray-300 rounded-md"
                placeholder="Item Name"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-gray-700 mb-2">
                Category:
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="block w-full px-5 py-2 border border-gray-300 rounded-md"
                placeholder="Category"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-gray-700 mb-2">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full px-5 py-2 border border-gray-300 rounded-md"
                placeholder="Price"
                step="0.01"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-900 text-white px-6 py-3 mr-2 rounded-full text-lg hover:bg-pink-700 transition-colors"
            
            >
              Submit
            </button>
            <button id="closeMessage" className="bg-pink-900 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-700 transition-colors" onClick={onClose}>
                Close
            </button>
          </form>
           
        </div>
         </div>
        </div>
        )
    
}

export default Takeinput;

// "id" : 5,
// "image": "https://w0.peakpx.com/wallpaper/631/530/HD-wallpaper-food-dessert-berry-fruit-pastry.jpg",
// "name": "Pistachio Baklava",
// "category": "Baklava",
// "price": 4.00