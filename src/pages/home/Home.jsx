import Postss  from "../../component/posts/Postss"
import Stories from "../../component/stories/Stories";

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Postss />
    </div>
  )
}

export default Home;