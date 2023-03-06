import { useState } from "react";
import HeaderCart from "./HeaderCart";
import CartModal from "./CartModal";

import styles from "./Header.module.scss";
// import { ReactComponent as ImgCartIcon } from "/src/assets/CartIcon.svg";
import { ReactComponent as ImgSneakers } from "/src/assets/sneakers.svg";
import imgProfilePic from "/src/assets/ProfilePic.png";

const Header = function ({ cart, getProduct, onDeleteProduct }) {
	const [hideCartModal, setHideCartModal] = useState(true);

	const handleShowCart = () => {
		console.log("click open cart");
		hideCartModal ? setHideCartModal(false) : setHideCartModal(true);
	};

	return (
		<header>
			<ImgSneakers className={styles.imgLogo} />
			<div className={styles.container}>
				<nav>
					<button className={styles.menuItem}>Collections</button>
					<button className={styles.menuItem}>Men</button>

					<button className={styles.menuItem}>Women</button>
					<button className={styles.menuItem}>About</button>
					<button className={styles.menuItem}>Contact</button>
				</nav>
				<div className={styles.rightSection}>
					<CartModal
						cart={cart}
						getProduct={getProduct}
						hideCartModal={hideCartModal}
						handleShowCart={handleShowCart}
						onDeleteProduct={onDeleteProduct}
					/>
					<HeaderCart cart={cart} handleShowCart={handleShowCart} />

					<img
						src={imgProfilePic}
						alt=""
						className={styles.imgProfilePic}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
