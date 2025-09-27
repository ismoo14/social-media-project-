import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";
import logo from "../img/pexels-markusspiske-247160.jpg"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id:1,
            name: "ismail Abdi",
            img: "https://images.pexels.com/photos/19872828/pexels-photo-19872828.jpeg"
        },
        {
            id:3,
            name: "ismail Abdi",
            img: "https://images.pexels.com/photos/33036067/pexels-photo-33036067.jpeg"
        },
        {
            id:3,
            name: "ismail Abdi",
            img: "https://images.pexels.com/photos/5966509/pexels-photo-5966509.jpeg"
        },
        {
            id:4,
            name: "ismail Abdi",
            img: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"
        },
        
    ];

return (
    <div className="stories">
        <div className="story" >
                <img src={logo} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>

        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
)
}

export default Stories