import React, { useState } from 'react';
import { addDoc, collection, Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import Sub from './Sub';
const firestore = getFirestore(app);
const ContactPage = () => {
  const [openModel , setModel] = useState(false);
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [msg , setMsg] = useState("");

  async function addReview(params) {
    params.preventDefault(); 
    let newitem = {
      
       "name": name,
       "email": email,
       "rmsg": msg
     };
     
     const result = await addDoc(collection(firestore ,  "review" ) ,  newitem);
     console.log(result);
    

    
    setName('');
    setEmail('');
    setMsg('');
  
  }


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4 bg-gradient-to-r from-slate-100 to-pink-300">
      {/* Contact Information Section */}
      <section className="w-full md:w-3/4 lg:w-2/3 bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-6">
          We'd love to hear from you! Whether you have questions about our pastries, 
          or just want to say hello, feel free to reach out to us.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-gray-800 mb-2">
            <strong>Address:</strong> 123 Pastry Lane, Pinkvilla Octagon
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Phone:</strong> (123) 886-7880
          </p>
          <p className="text-gray-800 mb-2">
            <strong>Email:</strong> contact@sweetncrunch.com
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full md:w-3/4 lg:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">
          Send Us a Review Message
        </h2>
        <form   onSubmit={addReview} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Review Message</label>
            <textarea
              id="message"
              name="message"
              value={msg}
              onChange={e => setMsg(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={()=>setModel(true)}
            className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-200"
          >
            Send Message
          </button>
          <Sub open={openModel} onClose={()=> setModel(false)} />
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
