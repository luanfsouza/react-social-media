import "./Share.css";
import {
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationOn,
  MdOutlineTag,
} from "react-icons/md";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import {MdCancel} from 'react-icons/md'
export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    };
    if (file) {
      const data = new FormData();
      console.log("oiiiiiiiiiiii",data)
      const fileName = Date.now() + file.name;
      
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("https://api-react-social-media.herokuapp.com/api/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    
    try {
      await axios.post("https://api-react-social-media.herokuapp.com/api/posts", newPost);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "profile.jpg"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img  className="shareImg"src={URL.createObjectURL(file)}/>
            <MdCancel className="shareCancelImg" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor={file} className="shareOption">
              <MdPermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,.3gp,.pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <MdOutlineTag className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdLocationOn className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions className="shareIcon" />
              <span className="shareOptionText">Fellings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            share
          </button>
        </form>
        <div className="shareBottom"></div>
      </div>
    </div>
  );
}
