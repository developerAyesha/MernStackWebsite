

import { useState } from 'react'
import '../Styles/contact.css'
function Contact() {
  const [User,setUser]=useState({
    username:"",
    email:"",
   message:""
})
const handleinput=(e)=>{
    const name=e.target.name;
    const value = e.target.value;
    console.log("name: ",name)
    setUser({
        ...User,[name]:value
    })
}
const handleForm=(e)=>{
    e.preventDefault();
    console.log("form is submitted");
}
  return (
    <>
    <section className="contact">
      <div className="con">
        <div className="grid">
          <div><img src="123.png" alt="" height={450} width={450} />
          </div>
          <div className="content">
          <form action=""  onSubmit={handleForm} className='forms'>
              <label htmlFor="username">Username</label>
              <br />
              <input type="text"
              name="username"
              id='username'
              placeholder='username'
              autoComplete="off"
              required
              value={User.username}
              onChange={handleinput}
              />
              <br />
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
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea name="msg" id="msg" rows={16} cols={53}   onChange={handleinput}>

              </textarea>
              <br />
              <button type='submit' className='submit'>Submit</button>
              </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact