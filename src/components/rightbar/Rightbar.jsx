import "./Rightbar.css"

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lisa</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kai</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Liz</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Grace</span>
          </li>
        </ul>
      </div>
    </div>
  )
}