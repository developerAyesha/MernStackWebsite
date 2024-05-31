

import { useState } from 'react'
import { useAuth } from '../Store/Auths'
import '../Styles/contact.css'
function Contact() {
  const [User,setUser]=useState({
    username:"",
    email:"",
    message:""
})
const [userData,setUserdata]=useState(true);
const {user}=useAuth();
if(userData&& user){
  setUser({
    username:user.userData.username,
    email:user.userData.email,
    message:"",
  });
  setUserdata(false);
}
const handleinput=(e)=>{
    const name=e.target.name;
    const value = e.target.value;
    console.log("name: ",name)
    setUser({
        ...User,[name]:value
    })
}
const handleForm= async(e)=>{
    e.preventDefault();
    console.log("form is submitted");
    try {
      const response = await fetch('http://localhost:4000/api/form/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User),
      });

      if (response.ok) {
        setUser({ username:"",
        email:"",
        message:""})
        const data = await response.json();
        console.log(data);
        alert("Message send successfully");
      }
    } catch (error) {
      alert("Message not send");
      console.log(error);
    }
  
   
}
  return (
    <>
   <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>
          <section className="section-form">
          <form action=""  onSubmit={handleForm} className='forms'>
            <div>
              <label htmlFor="username">Username</label>
              
              <input type="text"
              name="username"
              id='username'
              placeholder='username'
              autoComplete="off"
              required
              value={User.username}
              onChange={handleinput}
              />
              </div>
              <div>
              <label htmlFor="Email">Email</label>
              <br />
              <input type="text"
              name="email"
              id='email'
              placeholder='email'
              autoComplete="off"
              required
              value={User.email}
              onChange={handleinput}
              />
              </div>
              <div>

             
              <label htmlFor="message">Message</label>
             
              <textarea name="msg" id="msg" rows={6} cols={30}   onChange={handleinput}>

              </textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  )
}

export default Contact