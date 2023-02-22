// import { useState } from 'react'
import "./App.css";
import NavBar from "./components/Navbar";
import ProductContent from "./components/ProductContent";

// import productImg1 from "./assets/Product-img1.png";
// import productImg2 from "./assets/Product-img2.png";
// import productImg3 from "./assets/Product-img3.png";
// import productImg4 from "./assets/Product-img4.png";

const productObject = {
	company: "Sneaker Company",
	productName: "Fall Limited Edition Sneakers",
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
	price: 250,
	discount: 0.5,
	images: [
		{ src: "/Product-img1.png", id: "img1" },
		{ src: "/Product-img2.png", id: "img2" },
		{ src: "/Product-img3.png", id: "img3" },
		{ src: "/Product-img4.png", id: "img4" },
	],
};

const App = function () {
	return (
		<div className="App">
			<NavBar />
			<ProductContent product={productObject} />
		</div>
	);
};

export default App;
