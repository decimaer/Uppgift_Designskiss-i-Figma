import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductContent from "./components/ProductContent";
import ProductImg1 from "/Product-img1.png";
import ProductImg2 from "/Product-img2.png";
import ProductImg3 from "/Product-img3.png";
import ProductImg4 from "/Product-img4.png";

// The scenario is that this object is fetched from an API
const productObject = {
	id: "9432oiurewlkjfs09i32",
	company: "Sneaker Company",
	productName: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	originalPrice: "250",
	discountPrice: "125",
	discount: "50%",
	images: [
		{ src: ProductImg1, id: "img1" },
		{ src: ProductImg2, id: "img2" },
		{ src: ProductImg3, id: "img3" },
		{ src: ProductImg4, id: "img4" },
	],
};

// Imaginary fetch function
const getProduct = (productID) => {
	return productObject;
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
		}
	};

	const onDeleteProduct = (productID) => {
		const index = cart.findIndex((item) => item.id === productID);
		if (index === -1) return;

		const newCart = [...cart];
		newCart.splice(index, 1);
		setCart(newCart);
	};

	return (
		<div className="App" /* onClickCapture={handleCloseModal} */>
			<Header
				cart={cart}
				getProduct={getProduct}
				onDeleteProduct={onDeleteProduct}
			/>
			<ProductContent
				product={productObject}
				cart={cart}
				onAddProduct={onAddProduct}
			/>
		</div>
	);
};

export default App;
