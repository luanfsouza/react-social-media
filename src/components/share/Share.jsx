import "./Share.css";
import {
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationOn,
  MdOutlineTag,
} from "react-icons/md";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img src='/assets/person/person1.jpg' alt='' className="shareProfileImg"/>
            <input type="text" placeholder="What`s in your mind Safaki?" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <MdPermMedia className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <MdOutlineTag className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <MdLocationOn className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdEmojiEmotions className="shareIcon"/>
                    <span className="shareOptionText">Fellings</span>
                </div>
            </div>
            <button className="shareButton">share</button>
        </div>
        <div className="shareBottom"></div>
      </div>
    </div>
  );
}
