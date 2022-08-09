import axios from "axios";
import { useEffect, useState } from "react";
import "./Conversation.css";
export default function Conversation({ conversation, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);


  useEffect(() => {
    const friendId = conversation.members.find((m) => m != currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/users?userId=" + friendId
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  //  console.log(user.profilePicture);
  return (
   
        <div className="conversation">
          <img
            src={
              user?.profilePicture
                ? PF + user.profilePicture
                : PF + "profile.jpg"
            }
            className="conversationImg"
          />
          <span className="conversationName">{ user?.username}</span>
        </div>
      
  );
}
