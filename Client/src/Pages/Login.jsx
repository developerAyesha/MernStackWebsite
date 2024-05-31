import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/Auths';
import { toast } from "react-toastify";
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
                toast.error(
                    "invalid credential"
                  );
                console.error("Error:", errorData);
                return;
            }

            const data = await response.json();
            const userToken = data.token;
            toast.success("Login successful");
            storeToken(userToken);
            navigate("/");
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
                  src="/images/login.png"
                  alt=" let's fill the login form "
                  width="500"
                  height="500"
                />
              </div>

              {/* let tackle registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">login form</h1>
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
            </main>
        </section>
    );
}

export default Login;
