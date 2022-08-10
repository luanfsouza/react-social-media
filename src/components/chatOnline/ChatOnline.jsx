import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./ChatOnline.css";
export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const getFriend = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/users/friends/" + currentId
        );
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriend();
  }, [currentId]);
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);
  return (
    <div className="chatOnline">
      {onlineFriends.map((o,i) => (
        <div className="chatOnlineFriend" key={i}>
          <div className="chatOnlineImgContainer">
            <img className="chatOnlineImg" src={o?.profilePicture ? PF + o.profilePicture : PF+'profile.jpg'} />
            <div className="chatOnlineBedge"></div>
          </div>
          <span className="chatOnlineName">{o?.username}</span>
        </div>
      ))}
    </div>
  );
}
