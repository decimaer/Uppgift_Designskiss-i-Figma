import CartProductCard from "./CartProductCard";
import styles from "./Cart.module.scss";

const Cart = ({ cart, getProduct, hideCartModal, handleShowCart }) => {
	return (
		<>
			{cart.map((item) => (
				<CartProductCard
					productInCart={item}
					getProduct={getProduct}
					key={item.id}
				/>
			))}
			{/* FIXME move button to own component and share with button in ProductAddtoCartBar? */}
			<button className={styles.checkoutButton} onClick={handleShowCart}>
				Checkout
			</button>
		</>
	);
};

export default Cart;
