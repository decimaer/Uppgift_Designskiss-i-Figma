import styles from "./ProductThumbnail.module.scss";

const ProductThumbnail = ({ image, targetIndex, currentIndex }) => {
	return (
		<div
			className={`${styles.imgContainer} ${
				currentIndex === targetIndex && styles.imgContainerSelected
			}`}
		>
			<img
				src={image.src}
				alt=""
				className={`${styles.thumbnail} ${
					currentIndex === targetIndex && styles.thumbSelected
				}`}
				id={image.id}
			/>
		</div>
	);
};

export default ProductThumbnail;
