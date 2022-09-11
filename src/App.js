import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Interface from './components/Interface';
import "./App.css";

const App = () => {
  const [products, setProducts] = useState();
  const [shoppingCart, setShoppingCart] = useState([]);

  const getApiData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");

      setProducts(result.data);
    } catch (error) {
      console.log("API Error!");
    }
  }
  useEffect(() => {
    getApiData();
  },[])

 const onDeleteCartItem = (id) => {
    const shoppingCartItems = [...shoppingCart];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    shoppingCartItems.splice(indexOfCartItem, 1);

    console.log("<><><>", shoppingCartItems);

    setShoppingCart( shoppingCartItems );
  };

  const onBuyNow = (id) => {
    const shoppingCartItems = [...shoppingCart];
    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    if (indexOfCartItem > -1) {
      shoppingCartItems[indexOfCartItem].quantity += 1;
    } else {
      shoppingCartItems.push({ quantity: 1, id });
    }
    setShoppingCart( shoppingCartItems );
  };

 

  if (products) {
    return (
      <Interface
        onBuyNow={onBuyNow}
        products={products}
        shoppingCartItems={shoppingCart}
        onDeleteCartItem={onDeleteCartItem}
      />
    );
  }

  return <p>Loading...</p>;
}
 
export default App;