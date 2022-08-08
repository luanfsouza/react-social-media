import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = ()=>{
    
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" />
          <span className="birthdayText">
            <strong>Pola FOster </strong>and <strong>3 other friends</strong>{" "}
            hav a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/post2.jpg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  }
  const ProfileRightbar = ()=>{
    return (
      <>
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
            <span className="rightbarInfoValue">{user.relationship == 1? "Single" : user.relationship == 2 ? "Married" : "--"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/person1.jpg`}
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/person2.jpg`}
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}person/person3.jpg`}
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
