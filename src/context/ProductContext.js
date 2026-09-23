import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cartItems, setCartItems] = useState([]); Plain items stored under state if we refresh items will lost

  const [cartItems, setCartItems] = useState(() => {
    const auth = JSON.parse(
      localStorage.getItem("auth")
    );

    if (auth?.isLoggedIn) {
      return JSON.parse(
        localStorage.getItem("cart")
      ) || [];
    }

    return [];
  });

  
  // Add Product To Cart
  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updateExistingItemQuantity = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });

      setCartItems(updateExistingItemQuantity);
    } else {
      const cartProduct = {
        ...product,
        quantity,
      };

      setCartItems((prevCart) => [
        ...prevCart,
        cartProduct,
      ]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id)=>{
    const updatedCartItems = cartItems.filter((item)=>{
      return id !== item.id
    })
    setCartItems(updatedCartItems);
  }

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Fetch Products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
        setLoading(false);
      });
  }, []);

  // TO Update Cart Items
  useEffect(() => {
      const auth = JSON.parse(localStorage.getItem("auth"));

      if (auth?.isLoggedIn) {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
  }, [cartItems]);

  useEffect(() => {
  const handleBeforeUnload = (e) => {
    const auth = JSON.parse(
      localStorage.getItem("auth")
    );

    if (!auth?.isLoggedIn && cartItems.length > 0) {
      e.preventDefault();
      e.returnValue = "";
    }
  };

  window.addEventListener(
    "beforeunload",
    handleBeforeUnload
  );

  return () => {
    window.removeEventListener(
      "beforeunload",
      handleBeforeUnload
    );
  };
}, [cartItems]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};