import { Link } from "react-router-dom"
import "./navbar.scss"
import logo from '../img/pexels-markusspiske-247160.jpg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/authContext"; 

const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>DM ME</span>
            </Link>
            <HomeOutlinedIcon />
            {darkMode ?( <WbSunnyOutlinedIcon onClick={toggle}/>) : (<DarkModeOutlinedIcon  onClick={toggle}/>)}
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
            <div className="user">
                <img src={logo} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
)
}

export  default NavBar;