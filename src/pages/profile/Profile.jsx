import"./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Postss from "../../component/posts/Postss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg" className="cover"/>
        <img src="https://images.pexels.com/photos/2263686/pexels-photo-2263686.jpeg" className="profilePic"/>
      </div>
      <div className="profilecontainer">
        <div className="uinfo">
          <div className="left">
            <a href="#"><FacebookTwoToneIcon fontSize="large" /></a>
            <a href="#"><InstagramIcon fontSize="large" /></a>
            <a href="#"><XIcon fontSize="large" /></a>
            <a href="#"><LinkedInIcon fontSize="large" /></a>
          </div>
          <div className="center">
            <span>Ismoo</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Ethiopia</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>ismoo.com</span>
              </div>

            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Postss />
      </div>
    </div>
  )
}

export default Profile;