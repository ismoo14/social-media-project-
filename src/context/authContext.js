import { createContext, useEffect, useState } from "react";
import logo from '../component/img/pexels-markusspiske-247160.jpg';
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)
    };

    const logout = async () => {
        try {
            await axios.post("http://localhost:8800/api/auth/logout");
        } catch (err) {
            console.error("Backend logout failed", err);
        }

        setCurrentUser(null);
        localStorage.removeItem("user"); 
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    
    return(
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};