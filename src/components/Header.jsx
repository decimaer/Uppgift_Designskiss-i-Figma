import HeaderCart from "./HeaderCart";
import styles from "./Header.module.scss";
import { ReactComponent as ImgCartIcon } from "/src/assets/CartIcon.svg";
import { ReactComponent as ImgSneakers } from "/src/assets/sneakers.svg";
import imgProfilePic from "/src/assets/ProfilePic.png";

const Header = function ({ cart }) {
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
					<HeaderCart cart={cart} />

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
