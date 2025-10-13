import { Link } from "react-router-dom"
import "./navbar.scss"
import React from 'react';
import logo from '../img/profile-img.jpg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'; 
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/authContext";  
import LogoutButton from "../logout/Logout"

const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span style={{ cursor: "pointer" }}>DM ME</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ?( <WbSunnyOutlinedIcon onClick={toggle}/>) : (<DarkModeOutlinedIcon style={{ cursor: "pointer" }}  onClick={toggle}/>)}
            <GridViewOutlinedIcon />
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="search..." />
            </div>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <LogoutButton>
                    <ExitToAppOutlinedIcon style={{ cursor: "pointer" }} />
                </LogoutButton>
            <div className="user">
                <img src={logo} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
)
}

export  default NavBar;