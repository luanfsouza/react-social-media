import './Online.css'
export default function Online({user}){
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
return (
  <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img
        className="rightbarProfileImg"
        src={user?.profilePicture ? PF+user.profilePicture : PF+'profile.jpg'}
        alt=""
      />
      <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername">{user?.username}</span>
  </li>
);
}