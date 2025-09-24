import "./rightbar.scss"
import logo from '../img/pexels-markusspiske-247160.jpg';

const RightBar = () => {
return (
    <div className="rightbar">
        <div className="container">
            <div className="item">
                <span>Suggestions For You</span>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <span>Ismail Abdi</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <span>Ismail Abdi</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
            </div>

            <div className="item">
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <p>
                            <span>Ismail Abdi</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <p>
                            <span>Ismail Abdi</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <p>
                            <span>Ismail Abdi</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <p>
                            <span>Ismail Abdi</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>

            <div className="item">
                <span>Online Friends</span>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <div className="online" />
                            <span>Ismail Abdi</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <div className="online" />
                            <span>Ismail Abdi</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <div className="online" />
                            <span>Ismail Abdi</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <div className="online" />
                            <span>Ismail Abdi</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src={logo} alt="" />
                        <div className="online" />
                            <span>Ismail Abdi</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}

export  default RightBar