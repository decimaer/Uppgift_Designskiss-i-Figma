import "./Navbar.css";
import imgSneakers from "../assets/sneakers.svg";
import imgCartIcon from "../assets/CartIcon.svg";
import imgProfilePic from "../assets/ProfilePic.png";

const ProductContent = function () {
	return (
		<nav>
			<img src={imgSneakers} alt="" />
			<div className="nav-menu">
				<span className="menu-item">Collections</span>
				<span className="menu-item">Men</span>

				<span className="menu-item">Women</span>
				<span className="menu-item">About</span>
				<span className="menu-item">Contact</span>
			</div>
			<div>
				<img src={imgCartIcon} alt="" />
				<img src={imgProfilePic} alt="" />
			</div>
		</nav>
	);
};

export default ProductContent;
