import CartProductCard from "./CartProductCard";
import styles from "./Cart.module.scss";

const Cart = ({
	cart,
	getProduct,
	hideCartModal,
	handleShowCart,
	onDeleteProduct,
}) => {
	return (
		<>
			{cart.map((item) => (
				<CartProductCard
					productInCart={item}
					getProduct={getProduct}
					key={item.id}
					onDeleteProduct={onDeleteProduct}
				/>
			))}
			<button className={styles.checkoutButton} onClick={handleShowCart}>
				Checkout
			</button>
		</>
	);
};

export default Cart;
