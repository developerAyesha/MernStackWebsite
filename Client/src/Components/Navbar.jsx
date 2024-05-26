import { NavLink } from "react-router-dom"
import { useAuth } from "../Store/Auths"
 import "./navbar.css"
function Navbar() {
    const {issLogin} = useAuth();
    console.log("login:",issLogin);
  return (
   <>
   <header>
    <div className="Container">
        <div> <a href="/">Ayesha</a></div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
               
                <li><NavLink to="/Service">Service</NavLink></li>
                {issLogin?(<li><NavLink to="/Logout">Logout</NavLink></li>):
                (<><li><NavLink to="/Register">Register</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
                </>)}
                
                
            </ul>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Navbar