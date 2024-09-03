import Entry from "./Entry";
import Home from "./components/Home";
import Aboutus from './components/Aboutus';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/Contact";
function App() {


  return (
    <BrowserRouter>
    <Routes>
   
        <Route index element={<Home/>} />
        <Route path="/buy" element={<Entry />} />
        <Route path="/about" element={ <Aboutus />} />
  <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  
    // <Home/>
    // <Entry />
   
  )
}

export default App
