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
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios"
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {useContext, useState} from "react";
import Update from "../../component/update/Update"

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false)

  const {currentUser} = useContext(AuthContext)

  const userId = parseInt(useLocation().pathname.split("/")[2])

  const { isLoading, error, data } = useQuery({
      
          queryKey: ['user'],
          queryFn: () => makeRequest.get("/users/find/" + userId).then((res) => {
              return res.data;
          })
      });

      const { isLoading: rIsLoading, data: relationshipData } = useQuery({
          queryKey: ['relationship'],
          queryFn: () => makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
              return res.data;
          })
      });

      const queryClient = useQueryClient();

        const mutation = useMutation({ 
            mutationFn: (following) => { 
            if(following) return makeRequest.delete("/relationships?userId="+ userId);
            return makeRequest.post("/relationships", { userId });
            },
            onSuccess:  () => {
                queryClient.invalidateQueries( ["relationship"] );
            },
        });

        const handleFollow = () => {
          if (rIsLoading || !relationshipData) return;
            mutation.mutate(relationshipData.includes(currentUser.id))
        }

  return (
    <div className="profile">
      {isLoading ? ( 
      "loading" 
      ): error ? ( 
        "user data not available"
      ) : (
      <>
        <div className="images">
        <img src={"/upload/"+data.coverPic} className="cover" alt=""/>
        <img src={"/upload/"+data.profilePic} className="profilePic" alt=""/>
      </div>
      <div className="profilecontainer">
        <div className="uinfo">
          <div className="left">
            <button className="icon-button">
    <FacebookTwoToneIcon fontSize="large" />
</button>
<button className="icon-button">
    <InstagramIcon fontSize="large" />
</button>
<button className="icon-button">
    <XIcon fontSize="large" />
</button>
<button className="icon-button">
    <LinkedInIcon fontSize="large" />
</button>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>

              <div className="item">
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>
            {rIsLoading ? (
              "loading"
            ) : userId === currentUser.id ? (
              <button onClick={()=>setOpenUpdate(true)}>update</button>
            ) : (
              <button onClick={handleFollow}>
                {relationshipData.includes(currentUser.id)
                ? "Unfollow"
                : "Follow"}
              </button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Postss userId={userId}/>
      </div>
      </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  )
}

export default Profile;