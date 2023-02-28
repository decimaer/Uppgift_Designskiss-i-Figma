import Cart from "./Cart";
import styles from "./CartModal.module.scss";

const CartModal = ({ cart, getProduct, hideCartModal, handleShowCart }) => {
	console.log(cart);
	/* TODO 
			[x] Button 
			[x] Placement 
			[x] open/close modal 
			[x] change content when empty */

	return (
		<div className={`${styles.dialog} ${hideCartModal ? styles.hidden : ""}`}>
			<p className={styles.title}>Cart</p>
			{cart.length ? (
				<Cart
					cart={cart}
					getProduct={getProduct}
					hideCartModal={hideCartModal}
					handleShowCart={handleShowCart}
				/>
			) : (
				<p className={styles.messageCartEmpty}>Your cart is empty.</p>
			)}
		</div>
	);
};

export default CartModal;
