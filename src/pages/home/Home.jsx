import Postss  from "../../component/posts/Postss"
import Stories from "../../component/stories/Stories";
import Share from "../../component/share/Share";
const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Share />
      <Postss />
    </div>
  )
}

export default Home;