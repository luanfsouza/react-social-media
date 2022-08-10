import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { MdPersonAddAlt1, MdPersonRemoveAlt1 } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { colors } from "@mui/material";
export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const bola = useRef();
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  // console.log(followed)
  // useEffect(() => {
  //   setFollowed(currentUser.followings.includes(user?.id));
  // }, [currentUser, user.id]);
console.log("oiii",user)
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          `https://api-react-social-media.herokuapp.com/api/users/friends/${user._id}`
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" />
          <span className="birthdayText">
            <strong>Pola FOster </strong>and <strong>3 other friends</strong>{" "}
            hav a birthday today
          </span>
        </div>
        {user && user.username !== currentUser.username && (
          <button className="rightbarFollowButton">seguir</button>
        )}
        <img className="rightbarAd" src="assets/post/post2.jpg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const handlerClick = async () => {
    try {
      if (followed) {
        await axios.put(
          "https://api-react-social-media.herokuapp.com/api/users/" + user._id + "/unfollow",
          { userId: currentUser._id }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          "https://api-react-social-media.herokuapp.com/api/users/" + user._id + "/follow",
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };
  const ProfileRightbar = () => {
    return (
      <>
        {user.username != currentUser.username && (
          <button className="rightbarFollowButton" onClick={handlerClick}>
            {followed ? "unfollow" : "follow"}
            {followed ? <MdPersonRemoveAlt1 /> : <MdPersonAddAlt1 />}
          </button>
        )}

        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship == 1
                ? "Single"
                : user.relationship == 2
                ? "Married"
                : "--"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend, i) => (
            <Link key={i} to={"/profile/" + friend.username} ref={bola}>
              {/* {window.location.reload()} */}
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "profile.jpg"
                  }
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
