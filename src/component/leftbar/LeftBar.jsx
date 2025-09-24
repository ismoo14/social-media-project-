import "./leftbar.scss"
import logo from '../img/pexels-markusspiske-247160.jpg';
import friends from "../../assets/friendship.png"
import group from "../../assets/group.png"
import market from "../../assets/retailer.png"
import watch from "../../assets/monitor.png"
import memories from "../../assets/alarm-clock.png"
import events from "../../assets/calendar.png"
import gaming from "../../assets/game-controller.png"
import gallery from "../../assets/picture.png"
import video from "../../assets/video.png"
import message from "../../assets/comment.png"
import tutorials from "../../assets/tutorial.png"
import courses from "../../assets/training.png"
import fund from "../../assets/fundraising.png"
const LeftBar = () => {
return (
    <div className='leftbar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                    {/* <img src={logo} alt="" /> */}
                    <span>ismoo14</span>
                </div>
                <div className="item">
                    <img src={friends} alt="" />
                    <span>Friends </span>
                </div>
                <div className="item">
                    <img src={group} alt="" />
                    <span>Groups </span>
                </div>
                <div className="item">
                    <img src={market} alt="" />
                    <span>MarketPlace</span>
                </div>
                <div className="item">
                    <img src={watch} alt="" />
                    <span>Watch </span>
                </div>
                <div className="item">
                    <img src={memories} alt="" />
                    <span>Memories </span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Your shortcuts</span>
                <div className="item">
                    <img src={events} alt="" />
                    <span>Events </span>
                </div>
                <div className="item">
                    <img src={gaming} alt="" />
                    <span>Gaming </span>
                </div>
                <div className="item">
                    <img src={gallery} alt="" />
                    <span>Gallery </span>
                </div>
                <div className="item">
                    <img src={video} alt="" />
                    <span>Videos </span>
                </div>
                <div className="item">
                    <img src={message} alt="" />
                    <span>Messages </span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Others</span>
                <div className="item">
                    <img src={fund} alt="" />
                    <span>Fundraiser </span>
                </div>
                <div className="item">
                    <img src={tutorials} alt="" />
                    <span>Tutorials </span>
                </div>
                <div className="item">
                    <img src={courses} alt="" />
                    <span>Courses </span>
                </div>
            </div>
        </div>
    </div>
)
}

export  default LeftBar