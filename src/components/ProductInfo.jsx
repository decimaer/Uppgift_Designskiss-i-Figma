import ProductAddToCartBar from "./ProductAddToCartBar";
import styles from "./ProductInfo.module.scss";

const ProductInfo = function ({ product, cart, onAddProduct }) {
	console.log();
	return (
		<section className={styles.container}>
			<span className={styles.companyName}>{product.company}</span>
			<h1 className={styles.productName}>{product.productName}</h1>
			<p className={styles.productDescription}>{product.description}</p>
			<span className={styles.discountPrice}>
				${product.discountPrice}.00
			</span>
			<span className={styles.discountPercent}>{product.discount}</span>
			<p className={styles.originalPrice}>${product.originalPrice}.00</p>
			<ProductAddToCartBar
				cart={cart}
				productID={product.id}
				onAddProduct={onAddProduct}
			/>
		</section>
	);
};

export default ProductInfo;
