import "./App.css";
import { logo, notif, upload } from "./assets/svg";

const AVATAR_IMG =
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

function App() {
	return (
		<div className="App">
			{/* NAVBAR SECTION */}
			<div className="navbarWrapper">
				{/* logo */}
				<img src={logo} alt="logo" className="logo" />

				{/* main menu */}
				<div className="menuWrapper">
					{/* menu btn */}
					<div className="menuBtn">
						<span className="menuBtnText">Free designs</span>
					</div>
					<div className="menuBtn">
						<span className="menuBtnText">Licence</span>
					</div>
					<div className="menuBtn">
						<span className="menuBtnText">Articles</span>
					</div>
					<div className="menuBtn">
						<span className="menuBtnText">Contributors</span>
					</div>
					<div className="menuBtn">
						<span className="menuBtnText">About</span>
					</div>
				</div>

				{/* left */}
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
			</div>
			{/* sidebar left */}

			{/* END OF NAVBAR */}
			{/* main content */}
		</div>
	);
}

export default App;
