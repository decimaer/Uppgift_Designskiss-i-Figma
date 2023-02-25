import ProductImagePreview from "./ProductImagePreview";
import ProductInfo from "./ProductInfo";
import styles from "./ProductContent.module.scss";
// import Cart from "./Cart";
// import Slideshow from "./Slideshow";

const ProductContent = function ({ product, cart, onAddProduct }) {
	return (
		<main className={styles.container}>
			<ProductImagePreview product={product} />
			<ProductInfo
				product={product}
				cart={cart}
				onAddProduct={onAddProduct}
			/>
		</main>
	);
};

export default ProductContent;
