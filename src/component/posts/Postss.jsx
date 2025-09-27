
import Post from "../post/Post";
import "./postss.scss"

const Postss = () => {

    const posts = [
        {
            id: 1,
            name: "ismoo",
            userId: 1,
            profilePic:"https://images.pexels.com/photos/3866555/pexels-photo-3866555.png",
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            img:
            "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg"
        },
        {
            id: 2,
            name: "ismoo",
            userId: 2,
            profilePic:"https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg",
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            img:
            "https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg"
        },
    ]

return (
    <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
)
}

export default Postss; 