import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

import Navbar from "./Components/Navbar"
import Logout from "./Pages/Logout";
import { AdminLayout } from "./Components/layouts/Admin-Layout"
import { AdminContacts } from "./Pages/Admin-Contacts";
import { Footer } from "./Components/Footer/Footer";
import { AdminUsers } from "./Pages/Admin-Users";
import Error from "./Pages/Error";
import { AdminUpdate } from "./Pages/Admin-Update";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
           
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Service" element={<Service/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route  path="/Logout" element={<Logout/>}/>
            <Route path="*" element={<Error/>} />
           
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers/>} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="users/:id/edit" element={ <AdminUpdate/>} />
             
          </Route>
          
          </Routes>
          
          <Footer />

    </BrowserRouter>
    </>
  )
}

export default App