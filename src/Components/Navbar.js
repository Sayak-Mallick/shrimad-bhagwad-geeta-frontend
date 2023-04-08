import "../Styles/main.css";
import logo from "../images/primary-logo.svg"
function Navbar() {
	
	return (
		<header>
			<div className="logo-container">
				<img src={logo} className="logo" alt="" />
			</div>
			<nav >
				<a href="/">Home</a>
				<a href="/about">About Us</a>
				<a href="http://localhost:3000" className="read-btn" style={{textAlign: "center"}}> Read The Gita </a>
			</nav>
		</header>
		
	);
}

export default Navbar;
