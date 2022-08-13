import "./Post.css";
import { MdFormatAlignRight, MdMoreVert } from "react-icons/md";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsliked] = useState(false);
  const [user, setUser] = useState({});
const {user:currentUser} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect(()=>{
  setIsliked(post.likes.includes(currentUser._id))
},[currentUser._id,post.likes])

  useEffect(() => {
    const fethUser = async () => {
      const res = await axios.get(
        `https://api-react-social-media.herokuapp.com/api/users?userId=${post.userId}`
      );
      setUser(res.data);
    };
    fethUser();
  }, [post.userId]);
  function likeHandler() {
    try{
      axios.put(
        "https://api-react-social-media.herokuapp.com/api/posts/" +
          post._id +
          "/like",
        { userId: currentUser._id }
      );
    }catch(err){
      console.log(err)
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsliked(!isLiked);
  }
  return (
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={!user.profilePicture ? PF + "profile.jpg" : PF+user.profilePicture}
                alt=""
              />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon1"
              src={`${PF}like.png`}
              alt=""
              onClick={likeHandler}
            />
            <img
              className="likeIcon2"
              src={`${PF}heart.png`}
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
