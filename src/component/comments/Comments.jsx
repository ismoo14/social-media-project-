import "./comments.scss";
import logo from "../../component/img/pexels-markusspiske-247160.jpg"

const Comments = () => {

    const comments = [
        {
            id: 1,
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            name: "ismoo",
            userId: 1,
            profilePicture:"https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg",
        },
        {
            id: 2,
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            name: "ismoo",
            userId: 1,
            profilePicture:"https://images.pexels.com/photos/33609160/pexels-photo-33609160.jpeg",
        },
    ];

return (
    <div className="comments">
        <div className="write">
            <img src={logo} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
))}
    </div>
)
}

export default Comments