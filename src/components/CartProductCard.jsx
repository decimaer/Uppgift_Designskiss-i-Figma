import styles from "./CartProductCard.module.scss";
import { ReactComponent as TrashIcon } from "/src/assets/trash-icon.svg";

const handleRemoveFromCart = () => {
	//TODO
	console.log("remove product from cart");
};

const CartProductCard = ({ productInCart, getProduct }) => {
	const product = getProduct(productInCart.id);
	console.log(product);
	return (
		<div className={styles.container}>
			<img src={product.images[0].src} alt="" className={styles.thumbnail} />
			<div className={styles.productInfo}>
				<p className={styles.productName}>{product.productName}</p>
				<span
					className={styles.priceByAmount}
				>{`$${product.discountPrice}.00 x ${productInCart.amount} `}</span>
				<span className={styles.sumOfPrice}>
					${productInCart.amount * product.discountPrice}.00
				</span>
			</div>
			<TrashIcon onClick={handleRemoveFromCart} />
		</div>
	);
};

export default CartProductCard;
