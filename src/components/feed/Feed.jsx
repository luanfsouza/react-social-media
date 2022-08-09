import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";
import "./Feed.css";
export default function Feed({ username }) {
  const [posts, setPosts] = useState();
  const [text, setText] = useState("");
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const fethPosts = async () => {
      const res = username
        ? await axios.get("http://localhost:3001/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:3001/api/posts/timeline/"+user._id
          );
      setPosts(res.data);
    };
    fethPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts && posts.map((p, i) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}
