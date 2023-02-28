import styles from "./HeaderCart.module.scss";
import { ReactComponent as ImgCartIcon } from "/src/assets/CartIcon.svg";

const displayNumberOfCartItems = (cart) =>
	cart.reduce((acc, cur) => acc + cur.amount, 0);

const HeaderCart = ({ cart, handleShowCart }) => {
	/* 	const handleShowCart = () => {
		console.log("click open cart");
		hideCartModal ? setHideCartModal(false) : setHideCartModal(true);
	}; */
	return (
		<div className={styles.headerCart} onClick={handleShowCart}>
			<ImgCartIcon className={styles.imgCartIcon} />
			{/* FIXME don't display if 0  */}
			<span className={styles.cartItems}>
				{displayNumberOfCartItems(cart)}
			</span>
		</div>
	);
};

export default HeaderCart;
