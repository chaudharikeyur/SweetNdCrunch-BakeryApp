import Cart from "./components/cart"
import Cart1 from "./components/cart1"
import Card from "./components/items"
import {stockData} from "./data/data"
import {CartProvider } from "react-use-cart";
import control from "./assets/control.png";
import { NavLink } from "react-router-dom";
import { namkinData } from "./data/namkin";
import { useEffect } from "react";
import { useState } from "react";
import Takeinput from "./components/Takeinput";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { collection, onSnapshot , getDocs } from 'firebase/firestore';

const firestore = getFirestore(app);

function Entry() {
  const {  isAuthenticated ,  user } = useAuth0();
const [set, usSet] = useState(true);
const [openModel , setModel] = useState(false);
// const [data1, setData] = useState([]);
// const [namkinedata, setnamkineData] = useState([]);
  const [pastryData, setPastryData] = useState([]);
  const [namkeenData, setNamkeenData] = useState([]);

 useEffect(() => {
  const unsubscribePastry = onSnapshot(collection(firestore, 'pastry'), (snapshot) => {
    const pastries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPastryData(pastries);
  }, (error) => {
    console.error("Error fetching pastries: ", error);
  });

  // Real-time listener for 'namkeen' collection
  const unsubscribeNamkeen = onSnapshot(collection(firestore, 'namkeen'), (snapshot) => {
    const namkeens = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNamkeenData(namkeens);
  }, (error) => {
    console.error("Error fetching namkeens: ", error);
  });

  // Clean up listeners on component unmount
  return () => {
    unsubscribePastry();
    unsubscribeNamkeen();
  };
 
//     // Load data from localStorage
//     const storedData = localStorage.getItem('stockData1');
//     if (storedData) {
//         setData(JSON.parse(storedData));
//     }
//     const namkineeData = localStorage.getItem('namkinData1');
//     if(namkineeData){
//       setnamkineData(JSON.parse(namkineeData))
//     }
 }, []);

  return (
    <>
   
     <CartProvider>
     <div className="relative bg-pink-300  text-4xl sm:text-2xl md:text-6xl lg:text-7xl text-pink-800 flex justify-between "><span className="ml-5  text-center ">Sweet Nd Crunch</span>
     <NavLink to="/" >
     <img src={control} alt="back" className="md:w-14 mr-5 w-10 h-10 mt-4 md:h-17"  />
    </NavLink>
 
  </div>
 
     <div className="min-h-screen min-w-screen flex flex-col md:flex-row ">
     
<div className="w-full md:w-2/3 px-4">
<div  className="flex justify-center flex-col">
<button onClick={()=> usSet(!set)} className="text-slate-100 bg-pink-700 p-3 rounded-2xl mt-3 hover:bg-pink-900 italic">{set? "Checkout our Namkeens ->" : " Ckeckout our Pastries ->"}</button>
  <span className="flex justify-center text-red-500 text-xl h-3  my-3">{set ? "Pastry Section" : "Namakeen Section"}</span>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{
    !set ?   
    namkeenData.map((data,index)=>{
          return(
         
            <Card key={index}
            id={data.id}
            img={data.image}
             name={data.name}  price={data.price} 
             data = {data}
             category={data.category} />
             
          )
        })
:
      
pastryData.map((data,index)=>{
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

{isAuthenticated && user.name === 'Keyur Chaudhari' && <div  className="flex justify-center items-center">
<button className="bg-red-700 text-slate-100 p-3 mt-2 rounded-3xl mb-3" onClick={()=>setModel(true)}>Add Items</button>
<Takeinput type={set} open={openModel} onClose={()=> setModel(false)} />
</div>
}

</div>

<div className="w-full md:w-1/3 mt-1 sm:mt-1 md:mt-0 bg-pink-100 px-4 py-4">
   {/* <Cart /> */}
   <Cart1/>
  </div> 


      </div>
      </CartProvider>
    </>
  )
}

export default Entry;
