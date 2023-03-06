import Cart from "./Cart";
import styles from "./CartModal.module.scss";

const CartModal = ({
	cart,
	getProduct,
	hideCartModal,
	handleShowCart,
	onDeleteProduct,
}) => {
	console.log(cart);
	return (
		<div className={`${styles.dialog} ${hideCartModal ? styles.hidden : ""}`}>
			<p className={styles.title}>Cart</p>
			{cart.length ? (
				<Cart
					cart={cart}
					getProduct={getProduct}
					hideCartModal={hideCartModal}
					handleShowCart={handleShowCart}
					onDeleteProduct={onDeleteProduct}
				/>
			) : (
				<p className={styles.messageCartEmpty}>Your cart is empty.</p>
			)}
		</div>
	);
};

export default CartModal;
