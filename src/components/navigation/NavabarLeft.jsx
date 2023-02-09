import { notif, upload } from "../../assets/svg";

const AVATAR_IMG =
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

export default function NavbarLeft() {
  return (
    <div className="navbarLeft">
    {/* notif button */}
    <div className="notifBtn">
      <img src={notif} alt="bell" className="bellIcon" />
      <div className="notifCircleWrapper">
        <div className="notifCircle"></div>
      </div>
    </div>

    {/* avatar button */}
    <img src={AVATAR_IMG} alt="avatarImage" className="avatarImg" />

    {/* contained button */}
    <div className="uploadBtn">
      <image src={upload} alt="uploadIcon" className="uploadIcon" />
      <span>Upload</span>
    </div>
  </div>
  )
}