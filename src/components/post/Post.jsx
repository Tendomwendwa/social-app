import { useState, useEffect } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post?.like)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState(null);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  // Find the user when the component mounts or when post changes
  useEffect(() => {
    if (post && post.userId) {
      const foundUser = Users.find((user) => user.id === post.userId);
      setUser(foundUser || null); // Set to null if user not found
    }
  }, [post]);

  // Handle case where post is undefined
  if (!post) {
    return null; // Or a loading state
  }

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={user ? user.profilePicture : "Unknown user"}
              />
              <span className="postUsername">
                {user ? user.username : "Unknown user"}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon />
            </div>
          </div>
          <div className="postCenter">
            {post.desc && <span className="postText">{post.desc}</span>}
            {post.photo && <img className="postImg" src={post.photo} alt="" />}
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/post/like.png" onClick={likeHandler} alt="" />
              <img className="likeIcon" src="assets/post/heart.png"  alt="" />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
