import { useState } from "react";
import styles from "./ProductImagePreview.module.scss";

const ProductImagePreview = function ({ product }) {
	// const [images, setImages] = useState(product.images);
	const [index, setIndex] = useState(0);
	const handleSelectImage = (event) => {
		console.log(product.images);
		const targetId = event.target.id;
		// const newImageArray = [...product.images];
		const index = product.images.findIndex((image) => image.id === targetId);
		console.log(targetId, index);

		setIndex(index);
	};

	console.log(product.images);
	// console.log(images);

	return (
		<section className={styles.container}>
			<img
				src={product.images[index].src}
				alt=""
				className={styles.fullImage}
			/>
			<div className={styles.thumbContainer} onClick={handleSelectImage}>
				{product.images.map((image, i) => (
					<img
						src={image.src}
						alt=""
						className={`${styles.thumbnail} ${
							i === index ? styles.thumbSelected : ""
						}`}
						key={image.id}
						id={image.id}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductImagePreview;
