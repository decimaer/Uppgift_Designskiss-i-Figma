import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductContent from "./components/ProductContent";

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
		{ src: "/Product-img1.png", id: "img1" },
		{ src: "/Product-img2.png", id: "img2" },
		{ src: "/Product-img3.png", id: "img3" },
		{ src: "/Product-img4.png", id: "img4" },
	],
};

// Imaginary fetch function
const getProduct = (productID) => {
	return productObject;
};

/* const handleCloseModal = (event) => {
	// console.log(event);
	// console.log("close cart");
	// event.preventDefault();
	// event.stopPropagation();
	const dialog = document.querySelector("dialog");

	dialog.close();
}; */

const App = function () {
	const [cart, setCart] = useState([]);

	//for testing
	// setCart([{ id: "9432oiurewlkjfs09i32", amount: 1 }]);
	// setCart([...cart, { id: productObject.id, amount: 2 }]);
	// setCart([...cart, { id: productObject.id, amount: 3 }]);

	// end testing

	const onAddProduct = (productID, amount) => {
		//FIXME move out of App function?
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
		<div className="App" /* onClickCapture={handleCloseModal} */>
			<Header cart={cart} getProduct={getProduct} />
			<ProductContent
				product={productObject}
				cart={cart}
				onAddProduct={onAddProduct}
			/>
		</div>
	);
};

export default App;
