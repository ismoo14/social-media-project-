import { createContext, useEffect, useState } from "react";
import logo from '../component/img/pexels-markusspiske-247160.jpg';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const PROFILE_PIC_URL = "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"

    const login = () => {
        setCurrentUser ({
            id:1, 
            name: "ismoo", 
            profilePic: PROFILE_PIC_URL, 
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};