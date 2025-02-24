import "./Post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Post() {
  return (
    <>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/9.jpeg" alt="" />
                    <span className="postUsername">Fancy</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">What's Popping</span>
                <img className="postImg" src="assets/post/2.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/post/like.png" alt="" />
                    <img className="likeIcon" src="assets/post/heart.png" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>

    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/7.jpeg" alt="" />
                    <span className="postUsername">Isla</span>
                    <span className="postDate">20 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hello Everyone</span>
                <img className="postImg" src="assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/post/like.png" alt="" />
                    <img className="likeIcon" src="assets/post/heart.png" alt="" />
                    <span className="postLikeCounter">43 people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">16 comments</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
