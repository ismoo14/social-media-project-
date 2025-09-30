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
                        <img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg" alt="" />
                        <span>Lia17</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/2239422/pexels-photo-2239422.jpeg" alt="" />
                        <span>Lucas4</span>
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
                        <img src="https://images.pexels.com/photos/18669052/pexels-photo-18669052.jpeg" alt="" />
                        <p>
                            <span>Baby12</span> changed his  profile
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg" alt="" />
                        <p>
                            <span>Ahmed</span> liked a post
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/34007972/pexels-photo-34007972.jpeg" alt="" />
                        <p>
                    <span>Hamad4</span> liked a comment
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/30378375/pexels-photo-30378375.jpeg" alt="" />
                        <p>
                            <span>Dave56</span> posted
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>

            <div className="item">
                <span>Online Friends</span>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/11489976/pexels-photo-11489976.jpeg" alt="" />
                        <div className="online" />
                            <span>Max</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/26734362/pexels-photo-26734362.jpeg" alt="" />
                        <div className="online" />
                            <span>Abuki</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/14024281/pexels-photo-14024281.jpeg" alt="" />
                        <div className="online" />
                            <span>Honey</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/5206296/pexels-photo-5206296.jpeg" alt="" />
                        <div className="online" />
                            <span>Ninaa</span>
                    </div>
                </div>
                <div className="user">
                    <div className="userinfo">
                        <img src="https://images.pexels.com/photos/739361/pexels-photo-739361.jpeg" alt="" />
                        <div className="online" />
                            <span>Salim98</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}

export  default RightBar