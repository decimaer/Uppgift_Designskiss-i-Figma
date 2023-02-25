import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductContent from "./components/ProductContent";

const productObject = {
	id: "9432oiurewlkjfs09i32",
	company: "Sneaker Company",
	productName: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	originalPrice: "$250.00",
	discountPrice: "$125.00",
	discount: "50%",
	images: [
		{ src: "/Product-img1.png", id: "img1" },
		{ src: "/Product-img2.png", id: "img2" },
		{ src: "/Product-img3.png", id: "img3" },
		{ src: "/Product-img4.png", id: "img4" },
	],
};

const App = function () {
	const [cart, setCart] = useState([]);

	const onAddProduct = (productID, amount) => {
		const index = cart.findIndex((item) => item.id === productID);
		console.log(index, productID);
		console.log(cart);
		if (index === -1) {
			setCart([...cart, { id: productID, amount: amount }]);
		} else {
			const newCart = cart.map((item) => Object.assign({}, item));

			if (newCart[index].amount > 0) {
				newCart[index].amount += amount;
				setCart(newCart);
			}
			// if (newCart[index].amount === 0) {
			// 	newCart.splice(index, 1);
			// }
		}
	};

	return (
		<div className="App">
			<Header cart={cart} />
			<ProductContent
				product={productObject}
				cart={cart}
				onAddProduct={onAddProduct}
			/>
		</div>
	);
};

export default App;
