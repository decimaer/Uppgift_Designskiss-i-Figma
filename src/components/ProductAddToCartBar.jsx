import styles from "./ProductAddToCartBar.module.scss";

const ProductAddToCartBar = () => {
	return (
		<div className={styles.container}>
			<button className={styles.buttonMinus}></button>
			<span className={styles.productAmount}></span>
			<button className={styles.buttonPlus}></button>
			<button className={styles.buttonAddToCart}></button>
		</div>
	);
};

export default ProductAddToCartBar;
