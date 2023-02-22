import ProductImagePreview from "./ProductImagePreview";
import ProductInfo from "./ProductInfo";
import styles from "./ProductContent.module.scss";
// import Cart from "./Cart";
// import Slideshow from "./Slideshow";

const ProductContent = function ({ product }) {
	return (
		<main className={styles.container}>
			<ProductImagePreview product={product} />
			<ProductInfo product={product} />
		</main>
	);
};

export default ProductContent;
