import "./Sidebar.css";
import { FaCommentAlt } from "react-icons/fa";
import {
  MdRssFeed,
  MdChat,
  MdOutlinePlayCircleFilled,
  MdGroup,
  MdOutlineBookmark,
  MdWork,
  MdEvent,
  MdSchool,
} from "react-icons/md";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MdChat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlinePlayCircleFilled className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MdWork className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <MdSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
