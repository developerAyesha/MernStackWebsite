import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

import Navbar from "./Components/Navbar"
import Logout from "./Pages/Logout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Service" element={<Service/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route  path="/Logout" element={<Logout/>}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App