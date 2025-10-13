import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom"; 

const Logout = ({ children }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); 
        navigate("/login"); 
    };

    return (
        <div 
            onClick={handleLogout} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} 
            title="Logout"
        >
            {children}
        </div>
    );
};

export default Logout;