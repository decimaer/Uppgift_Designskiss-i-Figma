import { useState } from "react";
import styles from "./ProductImagePreview.module.scss";
import ProductThumbnail from "./ProductThumbnail";

const ProductImagePreview = function ({ product }) {
	const [index, setIndex] = useState(0);
	const handleSelectImage = (event) => {
		console.log(product.images);

		const targetId = event.target.id;
		const index = product.images.findIndex((image) => image.id === targetId);

		console.log(targetId, index);
		if (index === -1) return;

		setIndex(index);
	};

	return (
		<section className={styles.container}>
			<img
				src={product.images[index].src}
				alt=""
				className={styles.fullImage}
			/>
			<div className={styles.thumbContainer} onClick={handleSelectImage}>
				{product.images.map((image, i) => (
					<ProductThumbnail
						image={image}
						targetIndex={index}
						currentIndex={i}
						key={image.id}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductImagePreview;
