import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pols Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/ad.png" alt="" />
        <h4 className="tightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
          
        </ul>
      </div>
    </div>
  )
}