import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

// Create the AuthContext with an empty object as the default value
export const AuthContext = createContext({});

// AuthProvider component to wrap around the part of your app that needs access to auth context
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [issLogin, setIssLogin] = useState(!!token);

    // Update issLogin whenever token changes
    useEffect(() => {
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

    return (
        <AuthContext.Provider value={{ issLogin, LogoutUser, storeToken }}>
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
