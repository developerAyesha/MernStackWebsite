import '../Styles/Style.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


function Register() {
    const [User, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
      const navigate =useNavigate();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...User, [name]: value
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/User/Register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(User)
            });

            if (!response.ok) {
                // Log the error response
                const errorData = await response.json();
                toast.error(
                    errorData
                  );
                return;
            }
            if(response.ok){
                
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    password:""
                });
                toast.success("Registration successful");
                navigate("/Login")
            }

            const result = await response.json();
            console.log("Registration Successful:", result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section>
            <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="a girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />

           
                        <form onSubmit={handleForm} >
                            <label htmlFor="username">Username:</label>
                            <br />
                            <input
                                type="text"
                                name="username"
                                id='username'
                                placeholder='username'
                                autoComplete="off"
                                required
                                value={User.username}
                                onChange={handleInput}
                            />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <br />
                            <input
                                type="text"
                                name="email"
                                id='email'
                                placeholder='email'
                                autoComplete="off"
                                required
                                value={User.email}
                                onChange={handleInput}
                            />
                            <br />
                            <label htmlFor="phone">Phone:</label>
                            <br />
                            <input
                                type="text"
                                name="phone"
                                id='phone'
                                placeholder='phone'
                                autoComplete="off"
                                required
                                value={User.phone}
                                onChange={handleInput}
                            />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input
                                type="password"
                                name="password"
                                id='password'
                                placeholder='password'
                                autoComplete="off"
                                required
                                value={User.password}
                                onChange={handleInput}
                            />
                            <br />
                            <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                        </form>
                        </div>
            </div>
          </div>
        </main>
        </section>
    );
}

export default Register;
