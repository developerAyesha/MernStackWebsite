import '../Styles/About.css'
  import { useAuth } from "../Store/Auths";
   function About() {
    
    const {user}=useAuth();
  
     return (
      <>
      <p>hi {user.userData.username}</p>
      <div>About Page</div>
      </>
       
     )
   }
   
   export default About