import '../Styles/Style.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

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
                console.error("Error:", errorData);
                return;
            }
            if(response.ok){
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    password:""
                });
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
            <div className='container'>
                <div className="Register">
                    <div className="div-img">
                        <img src="123.png" alt="img" height="500" width="500" />
                    </div>
                    <div className="registerForm">
                        <h1>Registration Form</h1>
                        <br />
                        <form onSubmit={handleForm} className='forms'>
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
                            <button type='submit' className='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
