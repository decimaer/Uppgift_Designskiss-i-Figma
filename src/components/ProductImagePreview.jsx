import { useRef, useState } from "react";
import styles from "./ProductImagePreview.module.scss";
import ProductThumbnail from "./ProductThumbnail";
import Lightbox from "./Lightbox";

const ProductImagePreview = function ({ product }) {
	const [index, setIndex] = useState(0);
	const [isShowLightbox, setIsShowLightbox] = useState(false);
	const lightboxRef = useRef(null);

	const handleSelectImage = (event) => {
		console.log(product.images);

		const targetId = event.target.id;
		const index = product.images.findIndex((image) => image.id === targetId);

		console.log(targetId, index);
		if (index === -1) return;

		setIndex(index);
	};

	const handleShowLightbox = () => {
		// debugger;

		// FIXME
		// console.log("first", isShowLightbox);
		// if (!isShowLightbox) {
		lightboxRef.current.showModal();
		console.log("showing");
		// 	setIsShowLightbox(true);
		// } else {
		// 	lightboxRef.current.close();
		// 	console.log("closing");
		// 	setIsShowLightbox(false);
		// }
	};

	const handleCloseLightbox = () => {
		lightboxRef.current.close();
	};

	return (
		<section className={styles.container}>
			<img
				src={product.images[index].src}
				alt=""
				className={styles.fullImage}
				onClick={handleShowLightbox}
			/>
			<Lightbox
				product={product}
				lightboxRef={lightboxRef}
				handleShowLightbox={handleShowLightbox}
				handleCloseLightbox={handleCloseLightbox}
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
