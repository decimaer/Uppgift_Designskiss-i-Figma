import "./Navbar.css";
import imgSneakers from "../assets/sneakers.svg";
import imgCartIcon from "../assets/CartIcon.svg";
import imgProfilePic from "../assets/ProfilePic.png";

// FIXME: function name, component name Header
// FIXME: import svg as component

const ProductContent = function () {
	return (
		<nav>
			<img src={imgSneakers} alt="" id="img-logo" />
			{/* FIXME class name */}
			<div className="NAMN">
				<div className="nav-menu">
					<span className="menu-item">Collections</span>
					<span className="menu-item">Men</span>

					<span className="menu-item">Women</span>
					<span className="menu-item">About</span>
					<span className="menu-item">Contact</span>
				</div>
				{/* FIXME class name */}
				<div className="NAMN2">
					<img src={imgCartIcon} alt="" id="img-cart-icon" />
					<img src={imgProfilePic} alt="" id="img-profile-pic" />
				</div>
			</div>
		</nav>
	);
};

export default ProductContent;
