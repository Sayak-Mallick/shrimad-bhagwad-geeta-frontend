import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 style={{position:" relative",top: "-140px",}}>Bhagwadgita Ai</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="#" className="read-btn">Read The Gita</a>
				<button
					className="nav-btn nav-close-btn"
					style={{display: "none"}}
					onClick={showNavbar}>
					<FaTimes />
				</button>
				
			</nav>
			<button
				className="nav-btn" style={{ position: "relative",top: "-130px",left: "0px"}}
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		
	);
}

export default Navbar;
