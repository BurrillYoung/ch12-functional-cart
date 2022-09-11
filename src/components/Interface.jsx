import React,{ useState, useEffect }  from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";



const Interface = (props) => {
  const [onScreenMode, onSetScreenMode] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const { products, onBuyNow, shoppingCartItems, onDeleteCartItem } =
  props;

  const filtered = [...products].filter((product) => {
  
  return product.title.toLowerCase().includes(searchTerm.toLowerCase());
});

const results = filtered.length > 0 ? filtered : products;

  return onScreenMode === 0 ? (
    <>
      <button onClick={() => onSetScreenMode(1)}>View shopping cart</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {results.map((product) => (
        <Product
          onSetScreenMode={onSetScreenMode}
          key={product.id}
          product={product}
          onBuyNow={onBuyNow}
        />
      ))}
    </>
  ) : (
    <ShoppingCart
      onSetScreenMode={onSetScreenMode}
      products={products}
      shoppingCartItems={shoppingCartItems}
      onDeleteCartItem={onDeleteCartItem}
    />
  );
}
 
export default Interface;