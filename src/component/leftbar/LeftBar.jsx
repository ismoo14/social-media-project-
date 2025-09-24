import "./leftbar.scss"
import logo from '../img/pexels-markusspiske-247160.jpg';
const LeftBar = () => {
return (
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={logo} alt="" />
                    <span>ismoo14</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Friends</span>
                </div>
            </div>
        </div>
    </div>
)
}

export  default LeftBar