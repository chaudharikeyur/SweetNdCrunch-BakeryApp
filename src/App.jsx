import Entry from "./Entry";
import Home from "./components/Home";
import Aboutus from './components/Aboutus';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ContactPage from "./components/Contact";
function App() {


  return (
    <HashRouter>
    <Routes>
   
        <Route index element={<Home/>} />
        <Route path="/buy" element={<Entry />} />
        <Route path="/about" element={ <Aboutus />} />
  <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  </HashRouter>
  
    // <Home/>
    // <Entry />
   
  )
}

export default App
