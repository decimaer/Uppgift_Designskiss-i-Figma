import styles from "./ProductAddToCartBar.module.scss";
// import imgCartIcon from "../assets/CartIcon.svg";
import { ReactComponent as ImgCartIcon } from "../assets/CartIcon.svg";
import { ReactComponent as MinusIcon } from "../assets/minus-icon.svg";
import { ReactComponent as PlusIcon } from "../assets/plus-icon.svg";
import { useState } from "react";

const ProductAddToCartBar = ({ productID, cart, onAddProduct }) => {
	const [localNumberProducts, setLocalNumberProducts] = useState(0);

	const handleAddProduct = (event) => {
		const targetButton = event.target.closest("button")?.id;

		if (!targetButton) return;

		if (targetButton === "plusButton") {
			setLocalNumberProducts(localNumberProducts + 1);
		} else if (targetButton === "minusButton" && localNumberProducts > 0) {
			setLocalNumberProducts(localNumberProducts - 1);
		} else if (targetButton === "addButton") {
			if (!localNumberProducts) return;
			onAddProduct(productID, localNumberProducts);
			//FIXME reset localNumberProducts
		}
	};

	const displayProductAmount = (id) => {
		// FIXME remove?
		// return number of products in cart
		return cart.find((item) => item.id === id)?.amount ?? 0;
	};
	return (
		<div className={styles.container} onClick={handleAddProduct}>
			<div className={styles.plusMinusButtonContainer}>
				<button className={styles.buttonPlusMinus} id="minusButton">
					<MinusIcon />
				</button>
				<span className={styles.productAmount}>{localNumberProducts}</span>
				<button className={styles.buttonPlusMinus} id="plusButton">
					<PlusIcon />
				</button>
			</div>
			<button className={styles.buttonAddToCart} id="addButton">
				<ImgCartIcon />
				<span>Add to cart</span>
			</button>
		</div>
	);
};

export default ProductAddToCartBar;
