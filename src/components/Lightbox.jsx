import { useState } from "react";
import styles from "./Lightbox.module.scss";
import ProductThumbnail from "./ProductThumbnail";

const Lightbox = function ({ product, lightboxRef, handleCloseLightbox }) {
	const [index, setIndex] = useState(0);
	// debugger;

	const handleSelectImage = (event) => {
		console.log(product.images);

		const targetId = event.target.id;
		const index = product.images.findIndex((image) => image.id === targetId);

		console.log(targetId, index);
		if (index === -1) return;

		setIndex(index);
	};

	const handleImageCarousel = (event) => {
		const length = product.images.length;
		let newIndex = index + Number(event.currentTarget.dataset.direction);

		if (newIndex === length) newIndex = 0;
		else if (newIndex < 0) newIndex = length - 1;

		setIndex(newIndex);
	};

	return (
		<dialog
			className={styles.dialog}
			ref={lightboxRef}
			onClose={handleCloseLightbox}
		>
			<button onClickCapture={handleCloseLightbox}>close</button>

			<div className={styles.lightboxContainer}>
				<button onClick={handleImageCarousel} data-direction={-1}>
					left
				</button>
				<button onClick={handleImageCarousel} data-direction={1}>
					right
				</button>
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
			</div>
		</dialog>
	);
};

export default Lightbox;
