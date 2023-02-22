import styles from "./ProductThumbnail.module.scss";

const ProductThumbnail = ({ image, targetIndex, currentIndex }) => {
	return (
		<img
			src={image.src}
			alt=""
			className={`${styles.thumbnail} ${
				currentIndex === targetIndex ? styles.thumbSelected : ""
			}`}
			id={image.id}
		/>
	);
};

export default ProductThumbnail;
