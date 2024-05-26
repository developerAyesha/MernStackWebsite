import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auths';

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { storeToken } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/User/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error:", errorData);
                return;
            }

            const data = await response.json();
            const userToken = data.token;
            storeToken(userToken);
            navigate("/");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <section>
            <div className='cotainer'>
                <div className="Register">
                    <div className="div-img">
                        <img src="123.png" alt="img" height={"300"} width={"400"} />
                    </div>
                    <div className="registerForm">
                        <h1>Login Form</h1>
                        <br />
                        <form action="" onSubmit={handleForm} className='forms'>
                            <label htmlFor="Email">Email:</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                id='email'
                                placeholder='email'
                                autoComplete="off"
                                required
                                value={user.email}
                                onChange={handleInput}
                            />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input
                                type="text"
                                name="password"
                                id='password'
                                placeholder='password'
                                autoComplete="off"
                                required
                                value={user.password}
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

export default Login;
