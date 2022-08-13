import "./Topbar.css";
import { FaSearch, FaUserAlt, FaCommentDots, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function () {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
           React Social
          </Link>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Seach fro freinds, post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="messenger">
            <span className="topbarLink">Homepage</span>
          </Link>

          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Link to="/messenger" style={{ textDecoration: "none" }}>
              <FaUserAlt />
              <span className="topbarIconBadge">1</span>
            </Link>
          </div>
          <div className="topbarIconItem">
            <FaCommentDots />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user?.profilePicture
                ? PF + user.profilePicture
                : PF + "profile.jpg"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
