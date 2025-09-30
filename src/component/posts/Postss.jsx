
import Post from "../post/Post";
import "./postss.scss"

const Postss = () => {

    const posts = [
        {
            id: 1,
            name: "Bereket",
            userId: 1,
            profilePic:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            img:
            "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg"
        },
        {
            id: 2,
            name: "Omar",
            userId: 2,
            profilePic:"https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
            desc: "lohbb uohuhih vygvgv hbhlkj gvhgcvfcgh hbhbhbhj gvgvhj",
            img:
            "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
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