import axios from "axios";
import { useEffect, useState } from "react";

const productData = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  ],
  isInCart: false,
};

export function ProductPage({ product, addToCart, changePrice }) {
  function handleBuyClick() {
    addToCart(product);
    alert(`Added ${product.title} to the shopping cart!`);
  }

  function handleChangePrice() {
    changePrice(product);
  }
  return (
    <>
      <button onClick={handleBuyClick}>Buy Product</button>
      <button onClick={handleChangePrice}>Change Price</button>
    </>
  );
}

export default function App() {
  const [product, setProductData] = useState(productData);

  useEffect(() => {
    axios.get("/products");
  }, []);

  const handleAddToCart = () => {
    setProductData({ ...product, isInCart: true });
    console.log("Product Added to cart", { product });
  };
  const handleChangePrice = () => {
    setProductData({ ...product, price: 99 });
  };
  return (
    <>
      <ProductPage
        product={product}
        addToCart={handleAddToCart}
        changePrice={handleChangePrice}
      />
    </>
  );
}
/**
 * React Hooks
 * 3. Manipulating the DOM with Refs -InputFocus.js,ScrollView.js
 * 4- Forwarding Refs -> RefForward.js
 * 5- Avoid changing DOM nodes managed by React -> Toggle
 *   - exercise-3 & exercise-4 & exercise-5
 * 6- useEffect -> app
 *    useEffect dependencies -> Video
 * 
 * // differences
 *     useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);

useEffects issues -> Chat.js , Playground.js

// exercise-6 & exercise-7 & exercise-8 & exercise-9

7- useMemo -> Memo.js
8- When not to useEffect -> notebook
exercise-10 & exercise-11 & exercise-12 & exercise-13

 * React Awesome components
 */
