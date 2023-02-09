import "./App.css";
import { logo } from "./assets/svg";
import MenuBtn from "./components/navigation/MenuBbtn";
import NavbarLeft from "./components/navigation/NavabarLeft";

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
					<MenuBtn text="Free designs" />
					<MenuBtn text="Licence" />
					<MenuBtn text="Articles" />
					<MenuBtn text="Contributors" />
					<MenuBtn text="About" />
				</div>

				<NavbarLeft />
			</div>
			{/* sidebar left */}

			{/* END OF NAVBAR */}
			{/* main content */}
		</div>
	);
}

export default App;
