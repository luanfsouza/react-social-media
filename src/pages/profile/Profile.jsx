import axios from "axios";
import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import {useParams} from 'react-router-dom'
import "./Profile.css";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username


  useEffect(() => {
    const fethUser = async () => {
      const res = await axios.get(
        `https://api-react-social-media.herokuapp.com/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fethUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={user.coverPicture ? PF+user.coverPicture : PF+"paisagem.jpg"} />
              <img className="profileUserImg" src={!user.profilePicture ? PF+"profile.jpg" : PF+user.profilePicture} />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <h4 className="profileInfoDesc">{user.desc}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
