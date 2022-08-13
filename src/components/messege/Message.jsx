import './Message.css'
import {format} from 'timeago.js'
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';


export default function Message({own, message, conversation, currentUser }){
console.log('hyjjj',conversation)
 const [userq, setUser] = useState(null);
 useEffect(() => {
   const friendId = conversation[0].members.find((m) => m != user._id);
   const getUser = async () => {
     try {
       const res = await axios.get(
         "https://api-react-social-media.herokuapp.com/api/users?userId=" +
           friendId
       );
       setUser(res.data);
     } catch (err) {
       console.log(err);
     }
   };
   getUser();
  
 }, []);
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          {own && (
            <img
              className="messageImg"
              src={
                user?.profilePicture
                  ? PF + user.profilePicture
                  : PF + "profile.jpg"
              }
            />
          )}
          {!own && (
            <img
              className="messageImg"
              src={
                userq?.profilePicture
                  ? PF + userq.profilePicture
                  : PF + "profile.jpg"
              }
            />
          )}
          <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">{format(message.createdAt)}</div>
      </div>
    );
}