import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

// Create the AuthContext with an empty object as the default value
export const AuthContext = createContext({});

// AuthProvider component to wrap around the part of your app that needs access to auth context
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [issLogin, setIssLogin] = useState(!!token);
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    // Update issLogin whenever token changes
    useEffect(() => {
        console.log("Token updated:", token);
        setIssLogin(!!token);
    }, [token]);

    const storeToken = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    // JWT AUTHENTICATION
    const userAuthentication = async () => {
        console.log("userAuthentication function called");
        try {
            if (!token) {
                console.log("No token available");
                return;
            }
            setIsLoading(true);
            console.log("Fetching user data with token:", token);
            const response = await fetch("http://localhost:4000/api/User/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Response status:", response.status); 
            if(!response.ok)
                {
                    console.log("request failed");
                }
            if (response.ok) {
                const data = await response.json();
                console.log("Data from user:", data);
                setUser(data);
            } else {
                console.log("Failed to fetch user data:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        console.log("useEffect triggered with token:", token);
        if (token) {
            userAuthentication();
            getServices();
        }
    }, [token]);
    const getServices = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/data/service', {
            method: "GET",
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data.msg);
            setServices(data.msg);
          }
        } catch (error) {
          console.log(`services frontend error: ${error}`);
        }
      };
    return (
        <AuthContext.Provider value={{ issLogin, LogoutUser, storeToken, user,services,authorizationToken,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

// Define PropTypes for AuthProvider
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // Validate children prop
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
};
