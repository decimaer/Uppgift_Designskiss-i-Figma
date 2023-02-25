import styles from "./HeaderCart.module.scss";
import { ReactComponent as ImgCartIcon } from "/src/assets/CartIcon.svg";

const handleShowCart = () => {
	console.log("show cart");
};

const displayNumberOfCartItems = (cart) =>
	cart.reduce((acc, cur) => acc + cur.amount, 0);

const HeaderCart = ({ cart }) => {
	return (
		<div className={styles.headerCart} onClick={handleShowCart}>
			<ImgCartIcon className={styles.imgCartIcon} />
			<span className={styles.cartItems}>
				{displayNumberOfCartItems(cart)}
			</span>
		</div>
	);
};

export default HeaderCart;
